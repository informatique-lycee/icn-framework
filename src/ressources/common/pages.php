<?php

require_once('lib/site/functions.php');

register_category('informatique',
	array('titre'=>'Informatique',
		'commentaire'=>	"L'objectif de cette page est de fournir un accès à tout un ensemble de ressources qui permettent d'apprendre l'informatique au sens le plus large. On y trouvera des liens vers des sites pour apprendre les bases de l'algorithmique, de la programmation dans différents langages et aussi les bases des langages HTML et CSS pour composer des pages web."
	)
);

register_category('creation',
	array('titre'=>'Création',
		'commentaire'=>"Les outils informatiques sont un formidable moyen d'expression. Ils permettent de renouveler un certains nombre de domaines artistiques et en ont inventé de nouveaux. Les ressources proposées ici vous permettront de devenir non plus consommateur mais créateur de ressources numériques."
	)
);


register_category('numerique',
	array('titre'=>'Numérique',
		'commentaire'=>"Le numérique ce n'est pas qu'une technique et des outils. C'est aussi tout un ensemble de pratiques, de problématiques qui sont entrées dans notre quotidien. C'est aussi une industrie qui brasse des capitaux énormes. On peut essayer d'avoir un peu de recul sur tout cela. Les différentes proposées ici vous proposent de réfléchir à ces problèmatiques."
	)
);


$pages=array(
	'accueil' => array("template"=>'welcome.html.twig',
		'titre'=>'Acceuil du site',
		'css'=>'style/site.min.css'),
	'informatique'=> array("template"=>'ressources.html.twig',
		'titre'=>'Informatique',
		'category'=>'informatique'),
	'creation'=> array("template"=>'ressources.html.twig',
		'titre'=>'Création',
		'category'=>'creation'),
	'numerique'=> array("template"=>'ressources.html.twig',
		'titre'=>'Numérique',
		'category'=>'numerique'),
	'empty'=> array("template"=>'empty.html.twig',
		'titre'=>'Numérique',
		'category'=>'none')
);
