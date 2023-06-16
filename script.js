// scroll smooth
window.addEventListener('load', scrollSmoth);
   
function scrollSmoth(){
    let nevMenuAnchorTags = document.querySelectorAll('.nav-menu a');
    let interval;

    for(let i=0; i < nevMenuAnchorTags.length; i++){
        nevMenuAnchorTags[i].addEventListener('click', function(e){
            e.preventDefault();

            let targetSectionID = this.textContent.trim().toLowerCase();
            let targetSection = document.getElementById(targetSectionID);

            // interval = setInterval(scrollVertically, 20, targetSectio)
    
            interval = setInterval(() => {
                scrollVertically(targetSection);    
            }, 20); 
        });
    }

    function scrollVertically(targetSection){
        let targetSectionCoordinates = targetSection.getBoundingClientReact();
    
        if(targetSectionCoordinates.top <= 0){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
    }
}

