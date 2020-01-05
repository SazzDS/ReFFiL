<?php
if($_SERVER['REQUEST_URI'] == $_SERVER['PHP_SELF']) header("Location: noPage");

class contact extends Controller {

	public function __construct() {
		parent::__construct();
	}

	public function submitContact() {
		echo json_encode($this->model->submitContact());
	}

}