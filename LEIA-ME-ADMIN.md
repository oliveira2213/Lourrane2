# Painel privado 100% grátis (Google Planilhas) — 10 minutos

Só precisa de uma conta Google. Sem cartão, sem Firebase.

## 1. Criar a planilha e o script
1. Acesse https://sheets.google.com → **Planilha em branco** (nome: `Painel Lourrane`).
2. Menu **Extensões → Apps Script**.
3. Apague o que estiver lá, cole todo o conteúdo do arquivo **apps-script/Code.gs**.
4. Troque `TROQUE_POR_UMA_SENHA_GRANDE` por uma senha longa sua (é a senha do painel). Salve (Ctrl+S).

## 2. Publicar o script
1. Botão **Implantar → Nova implantação** → engrenagem ⚙️ → **App da Web**.
2. **Executar como:** Eu (seu e-mail). **Quem pode acessar:** Qualquer pessoa.
3. **Implantar** → autorize (aparece "app não verificado": Avançado → Acessar → Permitir; é o seu próprio script).
4. **Copie a URL do app da Web** (termina em `/exec`).

## 3. Ligar no site
- Abra **config.js** e cole a URL no lugar de `COLE_AQUI`.
- Suba a pasta inteira no GitHub. Site dela: `.../index.html`. Seu painel: `.../admin.html` (digite a senha do passo 1.4).

## 4. Testar
Abra o site, clique em coisas, e veja aparecer no painel (até 10s) e na aba `eventos` da planilha.

## Se você mudar o código do script depois
Implantar → **Gerenciar implantações** → editar → **Nova versão** (senão continua a antiga).

## Segurança
- Ler os dados exige a senha; sem ela o script só responde "senha".
- A planilha é sua e privada (só você abre).
- Só é registrado o que ela faz DENTRO do site. Nada de IP, localização ou dados do aparelho.
