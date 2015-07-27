

window.onload = function() {
    console.log("content este activ window");
   setImage();
    

}

document.onload = function() {
    alert("content este activ");
   setImage();
    

}
 document.onclick = function(){
   if(!getSelection().isCollapsed)
     setTimeout(onSelect, 300);
     //alert("content este activ222");
     //document.getElementById("popImg").style.visibility = "visible";
    
        
 };

 function onSelect()  {
        
      select = document.getSelection(); 
    // select = window.getSelection();
    var range = select.getRangeAt(0);
    var selectedText = select.toString();
     //alert(selectedText);
    //alert(select.rangeCount);
     
    
    var pElement = select.anchorNode.parentElement;
   // alert(pElement);
     var textOriginal = pElement.innerHTML;
     var text2 = textOriginal;
    var insert = "<span id=\"imagePos\" position = \"static\"></span>";
    text2 = text2.substr(0, range.endOffset) + insert + text2.substr(range.endOffset);

    pElement.innerHTML = text2;
     
     var posEl = document.getElementById("imagePos");
     var posx = getLeftPos(posEl);
     var posy = getTopPos(posEl);
    //alert(posx +"    "+ posy);
      var pop = document.getElementById("popImg");
     pop.style.position = "absolute";
     pop.style.left = posx + "px";
     pop.style.top = posy + "px";
     pop.style.visibility = "visible";
     
     //var elem =  document.getElementById("imagePos");
    // elem.parentElement.removeChild(elem);
     pElement.innerHTML = textOriginal;
     
     setTimeout(hideImage, 4000);
   }



function getTopPos(element){
    for(var topPos = 0; element != null; topPos += element.offsetTop, element = element.offsetParent);
        return topPos;
}
 
function getLeftPos(element){
    for(var leftPos = 0; element != null; leftPos += element.offsetLeft, element = element.offsetParent);
        return leftPos;
}

function setImage() {
  var pop =  document.createElement("img");
    
    //am inlocuit imaginea cu una de pe net
    // pt ca nu are acces la cea de pe pc-ul meu
    pop.setAttribute("src" , "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_Google_2013_Official.svg/220px-Logo_Google_2013_Official.svg.png");
   // pop.setAttribute("src" , "pop.jpg");
    pop.setAttribute("height" , "25");
    pop.setAttribute("width" , "50");
    pop.setAttribute("id" , "popImg");
    pop.style.visibility = "hidden";
   document.body.appendChild(pop);
    

}
 function hideImage() {
    var pop = document.getElementById("popImg");
   pop.style.position = "absolute";
     pop.style.left = 0 + "px";
     pop.style.top = 0 + "px";
    
     pop.style.visibility = "hidden";
 
 }