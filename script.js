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


// -----------------------------------------------------------
// -----------skill bar auto fill------------

console.log("auto fill");
//use for combined container filling.....

    // let skillsContainer = document.getElementById('skills-container');

    // let animationDone = false;

    // function initialiseBars(){
    //     for(let bar of progressBars){
    //         bar.style.width = 0 + '%';
    //     }
    // }
    // initialiseBars();

    // function fillBars(){
    //     for(let bar of progressBars){
    //         let targetWidth = bar.getAttribute('data-bar-width');
    //         let currentWidth = 0;
    //         let interval = setInterval(function(){
    //             if(currentWidth > targetWidth){
    //                 clearInterval(interval);
    //                 return;
    //             }
    //             currentWidth++;
    //             bar.style.width = currentWidth + '%';
    //         },10);
    //     }
    // }

                
    // function checkScroll(){
    //     // checking skill section container visible or not
    //     let coordinates = skillsContainer.getBoundingClientRect();

    //     // Que: when a perticular bar visible then fill that bar....
                    
    //     // Hint: coordinates.top < window.innerHeight 
    //     if(!animationDone && coordinates.top < window.innerHeight){
    //         animationDone = true;
    //         console.log("Skills Section Visible");
    //         fillBars();
    //     }
    //     else if(coordinates.top > window.innerHeight){
    //         animationDone = false;
    //         initialiseBars();
    //     }
    // }

    window.addEventListener('load', autoSkillBar);

    function autoSkillBar(){
        let progressBars = document.querySelectorAll('.skill-progress > div');
                
        window.addEventListener('scroll', checkScroll);
// for indivisual bars
            function initialiseBar(bar) {
                bar.setAttribute("data-visited", false);
                bar.style.width = 0 + '%';
            }

            for (let bar of progressBars) {
                initialiseBar(bar);
            }

            function fillBar(bar) {

                let currentWidth = 0;
                let targetWidth = bar.getAttribute("data-bar-width");
                let interval = setInterval(function () {
                    if (currentWidth >= targetWidth) {
                        clearInterval(interval);
                        return;
                    }
                    currentWidth++;
                    bar.style.width = currentWidth + '%';
                }, 5);

            }

            function checkScroll(){
                // checking skill section container visible or not
                for(let bar of progressBars){
                    let barCoordinates = bar.getBoundingClientRect();

                    if((bar.getAttribute("data-visited") == "false") && (barCoordinates.top <= (window.innerHeight - barCoordinates.height))){
                        bar.setAttribute("data-visited", true);
                        fillBar(bar);
                    }
                    else if(barCoordinates.top > window.innerHeight){
                        bar.setAttribute("data-visited",false);
                        initialiseBar(bar);
                    }
                }
            }
    }
    


