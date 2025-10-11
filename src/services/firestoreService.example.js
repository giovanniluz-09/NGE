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
  limit,
  addDoc
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
    console.error('Erro ao obter dados do usuário:', error);
    return { success: false, error: 'Erro ao carregar dados' };
  }
};

export const atualizarDadosUsuario = async (userId, dados) => {
  try {
    const docRef = doc(db, 'usuarios', userId);
    await updateDoc(docRef, {
      ...dados,
      atualizadoEm: new Date().toISOString()
    });
    return { success: true };
  } catch (error) {
    console.error('Erro ao atualizar dados:', error);
    return { success: false, error: 'Erro ao atualizar dados' };
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
    console.error('Erro ao atualizar tipo de cartão:', error);
    return { success: false, error: 'Erro ao atualizar cartão' };
  }
};

export const obterHistoricoViagens = async (userId, limiteResultados = 20) => {
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
    console.error('Erro ao obter histórico de viagens:', error);
    return { success: false, error: 'Erro ao carregar histórico' };
  }
};

export const registrarViagem = async (userId, dadosViagem) => {
  try {
    const viagensRef = collection(db, 'viagens');
    const novaViagem = {
      userId,
      ...dadosViagem,
      data: new Date().toISOString(),
      validado: true
    };
    
    const docRef = await addDoc(viagensRef, novaViagem);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Erro ao registrar viagem:', error);
    return { success: false, error: 'Erro ao registrar viagem' };
  }
};

export const registrarRecarga = async (userId, valor, metodoPagamento) => {
  try {
    const recargasRef = collection(db, 'recargas');
    const novaRecarga = {
      userId,
      valor,
      metodoPagamento,
      status: 'pendente',
      data: new Date().toISOString()
    };
    
    const docRef = await addDoc(recargasRef, novaRecarga);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Erro ao registrar recarga:', error);
    return { success: false, error: 'Erro ao registrar recarga' };
  }
};

export const obterSaldoUsuario = async (userId) => {
  try {
    const resultado = await obterDadosUsuario(userId);
    if (resultado.success) {
      return { success: true, saldo: resultado.data.saldo || 0 };
    }
    return { success: false, error: 'Erro ao obter saldo' };
  } catch (error) {
    console.error('Erro ao obter saldo:', error);
    return { success: false, error: 'Erro ao obter saldo' };
  }
};

export const atualizarSaldo = async (userId, novoSaldo) => {
  try {
    const docRef = doc(db, 'usuarios', userId);
    await updateDoc(docRef, {
      saldo: novoSaldo,
      atualizadoEm: new Date().toISOString()
    });
    return { success: true };
  } catch (error) {
    console.error('Erro ao atualizar saldo:', error);
    return { success: false, error: 'Erro ao atualizar saldo' };
  }
};

