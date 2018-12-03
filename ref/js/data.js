'use strict';

// 1. #dates and #issues need to have actual children
// 2. Run $().timelinr() function to set up the timeline

/*var x = window.matchMedia("(max-width: 700px)")
changeLayout(x) // Call listener function at run time
x.addListener(createTimeline) // Attach listener function on state changes

let layout = 'horizontal';
function changeLayout(x) {
    if (x.matches) { // If media query matches
        state = 'horizontal';
    } else {
        state = 'vertical';    
    }
}*/

function createTimeline() {
    $().timelinr({
        orientation: 'horizontal',
        // value: horizontal | vertical, default to horizontal
        containerDiv: '#timeline',
        // value: any HTML tag or #id, default to #timeline
        datesDiv: '#dates',
        // value: any HTML tag or #id, default to #dates
        datesSelectedClass: 'selected',
        // value: any class, default to selected
        datesSpeed: 'normal',
        // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal
        issuesDiv : '#issues',
        // value: any HTML tag or #id, default to #issues
        issuesSelectedClass: 'selected',
        // value: any class, default to selected
        issuesSpeed: 'fast',
        // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
        issuesTransparency: 0.2,
        // value: integer between 0 and 1 (recommended), default to 0.2
        issuesTransparencySpeed: 500,
        // value: integer between 100 and 1000 (recommended), default to 500 (normal)
        prevButton: '#prev',
        // value: any HTML tag or #id, default to #prev
        nextButton: '#next',
        // value: any HTML tag or #id, default to #next
        arrowKeys: 'false',
        // value: true/false, default to false
        startAt: 1,
        // value: integer, default to 1 (first)
        autoPlay: 'false',
        // value: true | false, default to false
        autoPlayDirection: 'forward',
        // value: forward | backward, default to forward
        autoPlayPause: 2000
        // value: integer (1000 = 1 seg), default to 2000 (2segs)< });
     });
}

Papa.parse("../data/SeptemberOctoberGlobalEvents.csv", {
    download: true,
    header: true,
    complete: processData
})

const state = {
    month: "January"
};

function processData(results) {
    console.log(results.data[0].EventMonth);
    results.data.splice(results.data.length - 1, 1)
    console.log(results);


    document.querySelectorAll('td').forEach(child => 
        child.addEventListener('click', (event) => {
            console.log(event.target);
            let current = event.target
            let updated = filterData(current, results.data);
            console.log(updated);

            $("#dates").empty();
            $("#issues").empty();

            updated.forEach(event => {
                let date = new Date(event.EventDate);
                console.log(date)
                let newDate = $(`<li><a class="date" href="#"> ${date.getDate()} </a></li>`);
                let newInfo = $(`<li id="${event.EventDate}">
                    <img class="eventImg" src=${event.EventImage} alt="Event Image">
                        <p class="title"> ${event.EventName} </p>
                        <p class="desc"> ${event.EventDescription} </p>
                        <p class="country"> ${event.EventLocation} </p>
                        <p class="caption"> ${event.ImageAttribution} </p>
                    </li>`);
                $("#dates").append(newDate);
                $("#issues").append(newInfo);
            });

            createTimeline();
        })
    )
}

function filterData(input, currentEvents) {
    let newEvents = currentEvents.filter(event => {
        return input.innerText.trim() == event.EventMonth.toLowerCase();
    });
    return newEvents;
}   


    