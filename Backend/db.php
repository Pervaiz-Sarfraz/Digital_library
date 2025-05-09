<?php

class db
{
    private $server = "localhost";
    private $dbname = "maxiumstechno";
    private $username = "root";
    private $password = "";

    public function connect()
    {
        try {
            $conn = new PDO('mysql:host=' . $this->server . ';dbname=' . $this->dbname, $this->username, $this->password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (\Exception $e) {
            error_log("Database Connection Error: " . $e->getMessage());
        }
    }
}
