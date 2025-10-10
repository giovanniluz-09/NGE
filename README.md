![Projeto App NGE Transportes - Logo](https://img.freepik.com/fotos-gratis/homem-usando-laptop-a-noite-top-view-banner-web-com-espaco-de-copia_169016-53607.jpg?t=st=1743643019~exp=1743646619~hmac=24ca1e394d4be9b691d09ceb38d71e90223464745f2cc599c8c38f32d3489e43&w=1380)

# NGE Transportes

Projeto de Conclusão de Curso - ETEC Bento Quirino Campinas  
**Desenvolvimento de Sistemas**

## Sobre o Projeto

Aplicativo mobile desenvolvido pelos alunos Nicolas Santos, Erik Tanaka e Giovanni Noveli, com o objetivo de transformar os sistemas de Transporte Público através de uma carteira digital inteligente e acessível.

## Tecnologias Utilizadas

### Frontend
- **React Native 0.76.7**: Framework para desenvolvimento mobile multiplataforma
- **Expo 52**: Plataforma de desenvolvimento e build
- **React Navigation 7**: Navegação entre telas
- **Poppins Font**: Tipografia moderna e legível

### Backend
- **Firebase**: Plataforma completa para backend
  - **Authentication**: Autenticação de usuários
  - **Firestore**: Banco de dados NoSQL em tempo real
  - **Storage**: Armazenamento de imagens e arquivos
  - **Cloud Functions**: Lógica de servidor (futuro)

### Hardware
- **Arduino**: Sistema físico para validação de passagem na catraca

## Funcionalidades

- Autenticação de usuários com validação
- Cadastro de novos usuários com verificação de senha
- Carteira digital com tipos de passes:
  - Comum
  - Universitário
  - Escolar
- Interface responsiva e acessível
- Validação de formulários

## Estrutura do Projeto

```
NGE/
├── src/
│   ├── screens/              # Telas do aplicativo
│   │   ├── Login.js          # Tela de autenticação
│   │   ├── SignUp.js         # Tela de cadastro
│   │   ├── Card.js           # Área de cartões digitais
│   │   ├── HomeScreen.js     # Tela inicial (em desenvolvimento)
│   │   └── Logo.js           # Componente do logo
│   ├── config/               # Configurações
│   │   └── firebaseConfig.example.js  # Exemplo de config Firebase
│   ├── services/             # Serviços e lógica de negócio
│   │   ├── authService.example.js     # Autenticação Firebase
│   │   └── firestoreService.example.js # Operações Firestore
│   ├── constants/            # Constantes e valores fixos
│   │   └── colors.js         # Paleta de cores
│   └── utils/                # Funções utilitárias
│       └── validacoes.js     # Validações de formulário
├── assets/                   # Imagens e recursos
├── App.js                    # Componente raiz
├── package.json              # Dependências
├── README.md                 # Este arquivo
└── doc/                      # Documentação do projeto
    ├── FIREBASE_SETUP.md         # Guia rápido Firebase
    ├── INTEGRACAO_FIREBASE.md    # Guia completo Firebase
    ├── MELHORIAS.md              # Documentação de melhorias
    ├── REVISAO_EXECUTIVA.md      # Resumo da revisão
    └── CHECKLIST_APRESENTACAO.md # Checklist para apresentação

```

## Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn
- Expo CLI

### Passos para instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd NGE
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o aplicativo:
```bash
npm start
```

4. Escolha a plataforma:
```bash
npm run android  # Para Android
npm run ios      # Para iOS
npm run web      # Para Web
```

### Configuração do Firebase (Importante!)

Para que o aplicativo funcione completamente, você precisa configurar o Firebase:

1. **Guia Rápido (15 min):** Consulte [FIREBASE_SETUP.md](doc/FIREBASE_SETUP.md)
2. **Guia Completo:** Consulte [INTEGRACAO_FIREBASE.md](doc/INTEGRACAO_FIREBASE.md)

**Resumo rápido:**
```bash
# 1. Crie um projeto no Firebase Console
# 2. Ative Authentication (Email/Password) e Firestore
# 3. Copie as credenciais
# 4. Crie o arquivo de configuração:
cp src/config/firebaseConfig.example.js src/config/firebaseConfig.js
# 5. Edite e adicione suas credenciais
```

## Validações Implementadas

### Login
- Verificação de campos preenchidos
- Validação de formato de email
- Campo de senha com segurança (secureTextEntry)

### Cadastro
- Validação de todos os campos obrigatórios
- Verificação de formato de email
- Senha mínima de 6 caracteres
- Confirmação de senha deve ser igual

## Melhorias Implementadas (Branch revisao-tcc)

1. **Correção de bugs críticos**
   - Correção de caminhos de importação
   - Correção de typo no initialRouteName
   - Remoção de código inválido em Login.js

2. **Validações de formulário**
   - Validação de email com regex
   - Validação de senha com requisitos mínimos
   - Feedback visual com Alert

3. **Melhorias de UX**
   - KeyboardAvoidingView para melhor experiência no teclado
   - secureTextEntry em campos de senha
   - Tipos de teclado apropriados (email-address)
   - autoCapitalize configurado corretamente

4. **Refatoração de código**
   - Remoção de nomes hardcoded
   - Remoção de imports duplicados
   - Melhor organização de estilos
   - Código mais limpo e manutenível

5. **Funcionalidades novas**
   - Função de logout com reset de navegação
   - Melhor feedback visual no Card
   - Estilos customizados para o Picker

## Capturas de Tela

> **Nota:** Adicione screenshots das telas principais do aplicativo aqui

## Objetivo Geral

A NGE Transportes busca inovar e facilitar a vida dos usuários de transportes públicos, desenvolvendo um sistema de Carteira Digital ligada a funcionalidades facilitadoras para que o uso do transporte seja mais inclusivo e tranquilo no dia-a-dia.

## Documentação Adicional

- 📖 **[FIREBASE_SETUP.md](doc/FIREBASE_SETUP.md)** - Guia rápido de configuração do Firebase (15 min)
- 🔥 **[INTEGRACAO_FIREBASE.md](doc/INTEGRACAO_FIREBASE.md)** - Documentação completa da integração Firebase
- ✅ **[MELHORIAS.md](doc/MELHORIAS.md)** - Histórico de melhorias e refatorações
- 📋 **[REVISAO_EXECUTIVA.md](doc/REVISAO_EXECUTIVA.md)** - Resumo executivo da revisão do TCC
- 🎓 **[CHECKLIST_APRESENTACAO.md](doc/CHECKLIST_APRESENTACAO.md)** - Checklist para apresentação do TCC

## Próximos Passos

### Integração Firebase (Prioridade Alta)
- [ ] Configurar projeto no Firebase Console
- [ ] Instalar dependências Firebase
- [ ] Configurar Firebase Authentication
- [ ] Implementar registro de usuários no Firestore
- [ ] Implementar login com Firebase Auth
- [ ] Configurar Firestore Database

### Funcionalidades
- [ ] Tela de perfil do usuário
- [ ] Histórico de viagens no Firestore
- [ ] Sistema de recarga de créditos
- [ ] Firebase Cloud Messaging para notificações push
- [ ] Modo offline com Firestore cache
- [ ] Storage para fotos de perfil

## Autores

- **Nicolas Santos**
- **Erik Tanaka**
- **Giovanni Noveli**

**Instituição:** ETEC Bento Quirino - Campinas  
**Curso:** Desenvolvimento de Sistemas  
**Ano:** 2025

## Conclusão

Com a implementação de todo o sistema e toda a facilitação gerada aos usuários, podemos transformar a maneira como é utilizado o transporte público, transmitindo segurança e tranquilidade a todos.

## Problemas Comuns e Soluções

### Erro ao instalar dependências
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Erro ao iniciar o Expo
```bash
# Limpe o cache do Expo
npx expo start --clear
```

### Erro "Firebase not configured"
Certifique-se de configurar o Firebase seguindo [FIREBASE_SETUP.md](doc/FIREBASE_SETUP.md)

### Fonte Poppins não carrega
As fontes são carregadas automaticamente pelo Expo. Aguarde o carregamento inicial.

## FAQ (Perguntas Frequentes)

**P: O aplicativo funciona offline?**  
R: Atualmente não, mas está planejado implementar modo offline com cache do Firestore.

**P: Como posso testar sem configurar o Firebase?**  
R: As validações de formulário funcionam, mas cadastro/login requerem Firebase.

**P: Posso usar este projeto como base?**  
R: Sim! Este é um projeto acadêmico. Sinta-se livre para usar como referência.

**P: O Arduino é obrigatório para testar?**  
R: Não, o Arduino é um componente físico separado. O app funciona independentemente.

## Contribuindo

Este é um projeto acadêmico, mas sugestões são bem-vindas:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## Contato

- **Nicolas Santos** - [GitHub/Email]
- **Erik Tanaka** - [GitHub/Email]
- **Giovanni Noveli** - [GitHub/Email]

**Orientador:** [Nome do Professor]  
**ETEC Bento Quirino** - Campinas, SP

## Agradecimentos

- ETEC Bento Quirino pelo suporte
- Professores e orientadores
- Comunidade React Native e Firebase
- Todos que contribuíram com feedback

## Status do Projeto

🚧 **Em Desenvolvimento** - Versão atual: 1.0.0 (TCC)

- ✅ Interface de usuário completa
- ✅ Validações implementadas
- ✅ Documentação completa
- ⏳ Integração Firebase em andamento
- ⏳ Testes automatizados
- ⏳ Deploy para produção

## Licença

Este projeto é de uso acadêmico para o Trabalho de Conclusão de Curso da ETEC Bento Quirino.

---

**Desenvolvido com ❤️ por Nicolas Santos, Erik Tanaka e Giovanni Noveli**  
**ETEC Bento Quirino - 2025**

