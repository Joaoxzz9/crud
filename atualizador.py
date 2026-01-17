import re
import json
import os

def atualizar_precos():
    if not os.path.exists('precos_novos.json'):
        print("Arquivo precos_novos.json não encontrado!")
        return
        
    with open('precos_novos.json', 'r', encoding='utf-8') as f:
        tabela_precos = json.load(f)

    with open('script.js', 'r', encoding='utf-8') as f:
        conteudo_js = f.read()

    for nome_celular, novo_preco in tabela_precos.items():
        # A correção principal: re.escape e suporte a qualquer caractere entre nome e preço
        # O (.*?) agora vai procurar em toda a linha até achar o price
        padrao = r"(name:\s*['\"]" + re.escape(nome_celular) + r"['\"].*?price:\s*)\d+"
        
        # Usamos re.DOTALL para garantir que ele não pare no fim da linha
        if re.search(padrao, conteudo_js, re.DOTALL):
            conteudo_js = re.sub(padrao, r"\1" + str(novo_preco), conteudo_js, flags=re.DOTALL)
            print(f"✅ {nome_celular} atualizado para R$ {novo_preco}")
        else:
            print(f"❌ {nome_celular} não encontrado. Verifique se o nome está IGUAL no JS.")

    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(conteudo_js)

if __name__ == "__main__":
    atualizar_precos()