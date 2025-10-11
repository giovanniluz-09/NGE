# Checklist para Apresentação do TCC
## NGE Transportes - ETEC Bento Quirino

---

## Preparação Técnica

### Ambiente de Desenvolvimento
- [ ] Node.js instalado e funcionando
- [ ] Expo CLI configurado
- [ ] Dependências instaladas (`npm install`)
- [ ] Aplicativo testado e funcionando
- [ ] Simulador/Emulador ou dispositivo físico pronto

### Demonstração
- [ ] Testar todas as telas antes da apresentação
- [ ] Verificar conexão com Arduino (se demonstrar hardware)
- [ ] Ter backup de vídeo da demonstração
- [ ] Screenshots de todas as telas prontos
- [ ] Ter plan B se algo não funcionar

---

## Documentação para Apresentação

### Obrigatório Ter Pronto
- [x] README.md completo
- [x] Código documentado
- [x] Diagramas (caso solicitado)
- [ ] Apresentação em slides (PowerPoint/Google Slides)
- [ ] Relatório técnico do TCC

### Materiais Complementares
- [x] MELHORIAS.md (histórico de melhorias)
- [x] REVISAO_EXECUTIVA.md (resumo da revisão)
- [ ] Diagrama de navegação de telas
- [ ] Diagrama de banco de dados
- [ ] Fluxograma de validação

---

## Estrutura da Apresentação Sugerida

### 1. Introdução (2-3 min)
- [ ] Apresentação da equipe
- [ ] Problema identificado
- [ ] Objetivo do projeto
- [ ] Público-alvo

### 2. Contextualização (3-4 min)
- [ ] Situação atual do transporte público
- [ ] Dificuldades dos usuários
- [ ] Justificativa da solução
- [ ] Diferenciais do projeto

### 3. Solução Proposta (5-7 min)
- [ ] Visão geral do sistema
- [ ] Arquitetura (Frontend + Hardware + Backend)
- [ ] Tecnologias escolhidas e por quê
- [ ] Funcionalidades principais

### 4. Demonstração Prática (8-10 min)
- [ ] Cadastro de usuário
- [ ] Login com validações
- [ ] Navegação entre telas
- [ ] Seleção de cartões
- [ ] Demonstração do Arduino (se possível)
- [ ] Mostrar validações funcionando

### 5. Aspectos Técnicos (5-7 min)
- [ ] Validações implementadas
- [ ] Segurança (senhas, autenticação)
- [ ] Experiência do usuário (UX/UI)
- [ ] Código limpo e organizado
- [ ] Boas práticas aplicadas

### 6. Melhorias Implementadas (2-3 min)
- [ ] Correções realizadas
- [ ] Validações adicionadas
- [ ] Refatorações feitas
- [ ] Evolução do projeto

### 7. Próximos Passos (2-3 min)
- [ ] Integração completa com backend
- [ ] Sistema de recarga
- [ ] Histórico de viagens
- [ ] Notificações
- [ ] Escalabilidade

### 8. Conclusão (2-3 min)
- [ ] Objetivos alcançados
- [ ] Aprendizados
- [ ] Impacto esperado
- [ ] Agradecimentos

### 9. Perguntas (5 min)
- [ ] Estar preparado para perguntas técnicas
- [ ] Estar preparado para perguntas sobre funcionamento
- [ ] Estar preparado para perguntas sobre dificuldades

**Tempo Total Sugerido:** 30-40 minutos

---

## Perguntas Frequentes - Prepare Respostas

### Técnicas
1. **Por que React Native?**
   - Multiplataforma (iOS e Android)
   - Comunidade grande
   - Performance nativa
   - Facilidade de desenvolvimento

2. **Como funciona a validação?**
   - Regex para email
   - Verificação de tamanho de senha
   - Confirmação de senha
   - Feedback imediato ao usuário

3. **Como garantem a segurança?**
   - Senhas ocultas (secureTextEntry)
   - Validações no cliente
   - Firebase Authentication para autenticação segura
   - Regras de segurança do Firestore
   - Conexão HTTPS por padrão (Firebase)

4. **E se não tiver internet?**
   - Mencionar possibilidade de modo offline
   - AsyncStorage para dados locais
   - Sincronização quando reconectar

### Funcionamento
1. **Como o usuário vai recarregar créditos?**
   - Mencionar integração futura com pagamento
   - PIX, cartão de crédito
   - Pontos de recarga físicos

2. **Como funciona com o Arduino?**
   - Explicar integração
   - Validação na catraca
   - Comunicação com sistema

3. **Funciona offline?**
   - Implementação futura
   - AsyncStorage
   - Sincronização

### Processo
1. **Quais foram as maiores dificuldades?**
   - Integração entre tecnologias
   - Validações
   - Layout responsivo
   - Gestão de estado

2. **Quanto tempo levou?**
   - Ser honesto
   - Mencionar fases do projeto
   - Iterações e melhorias

3. **Qual a contribuição de cada membro?**
   - Ter claro quem fez o quê
   - Mostrar trabalho em equipe

---

## Demonstração - Roteiro Sugerido

### Fluxo 1: Novo Usuário
1. Abrir aplicativo (tela de Login)
2. Clicar em "Crie uma agora"
3. Preencher dados corretos
4. Mostrar mensagem de sucesso
5. Navegar para área de cartões

### Fluxo 2: Validações
1. Voltar para tela de cadastro
2. Tentar cadastrar com email inválido → Mostrar erro
3. Tentar senha curta → Mostrar erro
4. Senhas diferentes → Mostrar erro
5. Campos vazios → Mostrar erro

### Fluxo 3: Login e Cartões
1. Fazer login
2. Visualizar área de cartões
3. Selecionar diferentes tipos
4. Mostrar mudança de cartão
5. Fazer logout

### Fluxo 4: UX/UI
1. Mostrar responsividade
2. Teclado não sobrepõe campos
3. Senha oculta
4. Feedback visual
5. Navegação fluida

---

## Pontos Fortes a Destacar

### Técnicos
- ✅ Código limpo e organizado
- ✅ Validações robustas
- ✅ Segurança implementada
- ✅ Boas práticas de desenvolvimento
- ✅ Documentação completa

### Funcionais
- ✅ Interface intuitiva
- ✅ Navegação simples
- ✅ Feedback ao usuário
- ✅ Responsivo
- ✅ Acessível

### Inovação
- ✅ Integração com hardware
- ✅ Solução completa (Frontend + Hardware + Backend)
- ✅ Potencial de impacto social
- ✅ Escalável

---

## Possíveis Críticas e Como Responder

### "Não tem integração com backend real"
**Resposta:** "Correto, nesta versão focamos em desenvolver uma interface sólida com validações robustas. A integração com backend está mapeada como próximo passo, com a arquitetura já definida."

### "É parecido com outros apps"
**Resposta:** "Sim, nos inspiramos em boas práticas de apps consolidados, mas nosso diferencial está na integração com hardware (Arduino) e no foco em acessibilidade para transporte público."

### "Faltam funcionalidades"
**Resposta:** "Este é um MVP (Produto Mínimo Viável) que demonstra as funcionalidades core. Temos um roadmap completo de funcionalidades futuras documentadas."

### "E a segurança dos dados?"
**Resposta:** "Implementamos validações no cliente e segurança básica. Para produção, implementaríamos: JWT, HTTPS, criptografia de dados sensíveis, e conformidade com LGPD."

---

## Checklist Final - Dia da Apresentação

### 1 Dia Antes
- [ ] Testar todo o fluxo 3x
- [ ] Carregar todos os dispositivos
- [ ] Preparar materiais impressos (se necessário)
- [ ] Revisar apresentação
- [ ] Ensaiar com cronômetro

### Manhã da Apresentação
- [ ] Testar aplicativo novamente
- [ ] Verificar conexões
- [ ] Ter backup de internet (hotspot)
- [ ] Chegar com antecedência
- [ ] Configurar equipamento

### Antes de Começar
- [ ] Respirar fundo
- [ ] Testar rapidamente
- [ ] Ter água por perto
- [ ] Desligar notificações
- [ ] Modo avião em outros dispositivos

---

## Recursos Visuais Sugeridos

### Para Slides
- Screenshots das telas principais
- Diagrama de arquitetura
- Fluxograma de navegação
- Gráficos de impacto esperado
- Logo do projeto
- Fotos do Arduino

### Para Demonstração
- Aplicativo rodando em tela grande
- Apontar cursor/mouse para elementos
- Zoom em detalhes importantes
- Video backup (se algo falhar)

---

## Dicas de Oratória

### O que Fazer
- ✅ Falar claramente e pausadamente
- ✅ Olhar para a banca
- ✅ Usar termos técnicos apropriados
- ✅ Demonstrar entusiasmo
- ✅ Dividir falas entre equipe
- ✅ Agradecer ao final

### O que Evitar
- ❌ Gírias ou linguagem muito informal
- ❌ Falar muito rápido
- ❌ Ler os slides
- ❌ Dar as costas para a banca
- ❌ Fazer piadas excessivas
- ❌ Desculpas excessivas

---

## Contatos de Emergência

- **Suporte Técnico:** [adicionar]
- **Professor Orientador:** [adicionar]
- **Membro 1:** [adicionar telefone]
- **Membro 2:** [adicionar telefone]
- **Membro 3:** [adicionar telefone]

---

## Notas Finais

- **Confiança:** Vocês conhecem o projeto melhor que ninguém
- **Preparação:** Quanto mais ensaiar, melhor será
- **Calma:** Nervosismo é normal, respire fundo
- **Equipe:** Apoiem uns aos outros
- **Sucesso:** O projeto está sólido e bem feito!

---

**Boa sorte na apresentação!** 🎓

*Revisado e aprovado em 10/10/2025*

