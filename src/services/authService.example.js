import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged
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
      tipoCartao: 'comum',
      saldo: 0,
      ativo: true,
      criadoEm: new Date().toISOString(),
      atualizadoEm: new Date().toISOString()
    });
    
    return { success: true, user };
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    
    let mensagemErro = 'Erro ao cadastrar usuário';
    if (error.code === 'auth/email-already-in-use') {
      mensagemErro = 'Este email já está em uso';
    } else if (error.code === 'auth/invalid-email') {
      mensagemErro = 'Email inválido';
    } else if (error.code === 'auth/weak-password') {
      mensagemErro = 'Senha muito fraca';
    }
    
    return { success: false, error: mensagemErro };
  }
};

export const fazerLogin = async (email, senha) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    
    let mensagemErro = 'Erro ao fazer login';
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      mensagemErro = 'Email ou senha incorretos';
    } else if (error.code === 'auth/invalid-email') {
      mensagemErro = 'Email inválido';
    } else if (error.code === 'auth/user-disabled') {
      mensagemErro = 'Usuário desativado';
    }
    
    return { success: false, error: mensagemErro };
  }
};

export const fazerLogout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    return { success: false, error: 'Erro ao fazer logout' };
  }
};

export const observarEstadoAutenticacao = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const obterUsuarioAtual = () => {
  return auth.currentUser;
};

