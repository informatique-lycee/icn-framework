<?php

require_once('lib/site/functions.php');

register_section('algo',array(
	'category'=>'informatique',
	'titre'=>"Algorithmique",
	'commentaire'=>"L'ensemble de ces ressources vous proposent de découvrir les bases de l'algorithmique, souvent de façon ludique."
	)
);

register_section('html',array(
	'category'=>'informatique',
	'titre'=>"HTML",
	'commentaire'=>"Le HTML (Hyper Text Markup Language) est le langage avec lequel sont batis les sites web. Avez vous jamais révé de créer des pages web ? De comprendre leur fonctionnement ? Ces ressources sont faîtes pour vous.
"
	)
);

register_section('javascript',array(
	'category'=>'informatique',
	'titre'=>"Javascript",
	'commentaire'=>"Le javascript est le langage de programmation utilisé à travers le web dans les navigateurs. C'est un langage complet, très puissant, et versatile. Les ressources proposées ici vous initieront au javascript."
	)
);

register_activity('algo_hc',array(
		'category'=>'informatique',
		'section'=>'algo',
		'type'=>'url',
		'titre'=>"L'heure de code",
		'level'=>"initiation, très simple",
		'auteur'=>'',
		'URL'=>'https://studio.code.org/s/starwarsblocks/stage/1/puzzle/1',
		'commentaire'=>"Cette heure de code est une introduction simple à l'algorithmique. Comment faire des tests ? Des boucles ? Sous des apparences ludiques et simples, cet heure de code donne beaucoup d'éléments importants.",
		'icon'=>'devicon-amazonwebservices-original',
		'prerequis'=>NULL
	)
);

register_activity('cargobot',array(
		'category'=>'informatique',
		'section'=>'algo',
		'type'=>'url',
		'titre'=>"cargobot",
		'level'=>"principe simple, certains niveaux sont ardus",
		'auteur'=>'',
		'URL'=>'http://www-verimag.imag.fr/~wack/CargoBot/',
		'commentaire'=>"Cagobot est un petit jeu de reflexion qui permet, sans s'en rendre compte, de mettre en place différent principe de l'algorithmique et de la programmation : fonctions, instructions conditionnelles, récursivité, etc...",
		'icon'=>'devicon-amazonwebservices-original',
		'prerequis'=>NULL
		)
	);

	register_activity('lightbot',array(
		'category'=>'informatique',
		'section'=>'algo',
		'type'=>'url',
		'titre'=>"lightbot",
		'level'=>"simple",
		'auteur'=>'',
		'URL'=>'http://lightbot.com/hocflash.html',
		'commentaire'=>"Dans le même esprit que cargobot, mais un peu plus simple, vous déplacerez un petit robot qui allume des tuiles.",
		'icon'=>'devicon-amazonwebservices-original',
		'prerequis'=>NULL
	));

	register_activity('javascript_oc',array(
		'category'=>'informatique',
		'section'=>'javascript',
		'type'=>'url',
		'titre'=>'Apprenez à coder avec javascript',
		'auteur'=>'Baptiste Pesquet',
		'URL'=>'https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript',
		'commentaire'=>"Cours sur les bases de la programmation en utilisant Javascript. ",
		'ps'=>"Pour pouvoir accéder à tout le contenu, il faut créer un compte sur openclassrooms (gratuit)",
		'icon'=>'devicon-javascript-plain colored',
		'prerequis'=>NULL
	));

		register_activity('javascript_dom_oc',array(
		'category'=>'informatique',
		'section'=>'javascript',
		'type'=>'url',
		'titre'=>'Créer des pages web interactives avec javascript',
		'auteur'=>'Baptiste Pesquet',
		'URL'=>'https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript',
		'commentaire'=>"Le but de ce cours est de rendre les pages web interactives",
		'ps'=>"Pour pouvoir accéder à tout le contenu, il faut créer un compte sur openclassrooms (gratuit)",
		'icon'=>'devicon-javascript-plain colored',
		'prerequis'=>NULL
	));


		register_activity(	'html_oc',array(
			'category'=>'informatique',
			'section'=>'html',
		'type'=>'url',
		'titre'=>'Apprenez à créer votre site avec HTML5 et CSS3',
		'auteur'=>'Mathieu NEBRA',
		'URL'=>'https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3',
		'commentaire'=>"Un cours relativement complet qui part de zéro pour vous amener à la possibilité de créer vous même un site web assez complet",
		'ps'=>"Pour pouvoir accéder à tout le contenu, il faut créer un compte sur openclassrooms (gratuit)",
		'image'=>'html5-css3-96x96.png',
		'prerequis'=>NULL
	));

		register_activity(	'html_w3schoool',array(
			'category'=>'informatique',
			'section'=>'html',
		'type'=>'url',
		'titre'=>'Le site de référence W3schools',
		'auteur'=>NULL,
		'URL'=>'http://www.w3schools.com/',
		'commentaire'=>"Le site de référence pour avoir toutes les informations sur toutes les balises html et css",
		'ps'=>NULL,
		'image'=>'html5-css3-96x96.png',
		'prerequis'=>NULL
	));
