// Paso 1: Crear un objeto con las preferencias del usuario
const preferenciasUsuario = {
    tema: 'oscuro',
    lenguaje: 'es',
    notificaciones: true
};

// Paso 2: Convertir el objeto a una cadena JSON y almacenarlo en localStorage
const preferenciasJSON = JSON.stringify(preferenciasUsuario);
localStorage.setItem('preferencias', preferenciasJSON);

// Paso 3: Recuperar las preferencias del usuario desde localStorage
const preferenciasGuardadas = localStorage.getItem('preferencias');

if (preferenciasGuardadas) {
    const preferencias = JSON.parse(preferenciasGuardadas);
    // Paso 4: Utilizar las preferencias en la aplicación
    console.log('Preferencias del usuario:', preferencias);
    aplicarPreferencias(preferencias);
} else {
    console.log('No hay preferencias guardadas.');
}

// Función hipotética para aplicar las preferencias
function aplicarPreferencias(pref) {
    if (pref.tema === 'oscuro') {
        document.body.classList.add('tema-oscuro');
    }
    // Otros ajustes según las preferencias
}
