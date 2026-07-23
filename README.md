# Portfólio | Michael Andrew

Landing page estática de Michael Andrew Henrique Faustino para uso como portfólio profissional, complemento de currículo e ponto de contato comercial para serviços de desenvolvimento backend, APIs, integrações, automações e sistemas web sob medida.

**Acesse online:** [michaelandrew.com.br](https://michaelandrew.com.br)

## Sobre o projeto

Este repositório reúne uma landing page estática compatível com GitHub Pages. A proposta é comunicar posicionamento técnico com clareza, destacar projetos reais como estudos de caso, apoiar recrutadores na leitura do perfil profissional e facilitar contato direto com potenciais clientes.

O projeto não possui backend, etapa de build, variáveis de ambiente ou dependências locais: a página roda diretamente no navegador e pode ser publicada pelo GitHub Pages.

## O que a página apresenta

- posicionamento profissional: Backend Developer com Python, Django, APIs e Automações;
- jornadas para recrutadores e potenciais clientes;
- serviços orientados a problemas de negócio;
- processo de trabalho;
- projetos apresentados como estudos de caso;
- experiência profissional, tecnologias, certificações e sobre;
- modal centralizado de currículos;
- área de contato com e-mail, WhatsApp, LinkedIn e GitHub;
- metadados de SEO, Open Graph, JSON-LD, `robots.txt`, `sitemap.xml` e manifesto.

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Recursos implementados

- layout responsivo;
- menu mobile acessível com `aria-expanded`, fechamento por link, clique externo e `Esc`;
- navegação suave entre seções;
- destaque automático da seção ativa no menu;
- animações de entrada com `IntersectionObserver`;
- modal de currículos com gerenciamento básico de foco;
- suporte a `prefers-reduced-motion`.

## Estrutura do projeto

```bash
.
├── AGENTS.md
├── CNAME
├── documents/
│   ├── michael-andrew-curriculo-pt-br-detalhado.pdf
│   ├── michael-andrew-curriculo-pt-br-resumido.pdf
│   └── michael-andrew-resume-en.pdf
├── favicon.svg
├── index.css
├── index.html
├── index.js
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── image/
    ├── Obox.png
    ├── SGA.png
    ├── Script_troca_de_postes.png
    ├── controle_de_estoque.jpeg
    ├── mafia_dogs.png
    ├── planeta_acai.png
    ├── portifolio.png
    ├── projeto_login.png
    └── projetocordel.png
```

## Como executar localmente

Abra o arquivo `index.html` no navegador.

Se preferir servir a página com um servidor local:

```bash
python -m http.server
```

Depois acesse:

```bash
http://localhost:8000
```

## Personalização

- edite conteúdos repetidos no objeto `siteContent` em `index.js`;
- ajuste estrutura semântica, SEO e containers em `index.html`;
- ajuste cores, layout, responsividade e estados em `index.css`;
- altere interações e comportamentos em `index.js`;
- substitua imagens dentro de `image/`;
- atualize o domínio no arquivo `CNAME`, se necessário.

## Currículos

Os caminhos dos currículos ficam centralizados em `siteContent.resumes`, dentro de `index.js`.

Estado atual:

- `/documents/michael-andrew-curriculo-pt-br-resumido.pdf`: currículo resumido em português, 1 página.
- `/documents/michael-andrew-curriculo-pt-br-detalhado.pdf`: currículo detalhado em português, 2 páginas.
- `/documents/michael-andrew-resume-en.pdf`: resume em inglês.

Para substituir os PDFs, mantenha os mesmos nomes configurados em `siteContent.resumes` ou atualize `file` e `downloadName` no mesmo objeto.

## Publicação no GitHub Pages

O site é compatível com GitHub Pages porque usa apenas arquivos estáticos.

1. Publique a branch configurada no GitHub Pages.
2. Mantenha `CNAME` com `michaelandrew.com.br`.
3. Garanta que os arquivos públicos referenciados por caminhos absolutos, como `/documents/michael-andrew-curriculo-pt-br-detalhado.pdf`, estejam publicados.
4. Após publicar, valide:
   - `https://michaelandrew.com.br/`
   - `https://michaelandrew.com.br/documents/michael-andrew-curriculo-pt-br-detalhado.pdf`
   - `https://michaelandrew.com.br/robots.txt`
   - `https://michaelandrew.com.br/sitemap.xml`

## Projetos destacados na landing page

- SGA — Sistema de Gestão de Agendamentos
- OBOX — Gestão de academia
- Automação CPFL
- Controle de Estoque
- Landing pages comerciais

## Contato

- E-mail: [contato@michaelandrew.com.br](mailto:contato@michaelandrew.com.br)
- WhatsApp: [Iniciar conversa](https://wa.me/5519999894514)
- LinkedIn: [Michael Andrew](https://www.linkedin.com/in/michael-andrew-henrique-faustino-2123bb143/)
- GitHub: [Michael Andrew](https://github.com/michaelandrewhf)
