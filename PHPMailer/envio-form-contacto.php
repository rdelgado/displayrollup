<?php
// Incluir los archivos de PHPMailer
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre'], ENT_QUOTES, 'UTF-8');
    $telefono = htmlspecialchars($_POST['telefono'], ENT_QUOTES, 'UTF-8');
    $correo = htmlspecialchars($_POST['correo'], ENT_QUOTES, 'UTF-8');
    $comentario = htmlspecialchars($_POST['comentario'], ENT_QUOTES, 'UTF-8');

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com'; // Cambia esto por tu servidor SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'info@ventadeportapendones.com'; // Cambia esto por tu correo
        $mail->Password = '(Todo#2023-mail)'; // Cambia esto por tu contraseña
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Configuración UTF-8
        $mail->CharSet = 'UTF-8';

        // Remitente y destinatario
        $mail->setFrom('info@ventadeportapendones.com', 'VDP'); // Cambia esto por tu correo y nombre
        $mail->addAddress('info@ventadeportapendones.com', 'VDP'); // Cambia esto por el correo del destinatario

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje del formulario de contacto';
        $mail->Body = "<p>Nombre: $nombre</p>
                       <p>Teléfono: $telefono</p>
                       <p>Correo: $correo</p>
                       <p>Comentario: $comentario</p>";
        $mail->AltBody = "Nombre: $nombre\nTeléfono: $telefono\nCorreo: $correo\nComentario: $comentario";

        // Enviar el correo
        $mail->send();
        echo 'El mensaje ha sido enviado exitosamente.';
    } catch (Exception $e) {
        echo "El mensaje no pudo ser enviado. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Error en el envío del formulario.";
}
?>
