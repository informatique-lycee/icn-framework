<?php

require_once 'lib/site/functions.php';
require_once 'lib/Twig/Autoloader.php';

Twig_autoloader::register();
// Locale set globally for twig templates
setlocale(LC_ALL, 'fr_FR.UTF-8','fr_FR','fr');
//locale_set_default('fr_FR.UTF-8');

$loader = new Twig_Loader_Filesystem('templates');
$twig = new Twig_Environment($loader,array('cache'=>false));

// Parcoure la liste des activites
$activites = array();
foreach(glob("ressources/activites/*php") as $filename) include_once($filename);
if (isset($_GET['activite']) && file_exists("ressources/".$activites[$_GET['activite']]['directory']."/scripts.php")) {
	require_once("ressources/".$activites[$_GET['activite']]['directory']."/scripts.php");
}

$action = (isset($_GET['action'])) ? $_GET['action'] : 'none';

$variables=array();

switch ($action) {
	case 'video':
		if (isset($_GET['id'])) {
			if (isset($_GET['activite']) && file_exists("ressources/".$activites[$_GET['activite']]['directory']."/videos.php")) {
				require_once("ressources/".$activites[$_GET['activite']]['directory']."/videos.php");
			}
			$id=$_GET['id'];
			$variables['video']=$videos[$id];
			$variables['is_local_ip']=$IS_LOCAL_IP;
			$template = $twig->loadTemplate('video.ajax.twig');
			$template->display($variables);
		}
	break;
	case 'javascript':
		if (isset($_GET['id'])){
			$id=$_GET['id'];
			$variables['javascript']=$examples_scripts[$id];
			$variables['script_id']=$id;
			if (isset($_GET['activite']))
				$variables['activite']=$_GET['activite'];
			$template = $twig->loadTemplate('javascript.ajax.twig');
			$template->display($variables);
		}
		break;
	case 'scripts':
		header('Content-Type: application/json');
		if (isset($_GET['id'])) {
			$id=$_GET['id'];
		} else {
			$id='default';
		}
		echo(json_encode($examples_scripts[$id]));
		break;
	case 'none':
	default:
}
