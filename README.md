# Portfólio | Michael Andrew

Landing page pessoal desenvolvida para apresentar serviços, projetos e canais de contato de Michael Andrew, com foco em desenvolvimento back-end, APIs, automações e sistemas sob medida.

**Acesse online:** [michaelandrew.com.br](https://michaelandrew.com.br)

## Sobre o projeto

Este repositório reúne uma landing page estática criada para funcionar como portfólio profissional e ponto de contato comercial. A proposta é comunicar posicionamento técnico com clareza, destacar projetos relevantes e facilitar o contato direto com potenciais clientes.

O projeto não possui etapa de build nem dependências locais: a página roda diretamente no navegador.

## O que a página apresenta

- posicionamento profissional com foco em back-end, regras de negócio e integrações;
- seção de serviços e forma de trabalho;
- vitrine de projetos com links externos;
- apresentação pessoal, stack e formação;
- área de contato com acesso rápido a e-mail, WhatsApp, LinkedIn e GitHub.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Tailwind CSS via CDN

## Recursos implementados

- layout responsivo;
- tema escuro/claro com persistência em `localStorage`;
- menu mobile com botão de alternância;
- navegação suave entre seções;
- destaque automático da seção ativa no menu;
- animações de entrada com `IntersectionObserver`;
- efeito de inclinação em cards no desktop;
- suporte a `prefers-reduced-motion`.

## Estrutura do projeto

```bash
.
├── CNAME
├── favicon.svg
├── index.css
├── index.html
├── index.js
└── image/
    ├── Obox.png
    ├── SGA.jpeg
    ├── controle_de_estoque.jpeg
    ├── dashboard.png
    ├── mafia_dogs.png
    ├── planeta_acai.png
    ├── portifolio1.jpg
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

- edite os textos e links em `index.html`;
- ajuste cores, transições e estilos em `index.css`;
- altere interações e comportamentos em `index.js`;
- substitua imagens dentro de `image/`;
- atualize o domínio no arquivo `CNAME`, se necessário.

## Projetos destacados na landing page

- Obox CRM
- Controle de Estoque
- Gestão de Agendamentos
- Planeta d'Açaí
- Máfia Dog's

## Contato

- E-mail: [michael@michaelandrew.com.br](mailto:michael@michaelandrew.com.br)
- WhatsApp: [Iniciar conversa](https://wa.me/5519999894514)
- LinkedIn: [Michael Andrew](https://www.linkedin.com/in/michael-andrew-henrique-faustino-2123bb143/)
- GitHub: [Michael Andrew](https://github.com/michaelandrewhf)
