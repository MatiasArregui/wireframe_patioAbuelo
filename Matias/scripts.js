const contraseña = document.getElementById('password');
const mostrarContraseña = document.getElementById('showPassword');

mostrarContraseña.addEventListener('change', function() {
    if (this.checked) {
        contraseña.type = 'text';
    } else {
        contraseña.type = 'password';
    }
});