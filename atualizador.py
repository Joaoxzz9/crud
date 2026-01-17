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
        # Esta nova Regex aceita ' ou " e ignora espaços extras
        # Procura por name: seguido de qualquer aspa, o nome do celular e fecha aspas
        padrao = r"(name:\s*['\"]" + re.escape(nome_celular) + r"['\"].*?price:\s*)\d+"
        
        if re.search(padrao, conteudo_js):
            # Substitui mantendo a formatação original
            conteudo_js = re.sub(padrao, r"\1" + str(novo_preco), conteudo_js)
            print(f"✅ {nome_celular} atualizado para R$ {novo_preco}")
        else:
            print(f"❌ {nome_celular} não encontrado. Verifique se o nome está IGUAL no JS.")

    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(conteudo_js)

if __name__ == "__main__":
    atualizar_precos()