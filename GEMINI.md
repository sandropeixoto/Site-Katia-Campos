# Contexto do Projeto: Site Kátia Campos (Psicologia Clínica)

Este arquivo serve como guia mestre de contexto para interações com agentes de IA neste repositório. Ele detalha a arquitetura, as convenções e a infraestrutura do projeto.

## 🌟 Visão Geral do Projeto

Landing page profissional para a psicóloga **Kátia Campos**, especializada em **Terapia Cognitivo-Comportamental (TCC)**. O objetivo principal é converter visitantes em pacientes através de um design acolhedor, moderno e informativo.

- **Público-alvo:** Adolescentes, adultos e idosos em busca de psicoterapia.
- **Foco Técnico:** Performance, SEO, acessibilidade e design responsivo.
- **Diferencial:** Desenvolvido sob a infraestrutura **Synkra AIOX**, garantindo um desenvolvimento assistido por IA consistente e documentado.

## 🛠️ Stack Tecnológica

### Frontend (Core)
- **HTML5:** Estrutura semântica e acessível.
- **CSS3 (Vanilla):** Uso intensivo de **Design Tokens** (variáveis CSS) para cores, tipografia e espaçamento.
- **JavaScript (Vanilla):** Manipulação de DOM, animações de scroll (`IntersectionObserver`) e controle de menu mobile.
- **Assets:** Phosphor Icons, Google Fonts (Outfit & Inter).

### Infraestrutura & IA (Synkra AIOX v5.0.3)
O projeto utiliza o framework **AIOX-FullStack** para orquestração de desenvolvimento:
- **Agentes:** Squad especializado (Analyst, PM, Architect, Dev, SM, QA).
- **IDE Integrations:** Suporte nativo para Claude Code, Cursor e Gemini CLI.
- **Backend (Opcional/Futuro):** Preparado para integração com Supabase, N8N e APIs de LLMs.

## 📂 Estrutura de Diretórios

```bash
├── index.html          # Ponto de entrada principal
├── css/                # Estilização
│   └── style.css       # Design tokens e componentes
├── js/                 # Interatividade
│   └── script.js       # Animações e lógica de UI
├── assets/             # Imagens e mídias locais
├── .aiox-core/         # Framework de agentes AIOX
├── .antigravity/       # Regras e personas dos agentes
├── .agent/             # Workflows de ativação
├── docs/               # Documentação (Stories, PRD, Architecture)
└── SUGGESTIONS.md      # Roadmap de melhorias futuras
```

## 🚀 Fluxo de Desenvolvimento (AIOX Rules)

O desenvolvimento deve seguir rigorosamente os padrões definidos em `.antigravity/rules.md`:

1.  **Story-Driven Development:** Nenhuma alteração significativa deve ser feita sem uma "Story" em `docs/stories/`.
2.  **Conventional Commits:** Siga o padrão Angular (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`).
3.  **Agent Activation:** Use os comandos de ativação (ex: `@dev`, `@architect`) conforme definido nos workflows.
4.  **Design Tokens:** Sempre utilize as variáveis definidas em `:root` no `style.css` para manter a consistência visual.

## 📋 Comandos e Scripts Úteis

O projeto utiliza comandos baseados no framework AIOX:
- `*help`: Lista comandos do agente ativo.
- `*status`: Mostra o progresso da Story atual.
- `*create-story`: Inicia o planejamento de uma nova funcionalidade.
- **TODO:** Implementar scripts de build/minificação para produção via `package.json` na raiz (atualmente focado em desenvolvimento estático direto).

## 💡 Diretrizes Estéticas & UX

- **Paleta de Cores:** Tons terrosos e verdes suaves (`#9eb3a2`, `#2d4a36`, `#fdfcfb`) para transmitir calma e profissionalismo.
- **Animações:** Suaves (Fade In, Slide Up) para evitar distração, focando na leitura.
- **Mobile-First:** A interface deve ser impecável em dispositivos móveis, com CTAs de fácil alcance (WhatsApp).

## 🔮 Próximos Passos (Veja SUGGESTIONS.md)

1.  Integração com API de agendamento (Calendly).
2.  Módulo de Blog dinâmico para SEO.
3.  Automação de triagem via API do WhatsApp.

---
*GEMINI.md gerado automaticamente para o contexto Synkra AIOX.*
