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





   $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
             $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
        });