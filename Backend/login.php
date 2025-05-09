<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'db.php';
$objDb = new db;
$pdo = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        $checkemail = $user->email;
        $checkpassword = $user->password;
        if (($checkemail) && isset($checkpassword)) {
            $sql = "SELECT * FROM users WHERE email = :checkemail";  
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':checkemail', $checkemail);  
            $stmt->execute();

            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($user) {
                $hashedPasswordFromDB = $user['password'];  
                $hashedPasswordEntered = password_hash($checkpassword, PASSWORD_DEFAULT); 

                if (password_verify($checkpassword, $hashedPasswordFromDB)) {
                    echo json_encode(["status" => "success", "message" => "Login successful", "userId" => $user['id'], "username" => $user['username']]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Invalid password"]);
                }
            } else {
                echo json_encode(["status" => "error", "message" => "Invalid email"]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Email or password not provided"]);
        }
        break;
}

$pdo = null;
?>
