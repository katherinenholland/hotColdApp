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


feedback = function(){
   var g = $("#userGuess").val();
   if(g == secretNum) {
   	  return("Correct!!");
    } else if (g % 1 != 0  && g <= 100 && g >= 1) {
      return("Your guess must be a whole number between 1-100!")
    } else if (g >= 50 + secretNum) {
      return("Ice Cold...Brrrrr.")
    } else if (g >= 30 + secretNum) {
      return("Cold...")
    } else if (g >= 20 + secretNum) {
      return("Warm...")
    } else if(g >= 10 + secretNum) {
   	  return("Hot!");  
    } else (g <= 9 + secretNum) 
      return("Very Hot!!");
   
}; //gives user feedback on guess and checks to make sure a whole number 1-100



