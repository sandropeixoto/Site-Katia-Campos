# Sugestões de Melhorias e Escalabilidade (SUGGESTIONS.md)

De acordo com as diretrizes do projeto e visando a evolução arquitetural e funcional da landing page para Kátia Campos, aqui estão sugestões para o futuro:

## 🚀 Funcionalidades & Integrações

1. **Integração com API de Agendamento (Calendly ou Google Calendar)**
   - **Por quê:** Automatiza o processo de marcação de consultas diretamente pelo site, reduzindo o vai e vem de mensagens.
   - **Como:** Incorporar um widget do Calendly via iframe ou pop-up ligado aos botões de CTA.

2. **Módulo Dinâmico de Blog / Artigos sobre Saúde Mental**
   - **Por quê:** Melhora o SEO (Search Engine Optimization) e atrai tráfego orgânico focado em TCC e saúde mental.
   - **Como:** Migrar para um framework como Astro ou Next.js integrando um CMS headless (Sanity ou DatoCMS).

3. **Automação de Triagem via WhatsApp**
   - **Por quê:** Agiliza o primeiro contato e coleta informações básicas antes da intervenção humana.
   - **Como:** Utilizar webhooks para conectar o botão do WhatsApp a um fluxo de chatbot (n8n ou Typebot).

4. **Seção de FAQ (Perguntas Frequentes)**
   - **Por quê:** Sanar dúvidas recorrentes sobre duração de sessões, convênios e como funciona a TCC, aumentando a confiança do visitante.
   - **Como:** Criar um componente de Accordion acessível na página principal.

## 🛠️ Excelência Técnica (DevOps & Performance)

5. **Otimização de Performance & Assets**
   - **Por quê:** Sites mais rápidos convertem melhor e ranqueiam mais alto no Google (Core Web Vitals).
   - **Como:** Implementar um pipeline de build para minificar CSS/JS e converter imagens automaticamente para formatos modernos (.webp/avif) com lazy loading nativo.

6. **Acessibilidade Web (WCAG 2.1)**
   - **Por quê:** Garantir que o site seja utilizável por todos, incluindo pessoas com deficiências visuais ou motoras.
   - **Como:** Revisar contraste de cores, garantir navegação completa via teclado e adicionar labels ARIA onde necessário.

7. **Implementação de Analytics e Funil de Conversão**
   - **Por quê:** Entender de onde os pacientes vêm e qual CTA funciona melhor.
   - **Como:** Configurar Google Tag Manager para trackear cliques no WhatsApp e tempo de permanência em seções específicas.

8. **Suporte a Dark Mode**
   - **Por quê:** Proporciona conforto visual em ambientes com pouca luz e é uma preferência moderna de UI/UX.
   - **Como:** Utilizar Design Tokens (variáveis CSS) com `prefers-color-scheme`.

---
*Documento atualizado conforme diretrizes de Engenharia de Software Sênior.*
