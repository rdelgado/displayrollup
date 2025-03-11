<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Configura el charset para aceptar caracteres especiales
    header('Content-Type: text/html; charset=UTF-8');
    
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $pais = $_POST['pais'];
    $ciudad = $_POST['ciudad'];
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
        
        // Configuración de codificación
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';

        $mail->setFrom('contacto@displayrollup.com', 'Formulario Web');
        $mail->addAddress('todoennegocio@gmail.com'); // Destinatario principal
        $mail->addAddress($email); // Copia al correo del cliente

        $mail->isHTML(true);
        $mail->Subject = 'Contacto DisplayRollup';
        $mail->Body    = "Nombre: $nombre<br>Email: $email<br>Teléfono: $telefono<br>País: $pais<br>Ciudad: $ciudad<br>Comentario: $comentario<br><br>" .
                         "Este mensaje lo creó el cliente a través de https://displayrollup.com. y aceptó los términos y condiciones.";

        $mail->send();
        header('Location: https://displayrollup.com/contacto');
        exit;
    } catch (Exception $e) {
        echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
    }
} else {
    echo "Método no permitido.";
}
