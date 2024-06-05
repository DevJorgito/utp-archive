function cargarCampos() {
    const entidad = document.getElementById('entidad').value;
    const camposDiv = document.getElementById('campos');
    camposDiv.innerHTML = ''; // Limpiar campos anteriores

    let camposHTML = '';

    if (entidad === 'encuestador') {
        camposHTML = `
            <label for="DNI">DNI:</label>
            <input type="text" id="DNI" name="DNI" required>
            <label for="Clave">Clave:</label>
            <input type="text" id="Clave" name="Clave" required>
            <label for="Nombres">Nombres:</label>
            <input type="text" id="Nombres" name="Nombres" required>
            <label for="Apellidos">Apellidos:</label>
            <input type="text" id="Apellidos" name="Apellidos" required>
            <label for="Edad">Edad:</label>
            <input type="number" id="Edad" name="Edad" required>
            <label for="Sexo">Sexo:</label>
            <input type="text" id="Sexo" name="Sexo" required>
            <label for="Experiencia">Experiencia:</label>
            <input type="text" id="Experiencia" name="Experiencia" required>
        `;
    } else if (entidad === 'persona') {
        camposHTML = `
            <label for="Dni">Dni:</label>
            <input type="text" id="Dni" name="Dni" required>
            <label for="Num_Hogar">Num Hogar:</label>
            <input type="text" id="Num_Hogar" name="Num_Hogar" required>
            <label for="Num_Persona">Num Persona:</label>
            <input type="text" id="Num_Persona" name="Num_Persona" required>
            <label for="Nombres">Nombres:</label>
            <input type="text" id="Nombres" name="Nombres" required>
            <label for="Apellidos">Apellidos:</label>
            <input type="text" id="Apellidos" name="Apellidos" required>
            <label for="Sexo">Sexo:</label>
            <input type="text" id="Sexo" name="Sexo" required>
            <label for="Fecha_Nacimiento">Fecha de Nacimiento:</label>
            <input type="date" id="Fecha_Nacimiento" name="Fecha_Nacimiento" required>
            <label for="Estado_Civil">Estado Civil:</label>
            <input type="text" id="Estado_Civil" name="Estado_Civil" required>
            <label for="Religion">Religión:</label>
            <input type="text" id="Religion" name="Religion" required>
            <label for="Nivel_Educativo">Nivel Educativo:</label>
            <input type="text" id="Nivel_Educativo" name="Nivel_Educativo" required>
            <label for="Total_Hijos">Total de Hijos:</label>
            <input type="number" id="Total_Hijos" name="Total_Hijos" required>
        `;
    } else if (entidad === 'vivienda') {
        camposHTML = `
            <label for="ID_Vivienda">ID Vivienda:</label>
            <input type="text" id="ID_Vivienda" name="ID_Vivienda" required>
            <label for="Tipo_Vivienda">Tipo de Vivienda:</label>
            <input type="text" id="Tipo_Vivienda" name="Tipo_Vivienda" required>
            <label for="Condicion">Condición:</label>
            <input type="text" id="Condicion" name="Condicion" required>
            <label for="Origen_Agua">Origen del Agua:</label>
            <input type="text" id="Origen_Agua" name="Origen_Agua" required>
            <label for="Tipo_Baño">Tipo de Baño:</label>
            <input type="text" id="Tipo_Baño" name="Tipo_Baño" required>
            <label for="Total_Habitaciones">Total de Habitaciones:</label>
            <input type="number" id="Total_Habitaciones" name="Total_Habitaciones" required>
        `;
    } else if (entidad === 'hogar') {
        camposHTML = `
            <label for="Num_Hogar">Num Hogar:</label>
            <input type="text" id="Num_Hogar" name="Num_Hogar" required>
            <label for="ID_Vivienda">ID Vivienda:</label>
            <input type="text" id="ID_Vivienda" name="ID_Vivienda" required>
            <label for="Tipo_Combustible">Tipo de Combustible:</label>
            <input type="text" id="Tipo_Combustible" name="Tipo_Combustible" required>
            <label for="Num_Miembros">Número de Miembros:</label>
            <input type="number" id="Num_Miembros" name="Num_Miembros" required>
        `;
    } else if (entidad === 'direccion') {
        camposHTML = `
            <label for="ID_Vivienda">ID Vivienda:</label>
            <input type="text" id="ID_Vivienda" name="ID_Vivienda" required>
            <label for="Departamento">Departamento:</label>
            <input type="text" id="Departamento" name="Departamento" required>
            <label for="Provincia">Provincia:</label>
            <input type="text" id="Provincia" name="Provincia" required>
            <label for="Distrito">Distrito:</label>
            <input type="text" id="Distrito" name="Distrito" required>
            <label for="Calle">Calle:</label>
            <input type="text" id="Calle" name="Calle" required>
        `;
    } else if (entidad === 'infraestructura') {
        camposHTML = `
            <label for="ID_Vivienda">ID Vivienda:</label>
            <input type="text" id="ID_Vivienda" name="ID_Vivienda" required>
            <label for="Material_Paredes">Material de Paredes:</label>
            <input type="text" id="Material_Paredes" name="Material_Paredes" required>
            <label for="Material_Techos">Material de Techos:</label>
            <input type="text" id="Material_Techos" name="Material_Techos" required>
            <label for="Material_Pisos">Material de Pisos:</label>
            <input type="text" id="Material_Pisos" name="Material_Pisos" required>
        `;
    }

    camposDiv.innerHTML = camposHTML;
}

document.getElementById('modificarForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Aquí enviarías los datos al servidor mediante una petición fetch o XMLHttpRequest
    fetch('/api/modificar', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Datos modificados exitosamente');
        } else {
            alert('Error al modificar los datos');
        }
    })
    .catch(error => console.error('Error:', error));
});
