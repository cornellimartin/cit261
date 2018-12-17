function displayMenu() { 
    var show = document.getElementById("menuDiv");
    if (show.classList.contains("hiddenMenu")){
        show.classList.replace("hiddenMenu", "displayedMenu");
    }else{
        show.classList.replace("displayedMenu", "hiddenMenu"); 
    }
}

var finalURL = "https://api.apixu.com/v1/forecast.json?key=a80c870049394166a9d33921181412&q=Montevideo";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
        var text = JSON.parse(xhttp.responseText); 
        
        var locationString = text.location.name + ", " + text.location.country;
        var temp = text.current.temp_c + "°C, " + text.current.condition.text;
        document.getElementById("weatherConditions").innerHTML = locationString;
        document.getElementById("temp").innerHTML = temp;
    }
};
xhttp.open("GET", finalURL, true);
xhttp.send();

function goHome(){
    document.getElementById("home").style.display = "block";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function goGallery(){
    document.getElementById("gallery").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function goAbout(){
    document.getElementById("about").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function goContact(){
    document.getElementById("contact").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("about").style.display = "none";
}
