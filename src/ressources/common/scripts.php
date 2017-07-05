<?php

$examples_scripts=array(
	'default'=>array(
		"title"=>'éditeur intégré',
		"files"=>array(
			"html"=>"ressources/common/assets/examples/html/empty.html",
	  	"css"=>"ressources/common/assets/examples/css/empty.css",
	  	"javascript"=>"ressources/common/assets/examples/javascript/empty.js"),
	  "editors"=>array(
			"html"=>true,
			"css"=>true,
			"javascript"=>true
		),
		"activeEditor"=>"html"),
		/* totalement vide :  alias pour default */
);

$examples_scripts['empty']=$exemples_scripts['default'];
