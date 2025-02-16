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
            // Log the error or handle it accordingly.
            error_log("Database Connection Error: " . $e->getMessage());
            // You can also throw the exception again if you want it to propagate up the call stack.
            // throw $e;
        }
    }
}
