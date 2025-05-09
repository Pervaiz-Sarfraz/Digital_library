<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'db.php';
$objDb = new db;
$pdo = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "GET":
        if (isset($_GET['email'])) {
            $checkemail = $_GET['email'];
            $sql = "SELECT COUNT(email) as count FROM users WHERE email = :email";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':email', $checkemail);
            if ($stmt->execute()) {
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                echo json_encode(['count' => $row['count']]);
                exit();
            } else {
                echo json_encode(['error' => 'Error checking email existence']);
                exit();
            }
        }
        if (isset($_GET['username'])) {
            $checkusername = $_GET['username'];
            $sql = "SELECT COUNT(username) as count FROM users WHERE username = :username";
            $stmt = $pdo->prepare($usql);
            $stmt->bindParam(':username', $checkusername);
            if ($stmt->execute()) {
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                echo json_encode(['count' => $row['count']]);
                exit();
            } else {
                echo json_encode(['error' => 'Error checking username existence']);
                exit();
            }
        }

        break;

    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $email = $user->email;
        $password = $user->password;
        $confirmPassword = $user->confirmPassword;

        if ($password !== $confirmPassword) {
            $response = ['status' => 0, 'message' => 'Password and Confirm Password do not match.'];
            echo json_encode($response);
            exit();
        }

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO users(email, username, password) VALUES(:email, :username, :password)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':username', $user->username);
        $stmt->bindParam(':password', $hashedPassword);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
}
?>
