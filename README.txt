SIA - Grade do Aluno (versão estática)

COMO EDITAR OS DADOS DO ALUNO
-----------------------------
1. Abra o arquivo app.js em qualquer editor de texto (VS Code, por exemplo).
2. Na parte superior do arquivo você verá o objeto:

   const aluno = {
     dadosGerais: { ... },
     historico: [ ... ],
     disciplinas: [ ... ]
   };

3. Preencha manualmente:
   - dadosGerais.nome
   - dadosGerais.curso
   - dadosGerais.ra
   - dadosGerais.matricula
   - dadosGerais.cpf
   - dadosGerais.dataNascimento
   - dadosGerais.campus
   - dadosGerais.turno
   - dadosGerais.periodoIngresso
   - dadosGerais.periodoConclusao
   - dadosGerais.statusTexto  (ex: "Aguardando colação de grau")
   - dadosGerais.statusBadge  (ex: "Aprovado em todas as disciplinas")

4. Em "disciplinas", substitua os exemplos pelos dados reais:
   - periodo   -> "1º", "2º", "3º" etc.
   - codigo    -> código exato da disciplina (ex: "ENG101")
   - nome      -> nome exato da disciplina
   - ch        -> carga horária
   - nota      -> nota final (número)
   - situacao  -> texto (p.ex. "Aprovado")
   - ano       -> ano em que cursou (ex: 2023)
   - semestre  -> 1 ou 2

5. Em "historico", você pode ajustar os marcos principais do curso.

COMO RODAR LOCALMENTE
----------------------
1. Basta abrir o arquivo index.html em um navegador.
2. Opcionalmente, use um servidor estático (ex: Live Server no VS Code).

COMO SUBIR PARA O GITHUB + VERCEL
---------------------------------
1. Crie um repositório e suba os arquivos:
   - index.html
   - styles.css
   - app.js
   - README.txt (opcional)

2. Na Vercel:
   - Crie um novo projeto e selecione o repositório.
   - Build command: deixe em branco.
   - Output directory: ./
   - Faça o deploy.

Pronto: o aluno verá todos os dados que você configurou, com situação
"Aprovado em todas as disciplinas" e "Aguardando colação de grau".
