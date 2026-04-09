# Sugestões de Melhorias e Escalabilidade (SUGGESTIONS.md)

De acordo com as diretrizes do projeto e visando a evolução arquitetural e funcional da landing page para Kátia Campos, aqui estão três sugestões para o futuro:

1. **Integração com API de Agendamento (Calendly ou Google Calendar)**
   - **Por quê:** Automatiza o processo de marcação de consultas diretamente pelo site, reduzindo o vai e vem de mensagens.
   - **Como:** Incorporar um widget do Calendly via iframe no botão "Agendar Consulta" no hero ou uma página dedicada ligada ao botão CTA do rodapé.

2. **Módulo Dinâmico de Blog / Artigos sobre Saúde Mental**
   - **Por quê:** Melhora absurda no SEO (Search Engine Optimization) e atrai tráfego orgânico focado em usuários pesquisando sobre TCC, ansiedade ou depressão.
   - **Como:** Podemos transformar essa landing page estática em uma aplicação Jamstack utilizando Astro ou Next.js e integrar um CMS headless (Sanity ou DatoCMS) para publicações frequentes.

3. **Integração com API do WhatsApp via Módulo Próprio**
   - **Por quê:** O workspace menciona iniciativas passadas usando integrações com a API do WhatsApp.
   - **Como:** Alterar o link de contato (`href="#"`) para utilizar uma rota que dispara o seu sistema automatizado (`whatsapp://send?phone=...&text=Olá, Kátia! Gostaria de agendar uma sessão...`), abrindo o onboarding com uma Inteligência Artificial pré-agendando ou direcionando para o "Agendar" module.
