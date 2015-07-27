// Two methods for timers - setTimeout and SetInterval (single / repeating)

function simpleMessage() {
	alert("This is just an alert box");
}

// settimeout is in milliseconds

var myImage = document.getElementById("mainImage");

var imageArray = ["_images/overlook.jpg", "_images/winery_sign.jpg", "_images/lunch.jpg",
				  "_images/bigSur.jpg", "_images/flag_photo.jpg", "_images/mission_look.jpg"];
var imageIndex = 0;



window.onload = function() {
   setImage();
    

}

 document.onclick = function(){
   if(!getSelection().isCollapsed)
     setTimeout(onSelect, 300);
     //document.getElementById("popImg").style.visibility = "visible";
    
        
 };

 function onSelect()  {
        
      select = document.getSelection(); 
    
    var range = select.getRangeAt(0);
    
    //alert(select.rangeCount);
     
    
    var pElement = select.anchorNode.parentElement;
    var text2 = pElement.innerHTML;
    var insert = "<span id=\"imagePos\"></span>";
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
     
     var elem =  document.getElementById("imagePos");
     elem.parentElement.removeChild(elem);
     
     setTimeout(hideImage, 4000);
   }

function onSelect2()  {
    
     
     select = document.getSelection(); 
    
    var range = select.getRangeAt(0);
    
    //alert(select.rangeCount);
     
    
    var pElement = select.anchorNode.parentElement;
    var text2 = pElement.innerHTML;
    var insert = "<div id=\"imagePos\"></div>";
    text2 = text2.substr(0, range.endOffset) + insert + text2.substr(range.endOffset);

    pElement.innerHTML = text2;
    
   
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
    pop.setAttribute("src" , "pop.jpg");
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
// setInterval is also in milliseconds
//setInterval(changeImage,5000);