function answers()
{
   var i=0;
   
   rightanswer = document.querySelectorAll("#answer");
   
   while(i<rightanswer.length)
   {
   	 rightanswer[i].style.background="#ADFF2F";  
     i++;
   }
}

function gotohome()
{
	window.location.href="./home.html";
}
