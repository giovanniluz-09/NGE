# Configuração Rápida do Firebase - NGE Transportes

Este é um guia rápido para configurar o Firebase no projeto. Para documentação completa, consulte [INTEGRACAO_FIREBASE.md](INTEGRACAO_FIREBASE.md).

## Passo a Passo Rápido

### 1. Criar Projeto no Firebase (5 min)

1. Acesse: https://console.firebase.google.com/
2. Clique em **"Adicionar projeto"**
3. Nome: **NGE-Transportes**
4. Desabilite Analytics (opcional)
5. Clique em **"Criar projeto"**

### 2. Configurar Authentication (2 min)

1. No menu lateral, clique em **"Authentication"**
2. Clique em **"Começar"**
3. Na aba **"Sign-in method"**:
   - Ative **"Email/Password"**
   - Clique em **"Salvar"**

### 3. Configurar Firestore (3 min)

1. No menu lateral, clique em **"Firestore Database"**
2. Clique em **"Criar banco de dados"**
3. Selecione **"Começar no modo de teste"** (ou **"modo de produção"** se já tiver as regras)
4. Escolha a localização: **southamerica-east1** (São Paulo)
5. Clique em **"Ativar"**

### 4. Obter Credenciais (2 min)

1. No menu lateral, clique no ícone de **engrenagem** → **"Configurações do projeto"**
2. Role até **"Seus apps"**
3. Clique no ícone **</> Web**
4. Dê um nome: **NGE Web App**
5. **NÃO** marque Firebase Hosting
6. Clique em **"Registrar app"**
7. **COPIE** o objeto `firebaseConfig`

### 5. Configurar no Projeto (5 min)

#### Opção A: Variável de Ambiente (Recomendado)

1. Crie arquivo `.env` na raiz do projeto:

```env
FIREBASE_API_KEY=sua_api_key_aqui
FIREBASE_AUTH_DOMAIN=nge-transportes.firebaseapp.com
FIREBASE_PROJECT_ID=nge-transportes
FIREBASE_STORAGE_BUCKET=nge-transportes.appspot.com
FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
FIREBASE_APP_ID=seu_app_id
```

2. Instale dependências:

```bash
npm install firebase
npx expo install expo-constants
```

3. Copie o arquivo de exemplo:

```bash
cp src/config/firebaseConfig.example.js src/config/firebaseConfig.js
```

4. Edite `src/config/firebaseConfig.js` e use as variáveis de ambiente.

#### Opção B: Arquivo de Configuração Direto (Não recomendado para produção)

1. Copie o arquivo de exemplo:

```bash
cp src/config/firebaseConfig.example.js src/config/firebaseConfig.js
```

2. Cole suas credenciais no arquivo `src/config/firebaseConfig.js`

3. **IMPORTANTE:** Adicione ao `.gitignore`:

```
src/config/firebaseConfig.js
```

### 6. Instalar Dependências (2 min)

```bash
npm install firebase
```

### 7. Copiar Serviços de Exemplo (1 min)

```bash
# Criar diretório de serviços se não existir
mkdir -p src/services

# Copiar arquivos de exemplo
cp src/services/authService.example.js src/services/authService.js
cp src/services/firestoreService.example.js src/services/firestoreService.js
```

### 8. Testar Conexão (3 min)

Adicione temporariamente no `App.js`:

```javascript
import { auth, db } from './src/config/firebaseConfig';

console.log('Firebase inicializado:', auth.app.name);
console.log('Firestore conectado:', db.app.name);
```

Execute o app:

```bash
npm start
```

Verifique o console. Se não houver erros, a conexão está OK!

### 9. Configurar Regras de Segurança (5 min)

1. No Firebase Console, vá em **Firestore Database**
2. Clique na aba **"Regras"**
3. Cole as seguintes regras:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /usuarios/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /viagens/{viagemId} {
      allow read: if request.auth != null && resource.data.userId == request.auth.uid;
      allow create: if request.auth != null;
    }
    
    match /recargas/{recargaId} {
      allow read, create: if request.auth != null && request.resource.data.userId == request.auth.uid;
    }
  }
}
```

4. Clique em **"Publicar"**

## Checklist de Configuração

- [ ] Projeto criado no Firebase Console
- [ ] Authentication ativado (Email/Password)
- [ ] Firestore Database criado
- [ ] Credenciais copiadas
- [ ] Arquivo firebaseConfig.js criado
- [ ] Dependências instaladas (`firebase`)
- [ ] Arquivos de serviço copiados
- [ ] Conexão testada sem erros
- [ ] Regras de segurança configuradas
- [ ] `.gitignore` atualizado

## Próximos Passos

Após completar a configuração:

1. Consulte [INTEGRACAO_FIREBASE.md](INTEGRACAO_FIREBASE.md) para integração completa
2. Implemente autenticação nas telas
3. Teste cadastro e login
4. Implemente salvamento de dados

## Comandos Úteis

```bash
# Instalar todas as dependências
npm install

# Iniciar o projeto
npm start

# Limpar cache (se necessário)
npx expo start --clear

# Ver logs do Firebase
npx expo start --dev-client
```

## Troubleshooting

### "Firebase: Error (auth/invalid-api-key)"
**Solução:** Verifique se copiou a API Key corretamente

### "Cannot read property 'app' of undefined"
**Solução:** Certifique-se de importar corretamente: `import { auth } from './src/config/firebaseConfig'`

### "Network request failed"
**Solução:** Verifique sua conexão de internet

### "Permission denied"
**Solução:** Verifique as regras do Firestore

## Recursos

- 📖 [Documentação Completa](INTEGRACAO_FIREBASE.md)
- 📝 [Voltar ao README](../README.md)
- 🔥 [Firebase Console](https://console.firebase.google.com/)
- 📚 [Documentação Firebase](https://firebase.google.com/docs)
- 💬 [Suporte Expo + Firebase](https://docs.expo.dev/guides/using-firebase/)

## Ajuda

Se encontrar problemas:
1. Consulte a [documentação completa](INTEGRACAO_FIREBASE.md)
2. Verifique o [troubleshooting](#troubleshooting)
3. Confira os logs do console
4. Verifique se todas as dependências estão instaladas

---

**Tempo estimado total:** 25-30 minutos  
**Última atualização:** 10/10/2025

