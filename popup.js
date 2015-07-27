



//alert("typeof showTranslate");
var showTranslate;
var translateButton;

 

window.onload = function() {
    
    var form = document.getElementById("form1");
    form.style.display = "none";
    
     showTranslate = document.getElementById("showTranslate");
     translateButton = document.getElementById("translateButton");
    showTranslate.addEventListener("click", clickShow);
    translateButton.addEventListener("click", clickTranslate)
   

}

function clickShow() {
    //alert("fanel");
    
   var form = document.getElementById("form1");
    form.style.display = "block";
    
    //var showTranslate = document.getElementById("showTranslate");
   // showTranslate.style.display = "none";
    this.style.display = "none";
    
    
}

  function clickTranslate() {
    
   var input = document.getElementById("inputText");
   if(input.value != "")
        alert(input.value);
    else{
     input.setAttribute("placeholder", "type something"); 
    }
   }
  
   

 
    
    