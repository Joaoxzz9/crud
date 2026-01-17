import re
import json
import os

def atualizar_precos():
    # 1. Ler a tabela de preços novos
    if not os.path.exists('precos_novos.json'):
        print("Arquivo precos_novos.json não encontrado!")
        return
        
    with open('precos_novos.json', 'r', encoding='utf-8') as f:
        tabela_precos = json.load(f)

    # 2. Ler o arquivo script.js
    with open('script.js', 'r', encoding='utf-8') as f:
        conteudo_js = f.read()

    # 3. Para cada celular na tabela, atualizar no JS
    for nome_celular, novo_preco in tabela_precos.items():
        # Regex que encontra o celular pelo nome e captura a parte do preço
        padrao = r"({ name: '" + re.escape(nome_celular) + r"'.*?price: )\d+"
        
        if re.search(padrao, conteudo_js):
            conteudo_js = re.sub(padrao, r"\1" + str(novo_preco), conteudo_js)
            print(f"✅ {nome_celular} atualizado para R$ {novo_preco}")
        else:
            print(f"❌ {nome_celular} não encontrado no script.js")

    # 4. Salvar as alterações no script.js
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(conteudo_js)

if __name__ == "__main__":
    atualizar_precos()