async function Deslogar(res) {
    //limpa os cookies do navegador
    res.clearCookie('Token')
    res.redirect('/')
}

export default Deslogar