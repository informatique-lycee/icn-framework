<?php

$variables=array();
$categories=array();
$sections=array();
$activites = array();

require_once 'lib/site/functions.php';
require_once $config['TWIG_PATH']."/Autoloader.php";

Twig_autoloader::register();
// Locale set globally for twig templates
setlocale(LC_ALL, 'fr_FR.UTF-8','fr_FR','fr');
//locale_set_default('fr_FR.UTF-8');

$page = (isset($_GET['page'])) ? $_GET['page'] : 'accueil';

$variables = $pages[$page];

if (isset($_GET['activite'])) {
	$variables['activite']=$_GET['activite'];
}

$variables['is_local_ip']=$IS_LOCAL_IP;
$variables['pages']=$pages;
$variables['sommaire']=$menu_activite;

if (isset($variables['page_parente']) ) {
	$variables['nom_page_parente'] = $pages[$variables['page_parente']]['titre'];
}

if (isset($variables['page_precedente']) ) {
	$variables['nom_page_precedente'] = $pages[$variables['page_precedente']]['titre'];
}

if (isset($variables['page_suivante']) ) {
	$variables['nom_page_suivante'] = $pages[$variables['page_suivante']]['titre'];
}

if (isset($variables['page_enfant']) ) {
	$variables['nom_page_enfant'] = $pages[$variables['page_enfant']]['titre'];
}

if (isset($variables['category'])) {
}

$variables['categories']=$categories;
$variables['sections']=$sections;
$variables['activites']=$activites;
$variables['config']=$config;

$loader = new Twig_Loader_Filesystem($config['template_dir']);

$twig = new Twig_Environment($loader,array('cache'=>false));

$template = $twig->loadTemplate($pages[$page]['template']);
$template->display($variables);
