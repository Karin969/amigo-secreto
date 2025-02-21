function sortearAmigoSecreto(participantes) {
    // Validar que todos los nombres sean ingresados
    if (participantes.some(nombre => nombre.trim() === "")) {
        alert("Todos los nombres deben estar completos.");
        return;
    }

    let asignaciones = [];
    let disponibles = [...participantes];

    for (let i = 0; i < participantes.length; i++) {
        let opciones = disponibles.filter(nombre => nombre !== participantes[i]);
        
        if (opciones.length === 0) {
            return sortearAmigoSecreto(participantes); // Reiniciar si no hay opción válida
        }
        
        let elegido = opciones[Math.floor(Math.random() * opciones.length)];
        asignaciones.push({ participante: participantes[i], amigoSecreto: elegido });
        disponibles.splice(disponibles.indexOf(elegido), 1);
    }

    console.log("Resultados del Amigo Secreto:", asignaciones);
    return asignaciones;
}
