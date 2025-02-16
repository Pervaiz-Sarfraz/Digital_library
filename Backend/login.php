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
            $sql = "SELECT * FROM users WHERE email = :checkemail";  // Fix the parameter name
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':checkemail', $checkemail);  // Fix the parameter name
            $stmt->execute();

            // Fetch the result as an associative array
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            
            // Check if the email exists
            if ($user) {
                // Email exists, now verify the password
                $hashedPasswordFromDB = $user['password'];  // Corrected the column name
                $hashedPasswordEntered = password_hash($checkpassword, PASSWORD_DEFAULT);  // Hash the entered password for comparison

                if (password_verify($checkpassword, $hashedPasswordFromDB)) {
                    echo json_encode(["status" => "success", "message" => "Login successful", "userId" => $user['id'], "username" => $user['username']]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Invalid password"]);
                }
            } else {
                // Email not found
                echo json_encode(["status" => "error", "message" => "Invalid email"]);
            }
        } else {
            // Email or password not set in POST data
            echo json_encode(["status" => "error", "message" => "Email or password not provided"]);
        }
        break;
}

// Set $pdo to null to close the connection
$pdo = null;
?>
