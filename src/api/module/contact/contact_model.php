<?php
if($_SERVER['REQUEST_URI'] == $_SERVER['PHP_SELF']) header("Location: noPage");

class contact_model extends Model {

    public function __construct() {
        parent::__construct();
    }

    public function submitContact()
    {
    	return $this->db->insert("", "contact", $_POST);
    }
}