function chowdhuryMagic(){
    if(document.getElementById("Zenith"))
        {
            var Iftekhar = document.getElementById("Zenith") ;
            Iftekhar.style.color= (Iftekhar.style.color=='blueviolet'?'white':'blueviolet');
            setTimeout('chowdhuryMagic()', 900);
        }
    }
  
function chowdhuryJob(){
    if(document.getElementById("job"))
        {
            var x = document.getElementById("job") ;
            x.style.color= (x.style.color=='blueviolet'?'white':'blueviolet');
            setTimeout('chowdhuryJob()', 900);
        }
    }