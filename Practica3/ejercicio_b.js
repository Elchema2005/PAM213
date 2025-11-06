function verificarUsuario(usuario) {
    return new Promise((confirmar, denegado) => {
    if (usuario === "admin") {
        confirmar("Acceso concedido");
    } else {
        denegado("Acceso denegado");
    }
});
}

verificarUsuario("admin")
.then(res => console.log(res))
.catch(err => console.error(err));

verificarUsuario("Ivan")
.then(res => console.log(res))
.catch(err => console.error(err));