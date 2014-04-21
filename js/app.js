$(document).ready(function(){
    secretNum;
    alert(secretNum);
    guess();
});	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



var secretNum = 1 + Math.floor(Math.random() * 100); //when new game starts, a secret # from 1-100 is generated


//reset = function(){
	//$(".new").click(function(){
     // location.reload();
	//})
//}//reload entire page to start new game when "new game" clicked

guess = function(){
    	$(".button").click(function(){
    	$("#guessList").append("<li>" + $("#userGuess").val() + "</li>");
    	$("#feedback").write(feedback);
    	$("#count").write(feedback);
    	$('#userGuess').val('');
    })
};

var g = ("#userGuess").val();

feedback = function(){
   if(g == 10 + secretNum){
   	write("Hot!!");
   } else(g !== 10 + secretNum)
   	write("Cold!!");
   
};
	

//var x = $("#userGuess").val();
	//if(x <= 100) {
	//guess();
	//} else
    //alert("Your guess must be a whole number between 1-100!"); //ensure number is between 1-100