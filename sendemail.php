<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "deine-email@example.com"; // Deine E-Mail-Adresse
    $subject = "Neue Kontaktanfrage von " . $name;
    $body = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";
    
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "E-Mail wurde erfolgreich gesendet.";
    } else {
        echo "Fehler beim Senden der E-Mail.";
    }
}
?>
