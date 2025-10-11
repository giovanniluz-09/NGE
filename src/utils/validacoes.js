export const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validarSenha = (senha) => {
  return senha && senha.length >= 6;
};

export const validarCampoObrigatorio = (campo) => {
  return campo && campo.trim().length > 0;
};

export const validarSenhasIguais = (senha, confirmarSenha) => {
  return senha === confirmarSenha;
};

