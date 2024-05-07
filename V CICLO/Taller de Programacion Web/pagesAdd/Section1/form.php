<?php
// Verifica si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibe los datos del formulario
    $departamento_codigo = $_POST['departamento_codigo'];
    $departamento_nombre = $_POST['departamento_nombre'];
    $provincia_codigo = $_POST['provincia_codigo'];
    $provincia_nombre = $_POST['provincia_nombre'];
    $distrito_codigo = $_POST['distrito_codigo'];
    $distrito_nombre = $_POST['distrito_nombre'];
    $centro_poblado_codigo = $_POST['centro_poblado_codigo'];
    $centro_poblado_nombre = $_POST['centro_poblado_nombre'];
    $zona = $_POST['zona'];
    $seccion = $_POST['seccion'];
    $aeu = $_POST['aeu'];
    $manzana = $_POST['manzana'];
    $frente = $_POST['frente'];
    $seccion_rural = $_POST['seccion_rural'];
    $aer = $_POST['aer'];
    
    // Aquí puedes realizar las acciones necesarias con los datos recibidos,
    // como almacenarlos en una base de datos, enviar por correo electrónico, etc.
    
    // Por ejemplo, podrías imprimir los datos recibidos para verificar que se hayan recibido correctamente
    echo "Datos recibidos:<br>";
    echo "Departamento - Código: " . $departamento_codigo . ", Nombre: " . $departamento_nombre . "<br>";
    echo "Provincia - Código: " . $provincia_codigo . ", Nombre: " . $provincia_nombre . "<br>";
    echo "Distrito - Código: " . $distrito_codigo . ", Nombre: " . $distrito_nombre . "<br>";
    echo "Centro Poblado - Código: " . $centro_poblado_codigo . ", Nombre: " . $centro_poblado_nombre . "<br>";
    echo "Zona N°: " . $zona . "<br>";
    echo "Sección N°: " . $seccion . "<br>";
    echo "A.E.U N°: " . $aeu . "<br>";
    echo "Manzana N°: " . $manzana . "<br>";
    echo "Frente N°: " . $frente . "<br>";
    echo "Sección N° (Rural): " . $seccion_rural . "<br>";
    echo "A.E.R N°: " . $aer . "<br>";
} else {
    // Si el formulario no se ha enviado, redirecciona o muestra un mensaje de error
    echo "Error: El formulario no se ha enviado correctamente.";
}
?>