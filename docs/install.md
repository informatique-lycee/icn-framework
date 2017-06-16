# Installation sur un serveur Debian
## Prérequis
Vous êtes supposé avoir installé un serveur Apache sur votre serveur Debian,
ou un autre serveur web supportant le PHP que vous aurez déployé correctement.

Le framework utilise [Twig](https://twig.sensiolabs.org/).  Si vous ne l'avez pas encore installé, vous pouvez le faire à partir de Debian Jessie directement par apt

```
apt-get install php-twig
apt-get install php5-twig
```

## Copie du dépot
pour recopier le dépot des sources, mettez vous dans un répertoire adapté. Vous êtes censé avoir le contrôle du serveur, aussi je vous conseille de créer un répertoire  `/usr/local/src/icn-framework`.

Une fois dans ce répertoire, utilisez git pour copier le contenu du dépot
```
git clone https://github.com/informatique-lycee/icn-framework.git
```

## Déploiement
éxécutez le script de déploiement. Normalement il a le flag exécutable, et il
vous permet de déployer en tapant simplement

```
./deploy
```
par défaut, il placera le contenu dans `/var/www/icn/`. Si  vous souhaitez le placer ailleurs (par exemple, /srv/web/icn/), deux solutions s'offrent à vous
 - utiliser avant de lancer deploy une variable d'environnement ICN_FWK_ROOT
```
export ICN_FWK_ROOT=/srv/web/icn/
```

 - utiliser un argument à la commande deploy
 ```
 ./deploy -d /srv/web/icn
 ```

## configuration
le fichier de configuration conf.origin.php est placé dans votre répertoire sous le nom conf.php (mais si vous avez déjà une configuration, elle ne sera pas écrasée). Éditez la configuration dans ce fichier avec votre éditeur de texte favori. Pour connaître les éléments de syntaxe, vous pouvez consulter [la documentation sur la configuration](config.md)
