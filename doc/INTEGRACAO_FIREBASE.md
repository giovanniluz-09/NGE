# Guia de Integração Firebase - NGE Transportes

## Índice
1. [Configuração Inicial](#configuração-inicial)
2. [Instalação de Dependências](#instalação-de-dependências)
3. [Configuração do Firebase](#configuração-do-firebase)
4. [Firebase Authentication](#firebase-authentication)
5. [Firestore Database](#firestore-database)
6. [Estrutura de Dados](#estrutura-de-dados)
7. [Implementação](#implementação)
8. [Segurança e Regras](#segurança-e-regras)

---

## Configuração Inicial

### 1. Criar Projeto no Firebase Console

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto"
3. Nome do projeto: **NGE-Transportes**
4. Aceite os termos
5. Desabilite Google Analytics (opcional para desenvolvimento)
6. Clique em "Criar projeto"

### 2. Adicionar App ao Projeto

1. No painel do Firebase, clique no ícone do **Android** e/ou **iOS**
2. Registre o app:
   - **Android**: `com.ngetransportes` ou o package name do seu app.json
   - **iOS**: Bundle ID do seu app
3. Baixe o arquivo de configuração:
   - Android: `google-services.json`
   - iOS: `GoogleService-Info.plist`

### 3. Ativar Serviços no Firebase

No menu lateral do Firebase Console:
- ✅ **Authentication** → Ativar
- ✅ **Firestore Database** → Criar banco de dados
- ✅ **Storage** → Ativar (para fotos de perfil futuras)
- ⏳ **Cloud Messaging** → Ativar (para notificações futuras)

---

## Instalação de Dependências

### Pacotes Necessários

```bash
# Firebase SDK
npm install firebase

# Para Expo com Firebase
npx expo install @react-native-firebase/app
npx expo install @react-native-firebase/auth
npx expo install @react-native-firebase/firestore

# Ou usar Firebase JS SDK (recomendado para Expo)
npm install firebase
```

### package.json Atualizado

Adicione ao seu `package.json`:

```json
{
  "dependencies": {
    "firebase": "^10.7.1"
  }
}
```

---

## Configuração do Firebase

### Criar arquivo de configuração

**src/config/firebaseConfig.js**

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "nge-transportes.firebaseapp.com",
  projectId: "nge-transportes",
  storageBucket: "nge-transportes.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
```

**⚠️ IMPORTANTE:** Nunca commitar as credenciais reais! Use variáveis de ambiente.

### Usando Variáveis de Ambiente

**app.json** ou **.env**

```json
{
  "expo": {
    "extra": {
      "firebaseApiKey": "SUA_API_KEY",
      "firebaseAuthDomain": "nge-transportes.firebaseapp.com",
      "firebaseProjectId": "nge-transportes"
    }
  }
}
```

**src/config/firebaseConfig.js (atualizado)**

```javascript
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.firebaseApiKey,
  authDomain: Constants.expoConfig.extra.firebaseAuthDomain,
  projectId: Constants.expoConfig.extra.firebaseProjectId,
  storageBucket: `${Constants.expoConfig.extra.firebaseProjectId}.appspot.com`,
  messagingSenderId: Constants.expoConfig.extra.firebaseMessagingSenderId,
  appId: Constants.expoConfig.extra.firebaseAppId
};
```

---

## Firebase Authentication

### Configuração no Console

1. Vá em **Authentication** → **Sign-in method**
2. Ative **Email/Password**
3. (Opcional) Ative **Google**, **Facebook**, etc.

### Serviço de Autenticação

**src/services/authService.js**

```javascript
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebaseConfig';

export const cadastrarUsuario = async (nome, email, senha) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;
    
    await updateProfile(user, {
      displayName: nome
    });
    
    await setDoc(doc(db, 'usuarios', user.uid), {
      nome: nome,
      email: email,
      criadoEm: new Date().toISOString(),
      tipoCartao: 'comum',
      saldo: 0
    });
    
    return { success: true, user };
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    return { success: false, error: error.message };
  }
};

export const fazerLogin = async (email, senha) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return { success: false, error: error.message };
  }
};

export const fazerLogout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    return { success: false, error: error.message };
  }
};
```

---

## Firestore Database

### Estrutura de Coleções

```
usuarios/
  {userId}/
    - nome: string
    - email: string
    - tipoCartao: string (comum | universitario | escolar)
    - saldo: number
    - criadoEm: timestamp
    - atualizadoEm: timestamp
    
cartoes/
  {cartaoId}/
    - userId: string
    - tipo: string
    - numero: string
    - ativo: boolean
    - criadoEm: timestamp
    
viagens/
  {viagemId}/
    - userId: string
    - cartaoId: string
    - linha: string
    - valor: number
    - data: timestamp
    - validado: boolean
    
recargas/
  {recargaId}/
    - userId: string
    - valor: number
    - metodoPagamento: string
    - status: string
    - data: timestamp
```

### Serviço do Firestore

**src/services/firestoreService.js**

```javascript
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  collection, 
  query, 
  where, 
  getDocs,
  orderBy,
  limit
} from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export const obterDadosUsuario = async (userId) => {
  try {
    const docRef = doc(db, 'usuarios', userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, data: docSnap.data() };
    } else {
      return { success: false, error: 'Usuário não encontrado' };
    }
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    return { success: false, error: error.message };
  }
};

export const atualizarTipoCartao = async (userId, tipoCartao) => {
  try {
    const docRef = doc(db, 'usuarios', userId);
    await updateDoc(docRef, {
      tipoCartao: tipoCartao,
      atualizadoEm: new Date().toISOString()
    });
    return { success: true };
  } catch (error) {
    console.error('Erro ao atualizar cartão:', error);
    return { success: false, error: error.message };
  }
};

export const obterHistoricoViagens = async (userId, limiteResultados = 10) => {
  try {
    const viagensRef = collection(db, 'viagens');
    const q = query(
      viagensRef, 
      where('userId', '==', userId),
      orderBy('data', 'desc'),
      limit(limiteResultados)
    );
    
    const querySnapshot = await getDocs(q);
    const viagens = [];
    
    querySnapshot.forEach((doc) => {
      viagens.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: viagens };
  } catch (error) {
    console.error('Erro ao obter histórico:', error);
    return { success: false, error: error.message };
  }
};

export const registrarViagem = async (userId, cartaoId, linha, valor) => {
  try {
    const viagemRef = collection(db, 'viagens');
    await setDoc(doc(viagemRef), {
      userId,
      cartaoId,
      linha,
      valor,
      data: new Date().toISOString(),
      validado: true
    });
    return { success: true };
  } catch (error) {
    console.error('Erro ao registrar viagem:', error);
    return { success: false, error: error.message };
  }
};
```

---

## Estrutura de Dados

### Modelo de Usuário

```javascript
{
  uid: "firebase_user_id",
  nome: "João Silva",
  email: "joao@exemplo.com",
  tipoCartao: "comum" | "universitario" | "escolar",
  saldo: 50.00,
  documento: "12345678900",
  telefone: "(19) 99999-9999",
  criadoEm: "2025-10-10T10:00:00.000Z",
  atualizadoEm: "2025-10-10T15:30:00.000Z",
  ativo: true
}
```

### Modelo de Cartão

```javascript
{
  id: "cartao_id",
  userId: "firebase_user_id",
  tipo: "comum" | "universitario" | "escolar",
  numero: "1234 5678 9012 3456",
  nomeCartao: "João Silva",
  validade: "12/2028",
  ativo: true,
  criadoEm: "2025-10-10T10:00:00.000Z"
}
```

### Modelo de Viagem

```javascript
{
  id: "viagem_id",
  userId: "firebase_user_id",
  cartaoId: "cartao_id",
  linha: "101 - Centro/Terminal",
  origem: "Terminal Central",
  destino: "Bairro São José",
  valor: 4.50,
  data: "2025-10-10T14:30:00.000Z",
  validado: true,
  dispositivoValidacao: "catraca_001"
}
```

---

## Implementação

### Atualizar Login.js

```javascript
import { fazerLogin } from '../services/authService';
import { auth } from '../config/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace('Card');
      }
    });
    
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    setCarregando(true);
    const resultado = await fazerLogin(email, senha);
    setCarregando(false);

    if (resultado.success) {
      navigation.replace('Card');
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos');
    }
  };

  // ... resto do componente
}
```

### Atualizar SignUp.js

```javascript
import { cadastrarUsuario } from '../services/authService';

const handleCadastro = async () => {
  // ... validações existentes

  setCarregando(true);
  const resultado = await cadastrarUsuario(nome, email, senha);
  setCarregando(false);

  if (resultado.success) {
    Alert.alert('Sucesso', 'Conta criada com sucesso!', [
      { text: 'OK', onPress: () => navigation.replace('Card') }
    ]);
  } else {
    Alert.alert('Erro', resultado.error);
  }
};
```

### Atualizar Card.js

```javascript
import { auth } from '../config/firebaseConfig';
import { obterDadosUsuario, atualizarTipoCartao } from '../services/firestoreService';
import { fazerLogout } from '../services/authService';

export default function Card({ navigation }) {
  const [dadosUsuario, setDadosUsuario] = useState(null);
  const [passe, setPasse] = useState('comum');

  useEffect(() => {
    carregarDadosUsuario();
  }, []);

  const carregarDadosUsuario = async () => {
    const user = auth.currentUser;
    if (user) {
      const resultado = await obterDadosUsuario(user.uid);
      if (resultado.success) {
        setDadosUsuario(resultado.data);
        setPasse(resultado.data.tipoCartao);
      }
    }
  };

  const handleValueChange = async (value) => {
    if (value) {
      setPasse(value);
      setCardImage(cardImages[value]);
      
      const user = auth.currentUser;
      if (user) {
        await atualizarTipoCartao(user.uid, value);
      }
    }
  };

  const handleLogout = async () => {
    await fazerLogout();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  // ... resto do componente
}
```

---

## Segurança e Regras

### Regras do Firestore

No Firebase Console → Firestore Database → Regras:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Usuários só podem ler e editar seus próprios dados
    match /usuarios/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Cartões só podem ser acessados pelo dono
    match /cartoes/{cartaoId} {
      allow read, write: if request.auth != null && 
        get(/databases/$(database)/documents/cartoes/$(cartaoId)).data.userId == request.auth.uid;
    }
    
    // Viagens só podem ser lidas pelo dono
    match /viagens/{viagemId} {
      allow read: if request.auth != null && 
        resource.data.userId == request.auth.uid;
      allow create: if request.auth != null;
      allow update, delete: if false;
    }
    
    // Recargas só podem ser lidas/criadas pelo dono
    match /recargas/{recargaId} {
      allow read, create: if request.auth != null && 
        request.resource.data.userId == request.auth.uid;
      allow update: if request.auth != null && 
        resource.data.userId == request.auth.uid &&
        resource.data.status == 'pendente';
      allow delete: if false;
    }
  }
}
```

### Boas Práticas de Segurança

1. **Nunca expor credenciais**
   - Use variáveis de ambiente
   - Adicione ao `.gitignore`:
     ```
     .env
     .env.local
     firebaseConfig.js
     google-services.json
     GoogleService-Info.plist
     ```

2. **Validar dados no cliente E servidor**
   - Validações no React Native
   - Regras de segurança no Firestore
   - (Futuro) Cloud Functions para lógica complexa

3. **Limitar acesso**
   - Usuários só acessam seus dados
   - Dados sensíveis em campos protegidos
   - Rate limiting para prevenir abuso

---

## Checklist de Implementação

### Fase 1: Configuração Base
- [ ] Criar projeto no Firebase Console
- [ ] Instalar dependências
- [ ] Configurar firebaseConfig.js
- [ ] Testar conexão

### Fase 2: Authentication
- [ ] Implementar authService.js
- [ ] Atualizar Login.js
- [ ] Atualizar SignUp.js
- [ ] Testar cadastro e login
- [ ] Implementar persistência de sessão

### Fase 3: Firestore
- [ ] Criar coleções no Firestore
- [ ] Implementar firestoreService.js
- [ ] Atualizar Card.js
- [ ] Salvar tipo de cartão
- [ ] Testar leitura/escrita

### Fase 4: Funcionalidades Avançadas
- [ ] Histórico de viagens
- [ ] Sistema de recarga
- [ ] Fotos de perfil (Storage)
- [ ] Notificações (FCM)

### Fase 5: Segurança e Deploy
- [ ] Configurar regras do Firestore
- [ ] Testar segurança
- [ ] Otimizar queries
- [ ] Deploy para produção

---

## Troubleshooting

### Erro: "Firebase App not initialized"
**Solução:** Certifique-se de importar o firebaseConfig antes de usar auth/db

### Erro: "Missing permissions"
**Solução:** Verifique as regras do Firestore

### Erro: "Network error"
**Solução:** Verifique internet e configuração do Firebase

### Erro ao build
**Solução:** Para Expo, use Firebase JS SDK, não @react-native-firebase

---

## Recursos Úteis

- [Documentação Firebase](https://firebase.google.com/docs)
- [Firebase + React Native](https://rnfirebase.io/)
- [Expo + Firebase](https://docs.expo.dev/guides/using-firebase/)
- [Firestore Data Modeling](https://firebase.google.com/docs/firestore/data-model)

---

## Próximos Passos

Após implementar o Firebase:
1. Testar todas as funcionalidades
2. Implementar loading states
3. Adicionar tratamento de erros robusto
4. Implementar modo offline
5. Adicionar analytics
6. Preparar para produção

---

**Atualizado:** 10/10/2025  
**Versão:** 1.0

