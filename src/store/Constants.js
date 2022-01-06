function persist(usuario) {
  localStorage.setItem("usuario", JSON.stringify(usuario));
}

function getUsuarioLogado() {
  const usuarioLogado = localStorage.getItem("usuario");
  if (!usuarioLogado) return usuarioLogado;

  return JSON.parse(usuarioLogado);
}

function isLogado() {
  try {
    const usuario = getUsuarioLogado();
    if (!usuario) throw 'usuario não logado'

    //const expira = new Date(usuario.expira);
    //return expira > new Date();
    return true;
  } catch (e) {
    return false;
  }
}

function getUrl() {
  return "http://localhost:8080/ponto/";
}

export default () => {
  return {
    persist,
    getUsuarioLogado,
    isLogado,
    getUrl
  };
};