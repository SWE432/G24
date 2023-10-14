

// finds selected value from group of radio-inputs
// then displays it through an alert
function alertValue(category) {
    let categoryList = document.getElementsByName(category);
    let selectedValue = null;

    for (let i = 0; i < categoryList.length; i++) {
        let currElement = categoryList[i];
        if (currElement.checked) {
            selectedValue = currElement.value;
            break;
        }
    }

    if (selectedValue !== null) {
        alert(`Selected ${category}: ${selectedValue}`);
    }
    else {
        alert(`No ${category} selected`)
    }
};


// finds selected values from group of check boxes
// then displays them through an alert
function alertList(category) {
    let categoryList = document.getElementsByName(category);
    let selectedValues = [];

    for (let i = 0; i < categoryList.length; i++) {
        let currElement = categoryList[i];
        if (currElement.checked) {
            selectedValues.push(currElement.value);
        }
    }

    if (selectedValues.length > 0) {
        alert(`Selected ${category}s: ${selectedValues.join(", ")}`);
    } else {
        alert(`No ${category}s selected!`);
    }
};



function submitPlaylist(event) {
    alertValue('playlist');
    event.preventDefault();
}


function submitEvents(event) {
    alertList('event');
    event.preventDefault();
}


function submitDJ(event) {
    alertValue('DJ');
    event.preventDefault();
}


function submitTimeslot(event) {
    alertValue('timeslot');
    event.preventDefault();
}



const playlistForm = document.getElementById("playlist-form");
const eventsForm = document.getElementById("events-form");
const djForm = document.getElementById("dj-form");
const timeslotForm = document.getElementById("timeslot-form");

playlistForm.addEventListener("submit", submitPlaylist);
eventsForm.addEventListener("submit", submitEvents);
djForm.addEventListener("submit", submitDJ);
timeslotForm.addEventListener("submit", submitTimeslot);