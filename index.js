const siteContent = {
    links: {
        email: "contato@michaelandrew.com.br",
        whatsappPhone: "5519999894514",
        github: "https://github.com/michaelandrewhf",
        linkedin: "https://www.linkedin.com/in/michael-andrew-henrique-faustino-2123bb143/"
    },
    resumes: [
        {
            language: "pt-BR",
            type: "compact",
            label: "Currículo resumido",
            description: "Português - 1 página",
            file: "/documents/michael-andrew-curriculo-pt-br-resumido.pdf",
            downloadName: "michael-andrew-curriculo-pt-br-resumido.pdf",
            available: true
        },
        {
            language: "pt-BR",
            type: "detailed",
            label: "Currículo detalhado",
            description: "Português - 2 páginas",
            file: "/documents/michael-andrew-curriculo-pt-br-detalhado.pdf",
            downloadName: "michael-andrew-curriculo-pt-br-detalhado.pdf",
            available: true
        },
        {
            language: "en",
            type: "resume",
            label: "Resume in English",
            description: "Inglês",
            file: "/documents/michael-andrew-resume-en.pdf",
            downloadName: "michael-andrew-resume-en.pdf",
            available: true
        }
    ],
    journeys: [
        {
            title: "Estou buscando um desenvolvedor",
            description: "Experiência, competências, projetos, certificações, GitHub, LinkedIn e currículo.",
            cta: "Ver perfil profissional",
            href: "#experiencia"
        },
        {
            title: "Preciso desenvolver uma solução",
            description: "Sistemas web, automações, APIs e integrações adaptadas ao processo do negócio.",
            cta: "Conhecer serviços",
            href: "#servicos"
        }
    ],
    services: [
        {
            title: "Sistemas web sob medida",
            description: "Para negócios que precisam organizar cadastros, atendimentos, operações, agendas, pagamentos ou rotinas internas em um único sistema.",
            deliveries: ["Sistemas administrativos", "Plataformas SaaS", "Áreas autenticadas", "Gestão de clientes", "Agendas e fluxos operacionais", "Relatórios e dashboards"],
            message: "sistemas web sob medida"
        },
        {
            title: "APIs e integrações",
            description: "Para conectar aplicações e evitar duplicação de trabalho entre diferentes plataformas.",
            deliveries: ["APIs REST", "Integração com serviços externos", "Webhooks", "Autenticação", "Integração com meios de comunicação", "Google APIs", "Documentação de APIs"],
            message: "APIs e integrações"
        },
        {
            title: "Automações de processos",
            description: "Para substituir tarefas repetitivas e manuais por fluxos executados de forma consistente.",
            deliveries: ["Processamento de planilhas", "Leitura e organização de e-mails", "Manipulação e envio de documentos", "Notificações", "Tarefas periódicas", "Gmail, Google Drive e WhatsApp"],
            message: "automações de processos"
        },
        {
            title: "Backend e evolução de produtos",
            description: "Para projetos que precisam criar, estruturar, corrigir ou evoluir seu backend.",
            deliveries: ["Django e Django REST Framework", "Modelagem de dados", "Regras de negócio", "Processamento assíncrono", "Testes", "Correção de bugs", "Containerização e CI/CD"],
            message: "backend e evolução de produtos"
        },
        {
            title: "Aplicações com Inteligência Artificial",
            description: "Competência complementar para usar IA quando ela ajuda o fluxo, sem tratar modelos como resposta para todo problema.",
            deliveries: ["Assistentes integrados a sistemas", "Agentes com acesso controlado a ferramentas", "Consulta a bases documentais", "Automação apoiada por modelos de linguagem", "Integração de IA com APIs e bancos de dados"],
            message: "aplicações com inteligência artificial"
        }
    ],
    process: [
        {
            title: "Entendimento",
            description: "Levantamento do problema, objetivo e processo atual."
        },
        {
            title: "Planejamento",
            description: "Definição de escopo, arquitetura, entregas e critérios de aceite."
        },
        {
            title: "Desenvolvimento",
            description: "Implementação incremental, versionamento e acompanhamento."
        },
        {
            title: "Validação",
            description: "Testes funcionais, qualidade, segurança e revisão."
        },
        {
            title: "Entrega e evolução",
            description: "Documentação, implantação acordada e próximos passos."
        }
    ],
    projects: [
        {
            title: "SGA - Sistema de Gestão de Agendamentos",
            image: "image/SGA.png",
            alt: "Tela do Sistema de Gestão de Agendamentos",
            status: "Produto próprio",
            context: "Produto voltado a negócios que trabalham com horários, atendimento e organização de agenda.",
            problem: "Centralizar serviços, horários, disponibilidade, comunicação e acompanhamento operacional em um fluxo mais organizado.",
            solution: "Arquitetura SaaS com gestão de serviços e horários, regras de disponibilidade, tarefas assíncronas, integração com WhatsApp e assistente de IA integrado a dados e ferramentas do sistema.",
            features: ["Gestão de serviços e horários", "Regras de disponibilidade e conflitos", "Lembretes e confirmações", "WhatsApp", "Tarefas assíncronas", "Assistente de IA"],
            decisions: ["Backend Django com dados relacionais", "PostgreSQL para persistência", "Redis e Celery para rotinas em segundo plano", "Docker para ambiente de execução"],
            technologies: ["Django", "PostgreSQL", "Redis", "Celery", "Docker", "Gemini"],
            links: [
                { label: "Ver projeto online", href: "https://gestaodeagendamento.com" }
            ]
        },
        {
            title: "OBOX - Gestão de academia",
            image: "image/Obox.png",
            alt: "Tela do sistema OBOX para gestão de academia",
            status: "Sistema de operação real",
            context: "Sistema criado a partir de necessidades reais de operação de academia.",
            problem: "Organizar alunos, planos, mensalidades, pagamentos, contas, vendas, estoque e visão financeira sem depender de controles espalhados.",
            solution: "Sistema web com regras de ativação e inativação, recebimento de mensalidades, fluxo de caixa, controle operacional e relatórios.",
            features: ["Alunos e planos", "Mensalidades e pagamentos", "Fluxo de caixa", "Contas", "Vendas e estoque", "Relatórios", "Regras de ativação e inativação"],
            decisions: ["Backend Django para regras de negócio", "Processamento assíncrono para rotinas operacionais", "Interface administrativa objetiva para uso recorrente"],
            technologies: ["Python", "Django", "PostgreSQL", "Celery", "RabbitMQ", "Tailwind CSS", "Alpine.js"],
            links: [
                { label: "Link público indisponível", href: null }
            ]
        },
        {
            title: "Automação CPFL",
            image: "image/Script_troca_de_postes.png",
            alt: "Imagem de painel representando automação operacional",
            status: "Automação operacional",
            context: "Automação para apoiar fluxo de obtenção, organização e envio de documentos relacionados a obras.",
            problem: "Reduzir etapas manuais de busca de mensagens, localização de anexos PDF, organização em nuvem e composição de comunicações.",
            solution: "Fluxo que pesquisa mensagens no Gmail, identifica anexos PDF, envia documentos ao Google Drive, gera links e compõe mensagens para envio por WhatsApp/Evolution API.",
            features: ["Obtenção de obras por TES", "Pesquisa no Gmail", "Identificação de anexos PDF", "Upload para Google Drive", "Geração de links", "Composição de mensagem", "WhatsApp/Evolution API"],
            decisions: ["Integração com Google APIs", "Separação entre busca, armazenamento e envio", "Automação sem expor credenciais no frontend"],
            technologies: ["Python", "Gmail API", "Google Drive API", "Evolution API", "Automação"],
            links: [
                { label: "Projeto sem link público", href: null }
            ]
        },
        {
            title: "Controle de Estoque",
            image: "image/controle_de_estoque.jpeg",
            alt: "Tela do projeto Controle de Estoque",
            status: "Repositório público",
            context: "Projeto para rastrear equipamentos, movimentações e leitura operacional de estoque.",
            problem: "Evitar perda de rastreabilidade em entradas, saídas, marcas, modelos e histórico de movimentação.",
            solution: "Aplicação web com cadastro estruturado, histórico de movimentações e dashboard para leitura gerencial.",
            features: ["Cadastro de marcas e modelos", "Controle de equipamentos", "Histórico de movimentação", "Dashboard"],
            decisions: ["Modelagem relacional", "Interface simples para operação", "Gráficos para leitura rápida"],
            technologies: ["Python", "Django", "PostgreSQL", "Tailwind CSS", "Alpine.js", "Chart.js"],
            links: [
                { label: "Ver repositório", href: "https://github.com/michaelandrewhf/controle_de_equipamento" }
            ]
        },
        {
            title: "Landing pages comerciais",
            image: "image/planeta_acai.png",
            alt: "Tela da landing page Planeta do Açaí",
            status: "Projetos publicos",
            context: "Páginas estáticas para marcas que precisam apresentar produto, cardápio e contato direto.",
            problem: "Transformar informações soltas em páginas claras, responsivas e direcionadas a contato ou pedido.",
            solution: "Landing pages leves com hierarquia visual, seção de produtos, CTAs para WhatsApp e navegação objetiva.",
            features: ["Hero comercial", "Cardápio ou produtos", "CTA WhatsApp", "Responsividade", "Hospedagem simples"],
            decisions: ["HTML, CSS e JavaScript sem backend", "Conteúdo direto para conversão", "Baixo custo de manutenção"],
            technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Google Fonts"],
            links: [
                { label: "Planeta d'Açaí", href: "https://michaelandrewhf.github.io/PlanetaAcai/" },
                { label: "Mafia Dog's", href: "https://michaelandrewhf.github.io/mafiadogs/" }
            ]
        }
    ],
    technologies: [
        { group: "Backend", items: ["Python", "Django", "Django REST Framework", "Celery"] },
        { group: "Dados e mensageria", items: ["PostgreSQL", "Redis", "RabbitMQ"] },
        { group: "APIs e integrações", items: ["REST", "OpenAPI", "JWT", "OAuth 2.0", "Webhooks", "Gmail API", "Google Drive API", "Evolution API"] },
        { group: "DevOps e infraestrutura", items: ["Docker", "Docker Compose", "GitHub Actions", "Nginx", "Linux", "AWS", "Terraform"] },
        { group: "Qualidade e observabilidade", items: ["Pytest", "Ruff", "Black", "Pre-commit", "Logging estruturado", "Sentry"] },
        { group: "Inteligência Artificial", items: ["LangChain", "LangGraph", "RAG", "Gemini", "Integração de modelos com ferramentas e dados"] }
    ],
    certifications: [
        { title: "Django Master - Aplicações Web com Python e Django", hours: "45 horas" },
        { title: "Django Master - APIs Modernas com Python e Django", hours: "18 horas" },
        { title: "Django Master - Arquitetura e Modelagem de Sistemas Modernos", hours: "21 horas" },
        { title: "IA Master - Aplicações de Inteligência Artificial com Python", hours: "12 horas" },
        { title: "Integration Master - Integrações de Sistemas e APIs com Python", hours: "12 horas" },
        { title: "Open English - Level 1", hours: "Certificação complementar" },
        { title: "Experiência voluntária certificada na Lacrei Saúde", hours: "Horas não somadas sem verificação de sobreposição" }
    ]
};

const selectors = {
    navLinks: ".nav-link",
    reveal: ".reveal",
    openResumes: "[data-open-resumes]",
    closeResumes: "[data-close-resumes]"
};

const menuToggle = document.getElementById("menu-toggle");
const siteHeader = document.querySelector(".site-header");
const siteNav = document.getElementById("site-nav");
const resumeModal = document.getElementById("resume-modal");
const resumePanel = resumeModal?.querySelector(".modal-panel");
let lastFocusedElement = null;

const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#039;"
    }[char]));

const safeUrl = (value) => {
    const url = String(value);
    const allowedRelative = url.startsWith("/") || url.startsWith("#") || url.startsWith("image/");
    const allowedAbsolute = /^(https:|mailto:)/i.test(url);
    return allowedRelative || allowedAbsolute ? escapeHtml(url) : "#";
};

const whatsappUrl = (topic) => {
    const message = `Ola, Michael. Encontrei seu portfolio e gostaria de conversar sobre ${topic}.`;
    return `https://wa.me/${siteContent.links.whatsappPhone}?text=${encodeURIComponent(message)}`;
};

const renderList = (targetId, items, template) => {
    const target = document.getElementById(targetId);
    if (!target) {
        return;
    }
    target.innerHTML = items.map(template).join("");
};

const renderContent = () => {
    renderList("journey-list", siteContent.journeys, (item) => `
        <article class="journey-card reveal">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
            <a class="button button-ghost" href="${safeUrl(item.href)}">${escapeHtml(item.cta)}</a>
        </article>
    `);

    renderList("service-list", siteContent.services, (service, index) => `
        <article class="service-card reveal">
            <p class="panel-label">${String(index + 1).padStart(2, "0")}</p>
            <h3>${escapeHtml(service.title)}</h3>
            <p>${escapeHtml(service.description)}</p>
            <p class="case-section-title">Possiveis entregas</p>
            <ul>${service.deliveries.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            <a class="button button-secondary" href="${safeUrl(whatsappUrl(service.message))}" target="_blank" rel="noopener noreferrer">Conversar sobre este servico</a>
        </article>
    `);

    renderList("process-list", siteContent.process, (step) => `
        <li class="reveal">
            <h3>${escapeHtml(step.title)}</h3>
            <p>${escapeHtml(step.description)}</p>
        </li>
    `);

    renderList("project-list", siteContent.projects, (project) => `
        <article class="case-card reveal">
            <div class="case-media">
                <img src="${safeUrl(project.image)}" alt="${escapeHtml(project.alt)}" width="720" height="480" loading="lazy">
            </div>
            <div class="case-body">
                <div class="case-meta">
                    <span class="status-pill">${escapeHtml(project.status)}</span>
                </div>
                <h3>${escapeHtml(project.title)}</h3>
                <p><strong>Contexto:</strong> ${escapeHtml(project.context)}</p>
                <p><strong>Problema:</strong> ${escapeHtml(project.problem)}</p>
                <p><strong>Solução:</strong> ${escapeHtml(project.solution)}</p>
                <p class="case-section-title">Principais funcionalidades</p>
                <ul>${project.features.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                <p class="case-section-title">Decisões técnicas</p>
                <ul>${project.decisions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                <p class="case-section-title">Tecnologias</p>
                <div class="tag-list">${project.technologies.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
                <div class="case-actions">
                    ${project.links.map((link) => link.href
                        ? `<a class="button button-ghost" href="${safeUrl(link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`
                        : `<span class="button button-ghost" aria-disabled="true">${escapeHtml(link.label)}</span>`
                    ).join("")}
                </div>
            </div>
        </article>
    `);

    renderList("technology-list", siteContent.technologies, (group) => `
        <article class="tech-card reveal">
            <h3>${escapeHtml(group.group)}</h3>
            <div class="tag-list">${group.items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
        </article>
    `);

    renderList("certification-list", siteContent.certifications, (certification) => `
        <article class="certification-card reveal">
            <h3>${escapeHtml(certification.title)}</h3>
            <span class="certification-hours">${escapeHtml(certification.hours)}</span>
        </article>
    `);

    renderList("contact-list", [
        {
            label: "Solicitar uma conversa",
            value: "WhatsApp com mensagem inicial",
            href: whatsappUrl("um projeto"),
            external: true,
            icon: "chat"
        },
        {
            label: "Enviar um e-mail",
            value: siteContent.links.email,
            href: `mailto:${siteContent.links.email}?subject=${encodeURIComponent("Contato pelo portfolio")}`,
            external: false,
            icon: "mail"
        },
        {
            label: "Falar pelo WhatsApp",
            value: "Clique para iniciar a conversa",
            href: whatsappUrl("solução de software"),
            external: true,
            icon: "phone"
        },
        {
            label: "LinkedIn",
            value: "Perfil profissional",
            href: siteContent.links.linkedin,
            external: true,
            icon: "link"
        }
    ], (contact) => `
        <a class="contact-card" href="${safeUrl(contact.href)}" ${contact.external ? "target=\"_blank\" rel=\"noopener noreferrer\"" : ""}>
            <span class="contact-icon" aria-hidden="true">${iconSvg(contact.icon)}</span>
            <span>
                <strong>${escapeHtml(contact.label)}</strong>
                <span>${escapeHtml(contact.value)}</span>
            </span>
        </a>
    `);

    renderResumes();
};

const iconSvg = (icon) => {
    const icons = {
        chat: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5A8.48 8.48 0 0 1 21 11v.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        mail: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4V6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        phone: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        link: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    };
    return icons[icon] || icons.link;
};

const renderResumes = () => {
    const target = document.getElementById("resume-list");
    if (!target) {
        return;
    }

    target.innerHTML = siteContent.resumes.map((resume) => `
        <article class="resume-card">
            <div>
                <strong>${escapeHtml(resume.label)}</strong>
                <p>${escapeHtml(resume.description)}</p>
            </div>
            <div class="resume-actions">
                ${resume.available ? `
                    <a class="button button-primary compact" href="${safeUrl(resume.file)}" download="${escapeHtml(resume.downloadName)}">Baixar</a>
                    <a class="button button-ghost compact" href="${safeUrl(resume.file)}" target="_blank" rel="noopener noreferrer">Abrir</a>
                ` : `
                    <span class="pending">A confirmar</span>
                `}
            </div>
        </article>
    `).join("");
};

const setMenuState = (isOpen) => {
    siteNav?.classList.toggle("is-open", isOpen);
    siteHeader?.classList.toggle("menu-expanded", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle?.setAttribute("aria-expanded", String(isOpen));
    menuToggle?.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
};

const openResumeModal = () => {
    if (!resumeModal || !resumePanel) {
        return;
    }
    const menuWasOpen = siteNav?.classList.contains("is-open");
    lastFocusedElement = menuWasOpen ? menuToggle : document.activeElement;
    if (menuWasOpen) {
        setMenuState(false);
    }
    resumeModal.hidden = false;
    document.body.classList.add("menu-open");
    requestAnimationFrame(() => resumePanel.focus());
};

const closeResumeModal = () => {
    if (!resumeModal) {
        return;
    }
    resumeModal.hidden = true;
    document.body.classList.remove("menu-open");
    if (lastFocusedElement instanceof HTMLElement) {
        lastFocusedElement.focus();
    }
};

const trapModalFocus = (event) => {
    if (resumeModal?.hidden || event.key !== "Tab") {
        return;
    }

    const focusable = [...resumeModal.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])")]
        .filter((element) => element instanceof HTMLElement && !element.hasAttribute("disabled"));

    if (focusable.length === 0) {
        return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
};

const setupNavigation = () => {
    const navLinks = [...document.querySelectorAll(selectors.navLinks)];
    const sections = [...document.querySelectorAll("main section[id]")];

    menuToggle?.addEventListener("click", () => {
        setMenuState(!siteNav?.classList.contains("is-open"));
    });

    document.addEventListener("click", (event) => {
        if (!siteNav?.classList.contains("is-open")) {
            return;
        }

        const target = event.target;
        if (target instanceof Node && siteHeader?.contains(target)) {
            return;
        }

        setMenuState(false);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && siteNav?.classList.contains("is-open")) {
            setMenuState(false);
            menuToggle?.focus();
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
    });

    if (sections.length === 0) {
        return;
    }

    const setActiveNav = () => {
        const marker = window.scrollY + window.innerHeight * 0.35;
        let active = sections[0]?.id;

        sections.forEach((section, index) => {
            const next = sections[index + 1];
            const top = section.offsetTop;
            const bottom = next ? next.offsetTop : document.body.scrollHeight;
            if (marker >= top && marker < bottom) {
                active = section.id;
            }
        });

        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${active}`;
            link.classList.toggle("is-active", isActive);
            if (isActive) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    window.addEventListener("scroll", setActiveNav, { passive: true });
    window.addEventListener("resize", setActiveNav);
    setActiveNav();
};

const setupReveal = () => {
    const items = [...document.querySelectorAll(selectors.reveal)];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        items.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    items.forEach((item) => observer.observe(item));
};

const setupResumeModal = () => {
    document.querySelectorAll(selectors.openResumes).forEach((button) => {
        button.addEventListener("click", openResumeModal);
    });

    document.querySelectorAll(selectors.closeResumes).forEach((button) => {
        button.addEventListener("click", closeResumeModal);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && resumeModal && !resumeModal.hidden) {
            closeResumeModal();
        }
        trapModalFocus(event);
    });
};

const setupWhatsappLinks = () => {
    document.querySelectorAll("[data-whatsapp]").forEach((link) => {
        const topic = link.getAttribute("data-whatsapp") || "um projeto";
        link.setAttribute("href", whatsappUrl(topic));
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });
};

renderContent();
setupNavigation();
setupReveal();
setupResumeModal();
setupWhatsappLinks();
