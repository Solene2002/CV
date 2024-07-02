$(function() {
  var word = [
    'une étudiante',
    'une alternante'
  ],
  i = 0;
 
  // Affichage aléatoire des mots ci-dessus dans le header
  setInterval(function() {
    $("#word").fadeOut(function() {
      $(this).html(word[i = (i + 1) % word.length]).fadeIn();
    });
  }, 1100);

  // Scroll vers les sections site lors d'un clic sur les catégories du menu
  $(".scroll").click(function() {
    var section = $("." + this.id);
    $("html,body").animate({scrollTop: section.offset().top}, 'slow');
  });

  // Changement de couleur du copyright au survol
  const hover = document.querySelector('#hover');

hover.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightgrey'
})

});


