<?php
if($_SERVER['REQUEST_URI'] == $_SERVER['PHP_SELF']) header("Location: noPage");

require 'config/database.php';

// use an autoloader
function __autoload($class) {
	require "frame_libs/". $class. ".php";
}

new Router();