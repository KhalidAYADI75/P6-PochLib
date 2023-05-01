# PochLib

Poch'Lib est une application créée pour une librairie familiale 'la plume enchantée' qui permet de rechercher des livres en ligne avant de venir les chercher en librairie.

**Les technologies**<br/>
- Html<br/>
- Sass<br/>
- Javascript<br/>

# Fontionnalités attendues
### Au chargement de la page : <br/>
Seul le bouton “Ajouter un livre” doit être affiché sur la page . Si des livres sont enregistrés, ceux-ci doivent apparaître sur la page, 
dans la section “Ma poch’liste" <br/>

### Lors du clic sur “Ajouter un livre”<br/>
Lorsque l’utilisateur a cliqué sur le bouton “Ajouter un livre”, un formulaire de recherche doit s’afficher . Ce formulaire est composé de deux champs <br/>
- un champ “Titre du livre” ;
- un champ “Auteur”

### Recherche d'un livre<br/>
L’API de Google Books doit être utilisée pour rechercher les livres correspondant aux données saisies dans le formulaire.<br/>
L’affichage des résultats de recherche doit permettre de lister les livres correspondant aux critères de recherche saisis, en utilisant l’API de Google
Books. Pour chaque livre, les éléments suivants doivent être présents :<br/>
- identifiant
- titre
- auteur (s’il y a plusieurs auteurs, n’afficher que le premier
- icône pour garder le livre dans sa liste (bookmark)
- description (limitée aux 200 premiers caractères)
- image<br/>
Dans le cas où la description serait manquante, l’indication “Information manquante” devra être présente.<br/>

Dans le cas où la recherche ne retourne pas de résultats, le message “Aucun livre n’a été trouvé” devra être affiché<br/>

Lorsque l’utilisateur clique sur l’icône appelée « Bookmark » , le livre sera ajouté dans la liste des livres à lire de l’utilisateur (poch’liste), en-dessous de l’affichage des résultats<br/>

Le livre doit aussi être enregistré dans une session, en utilisant l’API SessionStorage.<br/>

Le même livre ne pourra pas être ajouté deux fois dans la poch’liste. Le message “Vous ne pouvez ajouter deux fois le même livre” devra être affiché
si l’utilisateur essaie d’ajouter deux fois le même livre.<br/>

### Affichage de la poch'liste<br/>
La liste des livres qui ont été sélectionnés par l’utilisateur doit s’afficher sous la fonctionnalité décrite précédemment<br/>

Chacun des livres de la liste doit afficher les mêmes informations que celles décrites dans les résultats de recherche, à l’exception de l’icône Bookmark, qui sera remplacée par une icône de corbeille, pour pouvoir supprimer un livre de sa liste.<br/>

La suppression d’un livre de sa liste ne doit pas supprimer le livre affiché dans les résultats de recherche.<br/>

Le rechargement de la page doit permettre d’afficher la liste des livres enregistrés en session via Session Storage.









