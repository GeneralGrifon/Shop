
function move() 
{

    const wall = document.getElementById('wall1');
    wall.style.transform='rotateX(90deg) translateY(-1000px) translateX(-0px) translateZ(-600px)';
    wall.style.transition="3s"

    const smart2 = document.getElementById('smart2');
    smart2.style.display='none';
    const wallsex = document.getElementById('wallsex');
    wallsex.style.display='block';

}

function sky() {


    const carier = document.getElementById('carier');
        carier.style.display='none';
        const life = document.getElementById('life');
        life.style.display='none';
        const art = document.getElementById('art');
        art.style.display='none';
        const btn2 = document.getElementById('linkoff');
        btn2.style.opacity='1';

    }
function back() {


                const button3 = document.getElementById('button3');
                button3.style.display='none';
 
                const smart2 = document.getElementById('smart2');
                smart2.style.display='block';
                const walleft = document.getElementById('walleft');
                walleft.style.display='none';
                const btn2 = document.getElementById('linkoff');
                btn2.style.opacity='0';
}
{/* <script type="text/javascript">
    function carier() {
            const selector = document.getElementById('select');
            selector.style.transform='translate3d(0px, 0px, 400px)';
            selector.style.transition="1s"

            const carier = document.getElementById('carier');
            carier.style.display='block';
            const life = document.getElementById('life');
            life.style.display='none';
            const art = document.getElementById('art');
            art.style.display='none';
            const textbox2 = document.getElementById('textbox2');
            textbox2.style.display='none';
           

        }
</script>
<script type="text/javascript">
    function life() {

            const life = document.getElementById('life');
            life.style.display='block';
            const carier = document.getElementById('carier');
            carier.style.display='none';
            const art2 = document.getElementById('art');
            art2.style.display='none';
            const textbox2 = document.getElementById('textbox2');
            textbox2.style.display='none'; 
        }
</script>

<script type="text/javascript">
    function art() {

            const art3 = document.getElementById('art');
            art3.style.display='block';
            const life = document.getElementById('life');
            life.style.display='none';
            const carier = document.getElementById('carier');

        const textbox2 = document.getElementById('textbox2');
        textbox2.style.display='none';  
        }
</script> */}


{/* <script type="text/javascript">
function down() {
            const selector = document.getElementById('select');
            selector.style.transform='translate3d(0px, -800px, -300px) rotateX(15deg) translateX(-900px)';
            selector.style.transition="1s"
        }
</script>



<script type="text/javascript">
function carierdown() {

        const carier = document.getElementById('carier');
        carier.style.display='none';

    }
</script>

<script type="text/javascript">
function lifedown() {

        const life = document.getElementById('life');
        life.style.display='none';

    }
</script>

<scrip type="text/javascript">
function artdown() {

        const art = document.getElementById('art');
        art.style.display='none';

    }
</script> */}


function rotate() {
    const smart2 = document.getElementById('smart2');
    smart2.style.display='none';
    const walleft = document.getElementById('walleft');
    walleft.style.display='block';
    
}



function rotate2() {
    const button3 = document.getElementById('button3');
    button3.style.display='block';
    const smart2 = document.getElementById('smart2');
    smart2.style.display='none';
    }

function look() {
        const selector = document.getElementById('select');
        selector.style.transform='rotateY(-185deg) rotateX(35deg) translateZ(600px) translateY(800px) translateX(1000px)';
        selector.style.transition="3s"

        }

function start() {      
        const wall11 = document.getElementById('wall1');
        wall11.style.transform='rotateX(0deg) translateY(0px) translateX(0px) translateZ(-400px)';
        wall11.style.transition="5s"
        const smart2 = document.getElementById('smart2');
    smart2.style.display='block';
    const walleft = document.getElementById('walleft');
    walleft.style.display='none';
    }



function sceneright() 
    {
       var element = document.getElementById("scene");
       element.classList.add("sceneright");
    }
    function sceneleft() 
    {
       var element = document.getElementById("scene");
       element.classList.add("sceneleft");
    }
    function sceneleft2() 
    {
       var element = document.getElementById("scene");
       element.classList.add("sceneleft2");
    }
    function scenemove() 
    {
       var element = document.getElementById("scene");
       element.classList.add("scenemove");
    }
    function scenesky() 
    {
       var element = document.getElementById("scene");
       element.classList.add("scenesky");
    }
    function scenedefault() {
                var element = document.getElementById("scene");
                element.classList.remove("sceneright");
                element.classList.remove("sceneleft");
                element.classList.remove("sceneleft2");
                element.classList.remove("scenemove");
                element.classList.remove("scenesky");
                element.classList.remove("scenemusic");
                var element2 = document.getElementById("smart");
                element2.classList.remove("active5");
                var element3 = document.getElementById("smart2");
                element3.classList.remove("active8");
                var element4 = document.getElementById("wall3");
                element4.classList.remove("dance");
                var element5 = document.getElementById("pictures");
                element5.classList.remove("picturesmusic");
                var element5 = document.getElementById("pictures");
                element5.classList.remove("opa");
                $('.wallsex' ).empty();
                $('.petportal' ).removeClass("ppoff");
                

}


function blurright() 
    {
       var element = document.getElementById("blurscene");
       element.classList.add("sceneright");
    }
    function blurleft() 
    {
       var element = document.getElementById("blurscene");
       element.classList.add("sceneleft");
    }
    function blurleft2() 
    {
       var element = document.getElementById("blur");
       element.classList.add("sceneleft2");
    }
    function blurmove() 
    {
       var element = document.getElementById("blur");
       element.classList.add("scenemove");
    }
    function blursky() 
    {
       var element = document.getElementById("blur");
       element.classList.add("scenesky");
    }
    function blurdefault() {
                var element = document.getElementById("blurscene");
                element.classList.remove("sceneright");
                element.classList.remove("sceneleft");
                element.classList.remove("sceneleft2");
                element.classList.remove("scenemove");
                element.classList.remove("scenesky");
                element.classList.remove("scenemusic");
                var element2 = document.getElementById("smart");
                element2.classList.remove("active5");
                var element3 = document.getElementById("smart2");
                element3.classList.remove("active8");
                var element4 = document.getElementById("wall3");
                element4.classList.remove("dance");
                var element5 = document.getElementById("pictures");
                element5.classList.remove("picturesmusic");
                var element5 = document.getElementById("pictures");
                element5.classList.remove("opa");

}


function backpro() {
                var element2 = document.getElementById("workpg");
                element2.classList.remove("workon");
                element2.classList.add("workoff");
    }

    function texton() {
                var element = document.getElementById("textbox2");
                element.classList.add("textboxon");
    }

    function textoff() {

                var element = document.getElementById("textbox2");
                element.classList.remove("textboxon");
    }

    function modestandart() {
       var element = document.getElementById("modestandart");
                element.classList.add("active4004");
                var element2 = document.getElementById("modedope");
                element2.classList.add("off");
    }

    function modedope() {
       var element2 = document.getElementById("modedope");
                element2.classList.remove("off");
                var element = document.getElementById("modestandart");
                element.classList.remove("active4004");
    }

    function btnoff() {
    var elem = document.getElementById("link");
    elem.classList.add("btnoff");
    var elem2 = document.getElementById("nice");
    elem2.classList.add("btnoff");
    var elem3 = document.getElementById("show");
    elem3.classList.add("btnoff");

    }

    function btnon() {
    var elem = document.getElementById("link");
    elem.classList.remove("btnoff");
    var elem2 = document.getElementById("nice");
    elem2.classList.remove("btnoff");
    var elem3 = document.getElementById("show");
    elem3.classList.remove("btnoff");

}


    const sidepage = document.querySelector('.sidepage');
    const electroshield3 = document.querySelector('.electroshield3');
    const cardtoggle4 = document.querySelector('.iside');
    cardtoggle4.onclick = function(){
        sidepage.classList.toggle('active4');
        electroshield3.classList.toggle('active888');
    }



        function skyblock() {
    sky();
    texton();
    scenesky();

}

        function backblock() {
    back();
    backpro();
    textoff();
    scenedefault();
    menuon();
    btnon();
}

    function startreveal() {
    start();
    scenedefault();
    blurdefault();
    
}

    function rotatereveal() {
    rotate();
    sceneleft();
    blurleft();
    opa();
} 

    function rotate2reveal() {
    rotate2();
    rotatepro();
    sceneright();
    menuoff();
    btnoff(); 
    workon();
    opa();

} 

    function startsexreveal() {
    start();
    scenedefault();
    blurdefault();
} 

    function movereveal() {
    move();
    scenemove();
    opa();
} 

    function carierreveal2() {
    carier();
} 

    function lifereveal2() {
    life();
} 

    function artreveal2() {
    art();
} 

    function tostandart() {
        MOUSEUP();
        modedope();
        setup();
        wall3off();
    }

    function todope() {
        setdown();
        modestandart();
        wall3on();

    }

    function wall3on() {
       document.getElementById("wall3").style.display ='block';
    }
    function wall3off() {
       document.getElementById("wall3").style.display ='none';
    }

    function closeall() {
    lifedown();
    carierdown();
    artdown();
    closemenu();
} 



function blockopen() {
var block = document.getElementById("block");
block.classList.add("active900");
}

function artopen() {
    var art = document.getElementById("art");
art.classList.add("arton");
}

function lifeopen() {
    var life = document.getElementById("life");
life.classList.add("lifeon");
}

function carieropen() {
var carier = document.getElementById("carier");
carier.classList.add("carieron");
}

function blockclose() {
var block = document.getElementById("block");
block.classList.remove("active900");
var art = document.getElementById("art");
art.classList.remove("arton");
var carier = document.getElementById("carier");
carier.classList.remove("carieron");
var life = document.getElementById("life");
life.classList.remove("lifeon");
}

function eventsopen() {
var element = document.getElementById("events");
element.classList.add("active901");
}

function eventsclose() {
var element = document.getElementById("events");
element.classList.remove("active901");
}



var myaudio = $("#myaudio")[0];
$("#x")
   .mouseenter(function() {
      myaudio.play();
   });
   $("#x2")
   .mouseenter(function() {
      myaudio.play();
   });
   $("#x3")
   .mouseenter(function() {
      myaudio.play();
   });
   var myaudio2 = $("#myaudio2")[0];
    $("#gl a")
       .mouseenter(function() {
          myaudio2.play();
       });

    // var x = document.getElementById("myTrack"); 
    
    // function playAudio() { 
    //   x.play(); 
    // } 
    
    // function pauseAudio() { 
    //   x.pause(); 
    // } 

function blocker2() {
   var element = document.getElementById("blocker2");
            element.classList.remove("activeblock3");
   element.classList.add("activeblock2");
}

    function blocker3() {
       var element = document.getElementById("blocker2");
       element.classList.add("activeblock3");
    }

    function opa() 
    {
       var element = document.getElementById("pictures");
       element.classList.add("opa");
    }



function menuoff() 
    {
       var element = document.getElementById("menu");
       element.classList.add("menuon");
    }

    function menuon() 
    {
       var element = document.getElementById("menu");
       element.classList.remove("menuon");
    }


