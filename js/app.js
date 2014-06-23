$(document).ready(function() {  
  //when new game starts, a secret # from 1-100 is generated
  var secretNum = 1 + Math.floor(Math.random() * 100);  
  var clicks = 0;   

  $(".button").click(function(){ 
    clicks++; 
    $('#count').html(clicks);
    $("#guessList").append("<li>" + ($("#userGuess").val()) + "</li>");
    $("#feedback").text(feedback);
    $('#userGuess').val('');   
  });

  $("form").submit(function(event){
      event.preventDefault();
  });  

  //gives user feedback on guess and checks to make sure a whole number 1-100
  function feedback() {
   var g = parseFloat($("#userGuess").val());

   if(g == secretNum) {
      return "Correct!!";
    } 
    else if (g % 1 != 0  || g > 100 || g < 1) {
      return"Your guess must be a whole number between 1-100!";
    } 
    else if(Math.abs(g-secretNum) >= 50) {
      return"Ice Cold....Brrrr.";
    } 
    else if(Math.abs(g-secretNum) >=30) {
      return"Cold...";
    } 
    else if (Math.abs(g-secretNum) >=20) {
      return"Warm....";
    } 
    else if (Math.abs(g-secretNum) >= 10) {
      return"HOT!!!";
    } 
    else {
      return"Very HOT!!!!";
    }
  }; 

  //The following two click functions came with the pre-existing files. I did not write these.
  /*--- Display information modal box --*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

}); //end of document ready 






  


