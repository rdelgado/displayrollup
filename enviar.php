<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $ciudad = $_POST['ciudad'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $mail = new PHPMailer(true);
    try {
        // Configuración del servidor
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com'; // Reemplaza con tu servidor SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'contacto@displayrollup.com'; // Reemplaza con tu usuario SMTP
        $mail->Password = '(Todo#2023-mail-contacto)'; // Reemplaza con tu contraseña SMTP
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587; // Puerto correcto para STARTTLS

        // Configuración del correo
        $mail->setFrom('contacto@displayrollup.com', 'DisplayRollup');
        $mail->addAddress('contacto@displayrollup.com'); // Correo principal
        $mail->addReplyTo($email); // Responder al correo del usuario
        $mail->addCC($email); // Enviar una copia al cliente

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje de contacto';
        $mail->Body    = "Nombre: $nombre<br>Teléfono: $telefono<br>Ciudad: $ciudad<br>Correo: $email<br>Asunto: $asunto<br>Mensaje: $mensaje";

        // Enviar el correo
        $mail->send();
        echo 'El mensaje ha sido enviado con éxito';
    } catch (Exception $e) {
        echo "El mensaje no pudo ser enviado. Error: {$mail->ErrorInfo}";
    }
}
?>
