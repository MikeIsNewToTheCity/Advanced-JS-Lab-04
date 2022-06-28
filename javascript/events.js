/*
    Name: Mike Villeneuve
    Date: 06/28/2022
*/


// function that initializes and establishes the event listener method for event handling
const init = () => {
    "use strict";
    
    let buttons = document.querySelectorAll(".rating");
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = dotNotationEventHandler;
    }
    
    let buttonEventListener = document.querySelectorAll(".height");
    
    for(let i = 0; i < buttonEventListener.length; i++) {
        buttonEventListener[i].addEventListener("click", w3cEvent)
    }
    
}

// inline event handling
const inlineEvent = control => {
    "use strict";
    console.log(control.value);    
}

// dot notation event handling
const dotNotationEventHandler = event => {
    "use strict";
    console.log(event.currentTarget.value);
}

// event listener event handling
const w3cEvent = event => {
    "use strict";
    console.log(event.target.value);
}

// execute upon loading of the window
window.addEventListener("load", init);