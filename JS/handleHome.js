function displayMenu() {
    var show = document.getElementById("menuDiv"); 
    if (show.classList.contains("hiddenMenu")){ // If menu is hidden, display it.
        show.classList.replace("hiddenMenu", "displayedMenu");
    }else{                                      // else, hide it
        show.classList.replace("displayedMenu", "hiddenMenu"); 
    }
    event.stopPropagation(); // This avoid bubbling. If the menu is to be displayed, since onClick affects the body too, it will immmediately hide it back. With stopPropagation() we avoid this by handling onclick for the menu icon but stopping the bubbling up in the DOM till it reaches the body onclick event.
}

//The following block of code will consume a weather API, displaying only some of its elements, like city, country, temperature and condition
var finalURL = "https://api.apixu.com/v1/forecast.json?key=a80c870049394166a9d33921181412&q=Montevideo";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var text = JSON.parse(xhttp.responseText); 
        
        var locationString = text.location.name + ", " + text.location.country;
        var temp = text.current.temp_c + "°C, " + text.current.condition.text;
        document.getElementById("weatherConditions").innerHTML = locationString;
        document.getElementById("temp").innerHTML = temp;
    }
};
xhttp.open("GET", finalURL, true);
xhttp.send();

//The following 4 functions handle hiding and displaying of divs to change pages.
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

//Will hide the menu when clicking anywhere
function hide(){
    var show = document.getElementById("menuDiv");
    if (show.classList.contains("displayedMenu")){
        show.classList.replace("displayedMenu", "hiddenMenu"); 
    }
}

//Will save name and or last name added to Contact form if Send button is clicked.
function save_data() {
    var name = document.getElementById("getInfo")[0].value;
    var lastName = document.getElementById("getInfo")[1].value;
    
    localStorage.setItem("name", name);
    localStorage.setItem("lastName", lastName);
}

//Welcome message with name, last name or both if added and Send button clicked.
function welcome(){
    if (localStorage.getItem("name") != "" || localStorage.getItem("lastName") != ""){
        var welcomeMessage = "Welcome back " + localStorage.getItem("name") + " " + localStorage.getItem("lastName");

        alert(welcomeMessage);
    }
}

