<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$database = "Portfolio";

$conn = new mysqli('localhost', 'root','K130503r','PortfolioEmails');

if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into form_data(name, email, message) values(?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);
    $stmt->execute();
    echo "Thank you for contacting me! </br>";
    echo "<a href=\"index.html\">Go Back</a>";
    $stmt->close();
    $conn->close();
}
?>