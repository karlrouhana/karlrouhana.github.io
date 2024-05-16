<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "karlrouhana58@gmail.com";
    $subject = "Message from Contact Form";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    if (mail($to, $subject, $body)) {
        echo "Message sent successfully. Thank you for contacting us!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
} else {
    echo "Error: Invalid request.";
}
?>
