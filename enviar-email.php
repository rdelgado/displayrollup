<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $pais = $_POST['pais'];
    $comentario = $_POST['comentario'];

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

        $mail->setFrom('contacto@displayrollup.com', 'Formulario Web');
        $mail->addAddress('todoennegocio@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje del formulario de contacto';
        $mail->Body    = "Nombre: $nombre<br>Email: $email<br>Teléfono: $telefono<br>País: $pais<br>Comentario: $comentario";

        $mail->send();
        header('Location: https://displayrollup.com/Displays-Publicitarios/contacto');
        exit;
    } catch (Exception $e) {
        echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
    }
} else {
    echo "Método no permitido.";
}
