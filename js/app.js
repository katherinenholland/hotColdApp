$(document).ready(function(){  
    secretNum;
    alert(secretNum);
    guess();
    feedback();
    newGame();
});	//end of document ready


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



var secretNum = 1 + Math.floor(Math.random() * 100); //when new game starts, a secret # from 1-100 is generated


newGame = function(){
	$(".new").click(function(){
     location.reload();
	})
};//reload entire page to start new game when "new game" clicked

guess = function(){
      var g = ("#userGuess").val();
    	$(".button").click(function(){
    	$("#guessList").append("<li>" + g + "</li>");
    	$("#feedback").text(feedback);
    	$("#count").text(feedback);
    	$('#userGuess').val('');
    })
};//allows user guess to be logged

feedback = function(){
   var g = ("#userGuess").val();
   if(g == secretNum) {
   	return("Correct!!"); 
   } else if(g >= 10 + secretNum) {
   	return("Cold!!"); 
   } else (guess <= 10 + secretNum) 
    return("Hot!!");
   
}; //gives user feedback on guess
	

//var x = $("#userGuess").val();
	//if(x <= 100) {
	//guess();
	//} else
    //alert("Your guess must be a whole number between 1-100!"); //ensure number is between 1-100