import re

# Vamos simular que o robô descobriu que o S25 Ultra baixou o preço
celular_alvo = "Galaxy S25 Ultra"
novo_preco = 8450 # Preço atualizado

def atualizar_js():
    with open("script.js", "r", encoding="utf-8") as f:
        conteudo = f.read()

    # Procura o nome do celular e muda o valor do "price" que vem logo depois
    padrao = r"({ name: '" + celular_alvo + r"'.*?price: )\d+"
    novo_conteudo = re.sub(padrao, r"\1" + str(novo_preco), conteudo)

    with open("script.js", "w", encoding="utf-8") as f:
        f.write(novo_conteudo)
    
    print(f"Sucesso! O {celular_alvo} agora custa R$ {novo_preco}")

if __name__ == "__main__":
    atualizar_js()