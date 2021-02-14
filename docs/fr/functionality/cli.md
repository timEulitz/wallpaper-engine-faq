---
sidebarDepth: 2
---

# Contrôles des lignes de commandes

Vous pouvez contrôler Wallpaper Engine avec des arguments de lignes de commandes. Ceci vous permet d'accéder à la plupart des fonctionnalités de l'application par l'intermédiaire d'un raccourci, d'une liaison macro ou de tout type de code ou de script auto-écrit de votre choix. Par exemple, vous pouvez mettre en pause ou stopper tous les fonds d'écran, changer des fonds d'écran, voire même modifier les paramètres les paramètres d'exécution des fonds d'écran.

Vérifiez que Wallpaper Engine est en cours d'exécution, puis envoyez une commande en lançant le processus principal du programme, *wallpaper32.exe* (ou *wallpaper64.exe* si vous utilisez une version 64 bits de l'application), avec n'importe lequel des arguments de commandes figurant dans ce guide. Vous trouverez les fichiers exécutables dans le répertoire d'installation `wallpaper_engine`.

Toutes les commandes sont émises en tant que valeur pour le paramètre `-control`. Par exemple, la commande de pause peut être exécutée de la manière suivante :

``` powershell
wallpaper32.exe -control pause
```

Veillez à utiliser le caractère guillemet **"** pour les chaînes où figurent des espaces :

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

## Vue générale des commandes

### Pause

Mettre en pause tous les fonds d'écran.

``` powershell
-control pause
```

### Stop

Arrêter tous les fonds d'écran.

``` powershell
-control stop
```

### Lancer

Reprend tous les fonds d'écran mis en pause ou arrêtés.

``` powershell
-control play
```

### Muet

Désactive le son de tous les fonds d'écran.

``` powershell
-control mute
```

### Unmute

Réactive le son de tous les fonds d'écran.

``` powershell
-control unmute
```

### Open Wallpaper

Charge une nouveau fond d'écran pour un moniteur bien précis ou pour le premier moniteur si aucun moniteur n'a été indiqué. Vous pouvez utiliser le paramètre `location` ou `monitor` pour choisir sur quel moniteur chargeur le fond d'écran ou ouvrir un fond d'écran dans une fenêtre avec la paramètre `playInWindow`.

``` powershell
-control openWallpaper -file <string> [-location <string>] [-monitor <number>]
        [-playInWindow <string>] [-width <number>] [-height <number>]
        [-x <number>] [-y <number>] [-preset <string>]
```

* **file :** Chemin vers le project.json du fond d'écran que vous voulez ouvrir ou chemin direct menant au fichier du fond d'écran (.mp4, etc.).
* **location *(facultatif)* :** Identificateur interne du moniteur. Vous trouverez ces informations dans le fichier config.json (ces infos sont générées par votre PC).
* **monitor *(facultatif)* :** Index du moniteur sur lequel charger le fond d'écran, commence par 0.
* trong x-id="1">preset *(facultatif)* :</strong> nom du préréglage local à charger. Vous devez avoir créé et sauvegardé celui-ci.
* **playInWindow *(facultatif)* :** nom de la fenêtre dans laquelle vous voulez ouvrir/contrôler plusieurs fonds d'écran dans une fenêtre.
  * **width *(facultatif)* :** largeur de la fenêtre.
  * **height *(facultatif)* :** hauteur de la fenêtre.
  * **x *(facultatif)*:** emplacement horizontal de la fenêtre.
  * **y *(facultatif)* :** emplacement vertical de la fenêtre.

### Fond d'écran suivant

Passe au fond d'écran suivant d'un moniteur bien précis ou de tous les moniteur si aucun moniteur n'est indiqué.

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### Supprimer fond d'écran

Supprime un fond d'écran d'une fenêtre ou d'un moniteur indiqué, ou supprime tous les fonds d'écran.

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location *(facultatif)* :** Identificateur interne du nom de la fenêtre ou du moniteur que vous avez indiqué.
* **monitor *(facultatif)* :** Index du moniteur à partir duquel fermer le fond d'écran, commence par 0.

### Ouvrir liste de lecture

Charge un nouveau fond d'écran pour un moniteur précis ou pour le premier moniteur si aucun n'est indiqué. Vous pouvez utiliser soit location, soit monitor parameter pour choisir le moniteur sur lequel charger le fond d'écran.

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **playlist :** Nom de la liste de lecture que vous avez créée et enregistrée dans Wallpaper Engine.
* **location *(facultatif)* :** Identificateur interne du moniteur. Vous trouverez ces informations dans le fichier config.json (ces infos sont générées par votre PC).
* **monitor *(facultatif)* :** Index du moniteur sur lequel charger la liste de lecture, commence avec 0.

### Appliquer des paramètres de fond d'écran

Applique à la volée les propriétés de fond d'écran à un fond d'écran bien précis ou à tous les fonds d'écran. Cette option vous permet, pendant l'exécution du programme, de modifier dynamiquement tout paramètre appartenant à un fond d'écran, et ce, sans ouvrir le navigateur des fonds d'écran pour les changer manuellement. Vous trouverez facilement une liste des propriétés disponibles dans le navigateur en cliquant sur l'option **Partager JSON** qui se trouve sur la droite lors de la sélection d'un fond d'écran dans le navigateur.

``` powershell
-control applyProperties -properties <JSON> [-location <string>] [-monitor <number>]
```

* **properties :** Propriétés définies comme chaîne **JSON** à appliquer. Il faut interrompre la chaîne à l'aide de `RAW~(` et `)~END` comme délimiteurs. Consultez les exemples ci-dessous !
* **location *(facultatif)* :** Identificateur interne du nom de la fenêtre ou du moniteur que vous avez indiqué.
* **monitor *(facultatif)* :** Index du moniteur sur lequel mettre à jouer les propriétés, commence par 0.

Exemple visant à changer un paramètre d'un fond d'écran nommé `rate` pour le configurer sur 10 :

``` cpp 
-control applyProperties -properties RAW~({"rate":10})~END
```

Exemple de changement du paramètre de couleurs d'un fond d'écran pour passer au rouge (`"1 0 0"` représente les valeurs *RGB*) :

``` cpp
-control applyProperties -properties RAW~({"schemecolor":"1 0 0"})~END
```

### Masquer les icônes du bureau

Masque les icônes du bureau.

``` powershell
-control hideIcons
```

### Afficher les icônes du bureau

Affiche les icônes du bureau.

``` powershell
-control showIcons
```
