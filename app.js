function dark() {
  var element = document.body;

  element.classList.toggle("dark-mode");

  document.querySelectorAll(".miniCard").forEach(function(card){
    card.classList.toggle("dark-card");
  });

}
