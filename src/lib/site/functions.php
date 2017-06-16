<?php

if(file_exists('conf.php')) {
	require_once('conf.php');
} else {
	die("erreur! Fichier de configuration manquant");
}


require_once 'ressources/common/pages.php';
require_once 'ressources/common/videos.php';
require_once 'ressources/common/scripts.php';

function register_activity($activite,$data) {
	global $activites;
	$activites[$activite]=$data;
}

function register_section($section,$data) {
	global $sections;
	$sections[$section]=$data;
}

function register_category($category,$data) {
	global $categories;
	$categories[$category]=$data;
}


// Parcoure la liste des activites
foreach(glob("ressources/activites/*php") as $filename) include_once($filename);

// Charge le contenu lié à une activité
if (isset($_GET['activite'])) {
	 $activite_dir=$activites[$_GET['activite']]['directory'];
	if (file_exists("ressources/$activite_dir/pages.php"))
		 include_once "ressources/$activite_dir/pages.php";
	if (file_exists("ressources/$activite_dir/videos.php"))
		include_once "ressources/$activite_dir/videos.php";
	if (file_exists("ressources/$activite_dir/scripts.php"))
		include_once "ressources/$activite_dir/scripts.php";
}

function get_ip() {
	//Just get the headers if we can or else use the SERVER global
	if ( function_exists( 'apache_request_headers' ) ) {
		$headers = apache_request_headers();
	} else {
		$headers = $_SERVER;
	}

	//Get the forwarded IP if it exists
	if ( array_key_exists( 'X-Forwarded-For', $headers ) ){
		$the_ip = explode(",",$headers['X-Forwarded-For']);
		$the_ip = filter_var($the_ip[0], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 );
	}

	if ( !$the_ip && array_key_exists( 'HTTP_X_FORWARDED_FOR', $headers ) ) {
		$the_ip = explode(",",$headers['HTTP_X_FORWARDED_FOR']);
		$the_ip = filter_var($the_ip[0], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 );
	}

	if (!$the_ip) {
		$the_ip = filter_var( $_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 );
	}

	return $the_ip ;
}

function get_video_URI($id) {
	$IS_LOCAL_IP = !filter_var(get_ip(),FILTER_VALIDATE_IP,FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE);
	if ($IS_LOCAL_IP) {
		return('local video');
	} else {
		return('remote video');
	}
}

if ($config['has_local']) {
	$IS_LOCAL_IP = !filter_var(get_ip(),FILTER_VALIDATE_IP,FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE);
} else {
	$IS_LOCAL_IP = false;
}
