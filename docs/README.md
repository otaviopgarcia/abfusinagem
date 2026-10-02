# Site ABF Ferramentaria e Usinagem de Precisão

Site estático da ABF Ferramentaria e Usinagem de Precisão, com páginas em estrutura de diretórios simples e sem dependências externas de build.

## Estrutura do projeto

```text
abfusinagem/
├── index.html
├── contato/
│   └── index.html
├── maquinas/
│   └── index.html
├── imgs/
│   ├── favicon.png
│   └── logo.png
├── scripts/
│   └── script.js
├── styles/
│   └── style.css
├── docs/
│   └── README.md
└── .gitignore (opcional)
```

- `index.html`: página inicial
- `contato/index.html`: página de contato e orçamento
- `maquinas/index.html`: página com o parque de máquinas
- `styles/style.css`: estilos do site
- `scripts/script.js`: interações e scripts do site
- `imgs/`: imagens e favicon

## Como publicar no GitHub Pages

1. Faça o upload da pasta do projeto para um repositório no GitHub.
2. No GitHub, vá em `Settings` > `Pages`.
3. Em `Source`, selecione: `Deploy from a branch`.
4. Escolha a branch principal (por exemplo `main`) e a pasta raiz `/`.
5. Salve.
6. O site ficará disponível em algo como:
   `https://SEU-USUARIO.github.io/NOME-DO-REPO/`

## Observações importantes

- Os links do site estão em caminhos relativos, então a estrutura de pastas deve ser mantida.
- O favicon está em `imgs/favicon.png`.
- O projeto não exige Node.js, build tools ou dependências.

## Formulário de contato

O formulário usa Formspree e o endpoint atual está em:

`https://formspree.io/f/mjykqzzz`

Se for necessário trocar o formulário, ajuste o `action` no arquivo `contato/index.html`.

## TODOs

- [ ] Substituir os placeholders das máquinas por fotos reais
- [ ] Confirmar o ID final do Formspree, se necessário
- [ ] Trocar `imgs/logo.png` pela versão final da marca
- [ ] Incluir `og:image` e `og:url` quando houver domínio definitivo
- [ ] Adicionar horário de atendimento, se desejar exibir no site
- [x] Ajustar a estrutura de pastas para as páginas de contato e máquinas
- [x] Confirmar a referência de energia renovável no texto institucional

## Headline sugerida para o hero

1. Usinagem de precisão que impulsiona o seu negócio
2. Do projeto à peça pronta, com precisão e prazo
3. Peças usinadas sob medida, da unidade à larga escala