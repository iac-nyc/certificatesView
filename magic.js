 function chowdhuryMagic(){
    if(document.getElementById("Zenith"))
        {
            var Iftekhar = document.getElementById("Zenith") ;
            Iftekhar.style.color= (Iftekhar.style.color=='blueviolet'?'white':'blueviolet');
            setTimeout('chowdhuryMagic()', 900);
        }
    }
  