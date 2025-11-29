# 📘 Ambiente de Teste & Homologação — Projeto CalmaMente

Este repositório é dedicado aos ambientes de **Teste** e **Homologação** do projeto **CalmaMente**, uma plataforma focada em saúde e bem-estar digital.  
Aqui são validados fluxos, funcionalidades, layout e correções antes da liberação para Produção.

---

## 🌐 Ambientes
- **Repositório:** https://github.com/equipe-calmamente/site-teste
- **Site:** https://equipe-calmamente.github.io/site-teste/

---

# 🔄 Passo a Passo — Baixar pasta do GitHub e conectar via VS Code + Git Bash
✅ 1. Baixar o projeto do GitHub

Acesse o repositório no GitHub.

Clique no botão Code (verde).

Clique em Download ZIP.

Extraia o ZIP em uma pasta no computador.

✅ 2. Abrir o projeto no VS Code

Abra o VS Code

Vá em File > Open Folder

Selecione a pasta extraída do ZIP.

✅ 3. Abrir o terminal Git Bash dentro do VS Code

Aperte: Ctrl + Shift + '

No terminal, clique na setinha ao lado do nome do terminal

Escolha Select Default Profile → Git Bash

Abra um novo terminal:

+ New Terminal

✅ 4. Inicializar o Git dentro da pasta baixada

(Na pasta que eles baixaram)

git init

✅ 5. Conectar ao repositório remoto (GitHub)

Eles precisam conectar a pasta local ao repositório online:

git remote add origin https://github.com/equipe-calmamente/site-teste/


Verificar se conectou:

git remote -v

✅ 6. Baixar o conteúdo do repositório remoto (primeira sincronização)

Como eles baixaram um ZIP sem histórico, precisam alinhar com o remoto.

Se o repositório remoto já tem commits ANTES deles conectarem, faça:

git pull origin main --allow-unrelated-histories


ou (dependendo do branch):

git pull origin master --allow-unrelated-histories


Isso evita conflito por “histórias não relacionadas”.

✅ 7. Fazer alterações e enviar para o GitHub

Depois de editar algo:

git add .
git commit -m "Atualizações iniciais após conectar"
git push -u origin main


Ou master, dependendo do branch.

📌 Fluxo diário de sincronização

Sempre fazer na ordem:

1️⃣ Baixar alterações do GitHub

git pull


2️⃣ Fazer as alterações no código
3️⃣ Adicionar tudo

git add .


4️⃣ Commit

git commit -m "Mensagem"


5️⃣ Enviar para o GitHub

git push
