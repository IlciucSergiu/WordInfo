
var resourcesString = "chrome-extension://pfndfhoefngogglandagkdjllicpmkjb";
var loaded = 0;
window.onload = function () {
    console.log("content este activ window");
    loaded = 1;
    setPopup();
    setStyle();

};

  document.onmousedown = function() {
      if(loaded == 0)
      {
          setPopup();
          setStyle();
          loaded = 1;
      }
   Selection = null;  
      console.log("am deselectat nou");
  }
 document.onclick = function(){
   if(!getSelection().isCollapsed)
   {
   var e = event;
       //alert("a");
       //alert(e.clientX);
       onSelect(e.clientX, e.clientY);
   }
           
 };

 function onSelect(x,y)  {
        
      select = document.getSelection(); 
    // select = window.getSelection();
    var range = select.getRangeAt(0);
    var selectedText = select.toString();
     
     var diffx;
     var diffy;
     
    if(select.anchorOffset > select.focusOffset){
     diffx = -20;
     diffy = -25;
    }
    else{
        diffx = -20;
        diffy = 5;
    }

   
     console.log(x +"  "+ y);
     console.log( "fanel");
     console.log( $(window).scrollTop());
     
    
    var pop = document.getElementById("miniPopup");
     //console.log(pop.getAttribute("position"));
    
    pop.style.left = x + diffx + "px";
    pop.style.top = y + diffy + $(window).scrollTop() + "px";
    pop.style.position = "sticky";
    pop.style.visibility = "visible";
         
     setTimeout(hidePopup, 4000);
}







function setStyle(){
 var style = document.createElement("link");
    
    style.setAttribute("id", "cssLink");
    style.setAttribute("href" , resourcesString +"/css/main.css");
    style.setAttribute("rel" , "stylesheet");
    document.body.appendChild(style);
}

function setPopup(){
    console.log("am ajuns la popup");
    //console.log(chrome.extension.geURL("css/main.css"));
    //creem popup
 var popup = document.createElement("div");
    popup.setAttribute("id" , "miniPopup");

    //setam butoanele si atributele
 var button1 = document.createElement("button");
    button1.setAttribute("type" , "button");
    button1.setAttribute("id", "miniButton1");
    popup.appendChild(button1);
    
 var button2 = document.createElement("button");
    button2.setAttribute("type" , "button");
    button2.setAttribute("id", "miniButton2");
    //le atasam documentului
    
    popup.appendChild(button2);
    
    document.body.appendChild(popup);
    
}


function hidePopup() {
    
    var pop = document.getElementById("miniPopup");
    pop.style.position = "absolute";
    pop.style.left = 0 + "px";
    pop.style.top = 0 + "px";
    
    pop.style.visibility = "hidden";
 
 }
