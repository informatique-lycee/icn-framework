<?php
require_once('lib/site/functions.php');

register_section('site',array(
	'category'=>'creation',
	'titre'=>"Création de sites web",
	'commentaire'=>"L'ensemble de ces ressources vous proposent de créer des sites web"
	)
);

register_activity('web_csslayout',array(
		'category'=>'creation',
		'section'=>'site',
		'type'=>'url',
		'titre'=>"Apprendre les mises en page CSS",
		'level'=>"moyen",
		'auteur'=>'Greg SMITH et Isaac DURAZO',
		'URL'=>'csslayout/index.html',
		'remoteURL'=>'http://fr.learnlayout.com/about.html',
		'commentaire'=>"Un site web qui vous explique en 18 leçons comment faire une mise en page avec les CSS de façon correcte. Un bon début pour bien comprendre le positionnement. Si vous voulez avoir un menu latéral, un bandeau en haut, ou d'autres choses de ce genre, c'est le site qu'il vous faut.",
		'image'=>'html5-css3-96x96.png',
		'prerequis'=>NULL		)
	);

register_section('p5js',array(
	'category'=>'creation',
	'titre'=>"P5js",
	'commentaire'=>"P5js est le langage qui permet aux artistes, aux designers, aux graphistes, d'utiliser l'informatique relativement simplement pour faire des oeuvres."
	)
);

register_activity('p5js_coding_train',array(
		'category'=>'creation',
		'section'=>'p5js',
		'type'=>'url',
		'titre'=>"Apprendre l'informatique avec p5js",
		'level'=>"moyen",
		'auteur'=>' Daniel Shiffman',
		'URL'=>'https://www.youtube.com/user/shiffman/playlists?sort=dd&view=50&shelf_id=14',
		'commentaire'=>"Pas moins de 120 vidéos pour tout apprendre sur l'informatique avec p5js ! Des cours ludiques, et d'excellente qualité.<br><small> <em>Seul défaut, pour l'instant les vidéos ne sont pas encore traduites (mais les réfractaires à la langue de Shakespeare pourront toujours utiliser la fonctionnalité de traduction automatique)</em></small>",
		'image'=>'p5js-211x96.png',
		'prerequis'=>NULL		)
	);
