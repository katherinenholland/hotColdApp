$(document).ready(function() {  
    secretNum;
    //alert(secretNum);
    feedback();
    guess();
    clicks;
    newGame();

}); //end of document ready 

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



var secretNum = 1 + Math.floor(Math.random() * 100); //when new game starts, a secret # from 1-100 is generated




guess = function(){
      var g = $("#userGuess").val();
      var clicks = 0; 
      $(".button").click(function(){ clicks++; 
      $('#count').html(clicks);
        });
      $("form").submit(function(event){
          event.preventDefault();
        });  
    	$(".button").click(function() {
    	 $("#guessList").append("<li>" + ($("#userGuess").val()) + "</li>");
    	   $("#feedback").text(feedback);
    	  $('#userGuess').val(''); 
      
    })
     
};//allows user guess to be logged


feedback = function() {
   var g = $("#userGuess").val();
   if(g == secretNum) {
   	  return("Correct!!");
    } else if (g % 1 != 0  || g <= 100 || g >= 1) {
      return("Your guess must be a whole number between 1-100!");
    } else if(g-secretNum >= 50); {
      return("Ice Cold....Brrrr.");
    } else if (g-secretNum >=30 && g-secretNum < 50) {
      return("Cold...");
    } else if (g-secretNum >=20 && g-secretNum < 30) {
      return("Warm....");
    } else if (g-secretNum >= 10 && g-secretNum < 20) {
      return("HOT!!!");
    } else (g-secretNum < 10)
      return("Very HOT!!!!");

}; //gives user feedback on guess and checks to make sure a whole number 1-100



