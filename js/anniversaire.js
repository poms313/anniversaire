// Déclaration des variables les plus utilisées
var $un = $('#un'),
	$deux = $('#deux'),
	$trois = $('#trois'),
	$versionFinale = $('#fin');



// Création des 2 premiers paragraphes
$un.on("click", (function () {
	$deux.fadeIn(800);
}));

$deux.on("click", (function () {
	$trois.fadeIn(800);
}));
