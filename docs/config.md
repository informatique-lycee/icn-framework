# Configuration du Framework

## Fichier de configuration

Le fichier de configuration est le fichier conf.php à la racine du service. La version de départ est conservée dans conf.origin.php.

Voici son contenu à l'heure actuelle

```php
$config=array(
  "has_local"=>false,
  "debug"=>false,
  "template_dir"=>"templates",
  "use_cdn"=>true
);
```

## Paramètres

### has_local (boolean)

### debug (boolean)
Indique si des informations supplémentaires doivent apparaître. Elles permettent au développeur d'avoir une structure pour afficher les informations utiles lors de la phase de mise au point

### template_dir (string)
Le répértoire qui sera utilisé pour les templates. Il n'y a à priori aucune raison de modifier ce répertoire (au risque de tout casser) en dehors peut être de l'utilisation d'un répertoire de développement

### use_cdn (boolean)
Ce boolean indique votre volonté d'utiliser ou pas les CDN (content delivery network) pour les principales bibliothèques javascript. Si vous les utilisez dans un établissement scolaire, vous risquez de consommer plus de bande passante descendant. Mais la mise en cache par un proxy peut améliorer les choses. C'est une bonne idée de mettre ce boolean à true sauf si vous avez très peu de bande passante. 
