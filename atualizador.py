import re

# Dados para o teste
celular_alvo = "Galaxy S25 Ultra"
novo_preco = 8200 # Mudamos o valor para voce notar a diferença

def atualizar_js():
    try:
        with open("script.js", "r", encoding="utf-8") as f:
            conteudo = f.read()

        # Esta linha procura o nome do celular e troca o numero do preco
        padrao = r"({ name: '" + celular_alvo + r"'.*?price: )\d+"
        novo_conteudo = re.sub(padrao, r"\1" + str(novo_preco), conteudo)

        with open("script.js", "w", encoding="utf-8") as f:
            f.write(novo_conteudo)
        
        print(f"Sucesso! Preco do {celular_alvo} alterado para {novo_preco}")
    except Exception as e:
        print(f"Erro ao atualizar: {e}")

if __name__ == "__main__":
    atualizar_js()