<?php

//
// SECTIONS
//

register_section('industrie',array(
	'category'=>'numerique',
	'titre'=>"Industrie numérique",
	'commentaire'=>"Le numérique est une des industries les plus dynamique. Sa croissance est impressionnante, et les capitaux qui y transitent maintenant sont colossaux. Le seul jeu vidéo par exemple brasse plus de capitaux que l'industrie du cinéma. Cette manne financière n'est pas sans générer quelques dérives. Cette section vous propose de voir les différentes facettes de cette industrie."
	)
);

register_section('social',array(
	'category'=>'numerique',
	'titre'=>"Impact social du numérique",
	'commentaire'=>"Le numérique s'est introduit dans tous les champs de notre quotidien. Les outils ne sont pas neutres. En plus de leur utilisation, ils induisent aussi une modification de nos comportements, de notre relation au monde et de notre relation à autrui. Ces ressources vous proposent des réflexions à ce sujet"
	)
);

register_section('futur',array(
	'category'=>'numerique',
	'titre'=>"Prospective",
	'commentaire'=>"Le numérique a déjà modifié considérablement nos vie. Mais des bouleversements encore plus profonds
	sont peut être encore à venir. La voiture qui se conduit seule ? L'intelligence artificielle permettant un diagnostic médical fiable ? L'aggrégation des données du big data ? Quels sont les futurs défis ?"
	)
);

//
// ACTIVITES
//

register_activity('datagueule_amazon',array(
		'category'=>'numerique',
		'section'=>'industrie',
		'titre' => 'Amazon' ,
		'auteur'=>'#DataGueule',
		'level'=>'initiation',
		'video'=>'datagueule_amazon',
		'commentaire'=>"Amazon, géant de l'industrie numérique engrange des profits faramineux, en s'introduisant dans tous les secteurs. Mais cela va de pair avec une position dominante monopolistique et une évasion fiscale record. Ainsi qu'une domination sur le contrôle des données qui n'est pas sans poser question",
		'icon'=>'fa fa-film',
		'prerequis'=>NULL
	)
);

register_activity('datagueule_samsung',array(
		'category'=>'numerique',
		'section'=>'industrie',
		'titre' => 'Samsung trois étoiles' ,
		'auteur'=>'#DataGueule',
		'level'=>'initiation',
		'video'=>'datagueule_samsung',
		'commentaire'=>"Samsung est de loin le numéro un de la téléphonie mobile. Mais pour conquérir cette place et pour la conserver, les pratiques sont parfois interpellantes.",
		'icon'=>'fa fa-film',
		'prerequis'=>NULL)
	);
register_activity('datagueule_robots_traders',array(
		'category'=>'numerique',
		'section'=>'industrie',
		'titre' => "L'invasion des robots traders" ,
		'auteur'=>'#DataGueule',
		'level'=>'initiation',
		'video'=>'datagueule_robots_traders',
		'commentaire'=>"Dans la recherche du profit, les sociétés de trading utilisent de plus en plus des machines pour passer en bourse des ordres ultrarapides. Mais cette irruption des algorithmes dans la finance n'est pas sans danger.",
		'icon'=>'fa fa-film',
		'prerequis'=>NULL)
	);
register_activity('datagueule_neutralite_net',array(
		'category'=>'numerique',
		'section'=>'industrie',
		'titre' => "La neutralité du Net" ,
		'auteur'=>'#DataGueule',
		'level'=>'initiation',
		'video'=>'datagueule_neutralite_net',
		'commentaire'=>"Dans un monde ou Internet devient le vecteur principal de la communication et de l'information, la tentation de controler les tuyaux est grande. Un prinicpe garanti à tous l'accès à l'information équitablement : la neutralité du net. Mais il est menacé.",
		'icon'=>'fa fa-film',
		'prerequis'=>NULL)
	);
register_activity('datagueule_pirates',array(
		'category'=>'numerique',
		'section'=>'industrie',
		'titre' => "Les pirates d'internet" ,
		'auteur'=>'#DataGueule',
		'level'=>'initiation',
		'video'=>'datagueule_pirates',
		'commentaire'=>"",
		'icon'=>'fa fa-film',
		'prerequis'=>NULL)
	);
register_activity('datagueule_bigdata',array(
		'category'=>'numerique',
		'section'=>'industrie',
		'titre' => "Donnez moi vos données !" ,
		'auteur'=>'#DataGueule',
		'level'=>'initiation',
		'video'=>'datagueule_bigdata',
		'commentaire'=>"Si c'est gratuit, c'est que vous êtes le produit ! Ou comment nos traces numériques sont des données qui en disent long sur nous et qui créent un marché pas si anodin que cela.",
		'icon'=>'fa fa-film',
		'prerequis'=>NULL)
	);
register_activity('datagueule_vie_privee',array(
		'category'=>'numerique',
		'section'=>'industrie',
		'titre' => "Privé de vie privée ?" ,
		'auteur'=>'#DataGueule',
		'level'=>'initiation',
		'video'=>'datagueule_vie_privee',
		'commentaire'=>"Si c'est gratuit, c'est que vous êtes le produit ! Ou comment nos traces numériques sont des données qui en disent long sur nous et qui créent un marché pas si anodin que cela.",
		'icon'=>'fa fa-film',
		'prerequis'=>NULL)
	);


register_activity('innovation_lonelinness',array(
		'category'=>'numerique',
		'section'=>'social',
		'titre'=>"L'invention de l'isolement",
		'level'=>"initiation, très simple",
		'auteur'=>'Shimi COHEN',
		'video'=>'innovation_lonelinness',
		'commentaire'=>"L'être humain est fondamentalement un être social. Les réseaux sociaux semblent nous permettre de rester connectés en permanence aux autres, de créer du lien. Mais paradoxalement, ils pourraient être à l'origine d'un plus grand isolement.",
		'icon'=>'fa fa-film',
		'prerequis'=>NULL
	));

register_activity('internet_brain',array(
	'category'=>'numerique',
	'section'=>'social',
		'titre'=>"What internet is doing to our brain ?",
		'level'=>"initiation, très simple",
		'auteur'=>'Epipheo',
		'video'=>'internet_brain',
		'URL'=>'http://www.nicholascarr.com/?page_id=16',
		'commentaire'=>"Nicholas Carr est un expert des technologies et de leur impact sur notre vie. Son livre <em> The Shallows </em>(les bas fonds) a connu un succès mondial. Dans cette vidéo, il  présente les effets de notre hyperconnectivité sur nos capacités cognitives",
		'icon'=>'fa fa-film',
		'prerequis'=>NULL
	));

register_activity('xenius_addiction',array(
	'category'=>'numerique',
	'section'=>'social',
		'titre'=>"Internet : quand commence l'addiction ?",
		'level'=>"initiation, très simple",
		'auteur'=>'Arte XENIUS',
		'video'=>'xenius_addiction',
		'commentaire'=>"Internet : malédiction ou bénédiction ? L'addiction à la Toile est une pathologie à prendre au sérieux, qui touche plus particulièrement les adolescents. Mais à quel degré de fréquentation sommes-nous dépendants ? Et quelles peuvent-être les raisons qui poussent certains à transférer leur vie sur un espace virtuel ?",
		'icon'=>'fa fa-film',
		'prerequis'=>NULL
	));

register_activity('xenius_drones',array(
	'category'=>'numerique',
	'section'=>'social',
		'titre'=>"Les drones civils : outils précieux ou armes de Big Brother ?",
		'level'=>"initiation, très simple",
		'auteur'=>'Arte XENIUS',
		'video'=>'xenius_drones',
		'commentaire'=>"Les drones civils se répandent de plus en plus. Les technologies ont progressé et le cout a fortement diminué. Les usages récréatifs sont attirants, les usages professionnels innovants, mais la possibilité d'une surveillance de masse plane aussi. Les drones civils : outils précieux ou armes de Big Brother ?",
		'icon'=>'fa fa-film',
		'prerequis'=>NULL
		)
	);
