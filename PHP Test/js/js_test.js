function display_block () {
    document.getElementById("var1_p").style.display=("none");


}

function jspass11() {
    
    var x = "Brandon"
    var y = new String("Brandon")
    document.getElementById("var1").innerHTML = Boolean(x==y);

    }

function varcalc () {
    var x, y, z;
    x = 35;
    y = 2323;
    z = (x * y) / y;
    document.getElementById("var1_p").innerHTML = "O resultado é: " + z + ".";

}

function vararrays() {
        
    var var1arrays = [ "BMW" , "Ferrari", "Lamb", "Ford", "Porshe" ];
    var1arrays[0] = "Girl Baby";

    document.getElementById("var1_p").innerHTML = var1arrays;

}

function var1() {

    var people = [

    "Brandon Specter ",

    " "28 ,

    " Analyse and Developer of System"

    ];

    document.getElementById("var1_p").innerHTML = people;
} 

function loopfor() {
    var fruits, fruits_length, text, x; 
    fruits = ["Banana", "Orange", "Apple", "Mango", "Wine"];
    fruits_length = fruits.length;

        text = "<ul>";

            for (x = 0; x < fruits.length; x++) {
                text += "<li>" + fruits[x] + "</li>";
            }

        text += "</ul>"

    document.getElementById("var1_p"). innerHTML = text;


}

function var1loop22() {
    var form = {
    
    name:"Brandon",
    lastname:"Specter",
    age: 28,
    eyecolor: "blue",
    };

    document.getElementById("var1_p").innerHTML = "My Name is " + form.name + form.lastname + "my older" + form.age + "and mu color of eyes is " + form.eyecolor;
}

function namelist () {

    var namelist1 = {
        name: "Brandon",
        lastname: "Specter",
        older: 28 + "years",
        hair: "Hair Brown",

    };

    document.getElementById("var1_p").innerHTML = "My Name is " + namelist1.name + namelist1.lastname + "and have " + namelist1.older + "and my " + namelist1.hair;

}

function varmath() {

    var var1values = (Math.floor(Math.random() * 10));
    var var2values = var1values * 15;

    document.getElementById("var1_p").innerHTML = "The Values is " + var2values;

}

function varif() {

    var vartalk;
    var vartalkcmd = (new Date().getHours())

    if (new Date().getHours() <= 12) {
        vartalk = "Sir Good Morning";

    }

    else if (new Date().getHours() <= 18) {
        vartalk = "Sir Good Afternoom";
    }

    else {
        vartalk = "Sir Good Evening";
    }

    document.getElementById("var1_p").innerHTML = vartalk;
}

function var1case() {

    var whatday;
    var var2case = (new Date().getDay());

    switch(var2case) {

        case 0: 
            whatday = "Sunday";
        break;

        case 1: 
            whatday = "Monday";
        break;

        case 2: 
            whatday = "Tuesday";
        break;

        case 3: 
            whatday = "Wednesday";
        break;

        case 4: 
            whatday = "Thursday";
        break;

        case 5: 
            whatday = "friday";
        break;

        case 6: 
            whatday = "Saturday";
        break;

        default:
            text = "Looking forward to the weekend";
    }

    document.getElementById("var1_p").innerHTML = whatday;

       
}

function var1for() {

    var vartext = "";
    var x;

        for(x = 0; x <= 300; x++){
            vartext += "The Values " + x + "<br>";    

        }

        document.getElementById("var1_p").innerHTML = vartext;
}

function varforif(){

    var x, vartext;
    vartext = "";
    x;

    for(x = 0; x <= 1000; x++){
        
            if(x >= 500 && x <= 510) {
                vartext += "Values is " + x + "<br>";

            }

    }

    document.getElementById("var1_p").innerHTML = vartext;

}



function xxxxxxxx() {
	var messageerr, x;

	messageerr = document.getElementById("varerr");
	messageerr.innerHTML = "";

	x = document.getElementById("varinput").value;

	try{

		if(x == "") throw "<p class='var2_p'>" + "Empty" + "</p>";
		if(isNaN(x)) throw "<p class='var2_p'>" + "Not a number" + "</p>";
		x = Number(x);
		if(x < 5) throw "<p class='var2_p'>" + "This Number Low at 5" + "</p>";
		if(x > 10) throw "<p class='var2_p'>" + "This Number High at 10" + "</p>";
		if(x > 5 || x < 10) throw "<p class='var2_p'>" + "This Number are between 5 and 10" + "</p>"; 

	}
	catch(err){
		messageerr.innerHTML = err;
	}
}




function xxxxxxxxx() {
var antes = new Date(2010,0,1);
var depois = new Date(2010,0,1,17,10,30);

var agora = new Date();
var elapsed = agora - antes;

depois.getFullYear();
depois.getMonth();
depois.getDay();
depois.getHours();
depois.getUTCHours();

document.getElementById("var1").innerHTML = depois;

}

function jspass1() {
    var x = new String("kjahbdashdbasdlahewwewejsbdakjshdbasdjhabsdajshb")
    var strresult = x + "&nbsp"+ x.length;

document.getElementById("var1").innerHTML = "The Result is " + strresult;


}




