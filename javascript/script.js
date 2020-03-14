function answers()
{
   var i=0;
   
   rightanswer = document.querySelectorAll("#answer");
   
   while(i<rightanswer.length)
   {
   	 rightanswer[i].style.color="green";  
     i++;
   }
}
