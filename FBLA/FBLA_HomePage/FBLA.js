const burgernav = document.getElementById('burgernav');
const navoverlay = document.getElementById('navoverlay');
let menuOpen = false;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var largestRatio = ((6 + (1/4))*115) / ((7 + (5/8))* 115);
var smallestRatio = ((7 + 0)*115) / ((4 + (1/8))* 115);
var curentRatio = windowHeight / windowWidth;
var coffespill1 = document.getElementById("coffeSpill");
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var desub = document.getElementById("deSub");
var coffeOVtext= document.getElementById("coffeOVtext");
var coffeOVtexth2 = document.getElementById("coffeOVtexth2");


var s1button = document.getElementById("coffeCupTop0");
var napkin = document.getElementById("napkinball");
var wordnap = document.getElementById("wordNapkin");
var names = document.getElementById("Name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var terms = document.getElementById("terms");
var termsa = document.getElementById("termsa");
var signBT = document.getElementById("signupbtn");
var check = document.getElementById("checkO");
var navlogin = document.getElementById("navlogin");
var navovogin = document.getElementById("navovlogin");
var largeQuote = document.getElementById("largeQuote");

function checkdivice(){
  var a;
  var answer = document.getElementById("result");
  if(navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
    a = true;
  } else {
    a = false;
  }
  return a;
}



function fitscreen(){
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  largestRatio = ((6 + (1/4))*115) / ((7 + (5/8))* 115);
  smallestRatio = ((7 + 0)*115) / ((4 + (1/8))* 115);
  curentRatio = windowHeight / windowWidth;
  if(curentRatio<largestRatio){
    section1.style.height = "81vw";
    section3.style.height = "80vw";
    desub.style.margin = " calc(55vw - 14vw) 0px 0px 20vw ";
    coffeOVtexth2.style.opacity = "0";
    largeQuote.style.opacity = "1";

  } else if(curentRatio>smallestRatio){
    section1.style.height = "165vw";
    section3.style.height = "165vw";
    desub.style.margin = " calc(120vw - 14vw) 0px 0px 20vw ";
    coffeOVtexth2.style.fontSize = "14vw";
    coffeOVtexth2.style.paddingTop = "calc(((100vh - 41vh - 11.5vw)/ 2) - 65vw)";
    coffeOVtexth2.style.opacity = "1";
    largeQuote.style.opacity = "0";

  }else{
    section1.style.height = "95vh";
    section3.style.height = "95vh";
    desub.style.margin = " calc(80vh - 14vw) 0px 0px 20vw ";
    coffeOVtexth2.style.fontSize = "5vw";
    coffeOVtexth2.style.paddingTop = "calc(((100vh - 40vh - 11.5vw)/ 2) - 10vw)";
    coffeOVtexth2.style.opacity = "1";
    largeQuote.style.opacity = "0";
  }

}

window.addEventListener('resize', fitscreen);
fitscreen();

burgernav.addEventListener('click', () =>{
  if(!menuOpen){
    burgernav.classList.add('open');
    navoverlay.style.width = "100%";
    menuOpen = true;
  } else {
    burgernav.classList.remove('open');
    navoverlay.style.width = "0%";
    menuOpen = false;
  }
});



 function raincoffe(){
  var coffeCup = document.getElementById("teacup");
  var elementTop = coffeCup.getBoundingClientRect().top;
  var coffe = document.getElementById("coffeRain");
  var cof0 = document.getElementById("coffeOverflow0");
  var cof1 = document.getElementById("coffeOverflow1");
  var cof2 = document.getElementById("coffeOverflow2");
  var highlight = document.getElementById("highlight");
  var steam1 = document.getElementById("steam1");
  var steam2 = document.getElementById("steam2");
  var steam3 = document.getElementById("steam3");

          if(elementTop < windowHeight){
                setTimeout(function(){
                  coffe.classList.add("rain");
                }, 1000);
                setTimeout(function(){
                      cof0.classList.add("coffeOverflowAdd0");
                      cof1.classList.add("coffeOverflowAdd");
                setTimeout(function(){
                  steam1.classList.add("steaming");
                }, 1500);
                setTimeout(function(){
                  steam2.classList.add("steaming2");
                }, 500);
                setTimeout(function(){
                  steam3.classList.add("steaming");
                }, 2800);
                }, 2000);
                setTimeout(function(){
                  cof2.classList.add("coffeOverflowAdd2");
                }, 3500);
                setTimeout(function(){
                  highlight.classList.add("highlighting");
                }, 5000);
          }
  }

  
 window.addEventListener("scroll", raincoffe);
raincoffe();

function colorchange(){
  var elementTop3 = section3.getBoundingClientRect().top;
  var burger = document.getElementById("burger");
  var bar = document.getElementById("bar");
  if(elementTop3 < windowHeight + 50){
    bar.style.height = "70px";
  } else{
    bar.style.height = "0px";
  }

}

window.addEventListener("scroll", colorchange);
colorchange();

if(checkdivice() == false){
s1button.addEventListener("mouseenter", function(){
   napkin.classList.add("napkinrollout");
   coffespill1.classList.add("coffeSoakUp");
   setTimeout(function(){
      wordnap.classList.add("wordNapANNA");
      names.classList.add("wordNapANNA");
      email.classList.add("wordNapANNA");
      password.classList.add("wordNapANNA");
      terms.classList.add("wordNapANNA");
      termsa.classList.add("wordNapANNA");
      signBT.classList.add("wordNapANNA");
   }, 2000 );
});
}

if(checkdivice() == true){
   napkin.classList.add("napkinrollout");
   coffespill1.classList.add("coffeSoakUp");
   setTimeout(function(){
      wordnap.classList.add("wordNapANNA");
      names.classList.add("wordNapANNA");
      email.classList.add("wordNapANNA");
      password.classList.add("wordNapANNA");
      terms.classList.add("wordNapANNA");
      termsa.classList.add("wordNapANNA");
      signBT.classList.add("wordNapANNA");
   }, 2000 );
   s1button.style.color = "transparent";
   s1button.style.cursor = "default";
}


signBT.addEventListener("click", function(){
  var text1 = names.value;
  var text2 = email.value;
  var text3 = password.value;
  if(text1 != "" && text2 != "" && text3 != ""){
  wordnap.classList.add("removepapertext");
  names.classList.add("removepapertext");
  email.classList.add("removepapertext");
  password.classList.add("removepapertext");
  terms.classList.add("removepapertext");
  termsa.classList.add("removepapertext");
  signBT.classList.add("removepapertext");
  s1button.style.color = "transparent";
  s1button.style.cursor = "default";
  navlogin.style.color = "transparent";
  navovlogin.style.color = "transparent";
  navlogin.style.cursor = "default";
  navovlogin.style.cursor = "default";
  setTimeout(function(){
    check.classList.add("wordNapANNA");
  }, 2000);
}else{
  signBT.style.backgroundColor = "#eb2a15";
  signBT.style.color = "#ffffff";
  setTimeout(function(){
    signBT.style.backgroundColor = "#3bd46e";
    signBT.style.color = "#ffffff";
  }, 400);
}
});


function Slide(){
  var container = document.createDocumentFragment();
  var container1 = document.createDocumentFragment();
  var howmany = 50;

  for(var i=0; i< howmany;i++){
    var mar = document.createElement('div');
    var mar1 = document.createElement('div');
    var m1 = document.createElement("br");
        for(var k=0; k<5; k++){
          mar.textContent = mar.textContent + "Coffee_Is_Good_Coffee_Is_Great_";
          mar1.textContent = mar.textContent + "Coffee_Is_Good_Coffee_Is_Great_";

          mar1.style.fontSize = "20px";
          mar.style.fontSize = "20px";
        }
    if(i%2 == 0){
        mar.classList.add("left");
        mar1.classList.add("left");
        mar1.style.float= "left";
        mar.style.float= "left";
        mar.style.width= "50%";
        mar1.style.width= "50%";
        mar.style.color = "#2C061F";
        mar1.style.color = "#2C061F";
      }else{
        mar.classList.add("right");
        mar1.classList.add("right");
        mar1.style.float= "left";
        mar.style.float= "left";
        mar.style.width= "50%";
        mar1.style.width= "50%";
        mar.style.color = "#2C061F";
        mar1.style.color = "#2C061F";
      }
      
      mar1.style.fontFamily = "Vejlikan";
      mar.style.fontFamily = "Vejlikan";
      mar1.style.opacity = ".5";
      mar.style.opacity = ".5";
      
    container.appendChild(mar);
    container.appendChild(mar1);
  }
  
  document.getElementById("sliders").appendChild(container);
}

Slide();



//const circle = document.querySelector('.circle');

document.addEventListener('mousemove', e =>{
     circle.setAttribute("style", "top:"+(e.pageY-scrollY)+"px; left: "+(e.pageX)+"px;");
});