/*answers() function applies light green background to all the elements with id = answer */
function answers()
{
   var i=0;
   /*select all elements with id answer using querySelectorAll method and load into variable called rightanswers */
   rightanswers = document.querySelectorAll("#answer");
  
   /*loop through each right answer and apply light green background*/
   while(i<rightanswers.length)
   {
   	 rightanswers[i].style.background="#ADFF2F";  
     i++;
   }
}

function gotohome()
{
	window.location.href="./home.html";
}
