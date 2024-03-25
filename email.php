<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors = array();

    // Validate name
    if (empty($_POST['name'])) {
        $errors[] = "Name is required";
    }

    // Validate email
    if (empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required";
    }

    // Validate message
    if (empty($_POST['message'])) {
        $errors[] = "Message is required";
    }

    if (empty($errors)) {
        $to = "IMZsolutions4u@gmail.com";
        $subject = "New form submission";
        $message = "Name: " . $_POST['name'] . "\n";
        $message .= "Email: " . $_POST['email'] . "\n";
        $message .= "Message: " . $_POST['message'];

        $headers = "From: " . $_POST['email'];

        if (mail($to, $subject, $message, $headers)) {
            echo "Your message has been sent successfully!";
        } else {
            echo "Sorry, there was a problem sending your message.";
        }
    } else {
        echo "Please fix the following errors:<br>";
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}
?>