

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

    return selectedValue;
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

    return selectedValues; 
};


function validSelections(selections) {
    let validPlaylist = selections.playlist !== "";
    let validEvents = selections.events.length !== 0;
    let validDJ = selections.dj !== "";
    let validTimeslot = selections.timeslot !== "";

    return validPlaylist && validEvents && validDJ && validTimeslot;
};


function submitPlaylist(event) {
    let playlist = alertValue('playlist');
    selections.playlist = playlist;
    console.log(selections);
    event.preventDefault();

    if (validSelections(selections)) {
        submitSelections();                
    }
}


function submitEvents(event) {
    let events = alertList('event');
    selections.events = events;
    console.log(selections);
    event.preventDefault();

    if (validSelections(selections)) {
        submitSelections();                
    }
}


function submitDJ(event) {
    let dj = alertValue('DJ');
    selections.dj = dj;
    console.log(selections);
    event.preventDefault();

    if (validSelections(selections)) {
        submitSelections();                
    }

}


function submitTimeslot(event) {
    let timeslot = alertValue('timeslot');
    selections.timeslot = timeslot;
    console.log(selections);
    event.preventDefault();

    if (validSelections(selections)) {
        submitSelections();                
    }
}


function submitSelections() {
    alert(`All choices made! Submitting selections`);
    // send selections to DB
};



const playlistForm = document.getElementById("playlist-form");
const eventsForm = document.getElementById("events-form");
const djForm = document.getElementById("dj-form");
const timeslotForm = document.getElementById("timeslot-form");

const selections = {
    playlist: '',
    events: [],
    dj: '',
    timeslot: '',
};

playlistForm.addEventListener("submit", submitPlaylist);
eventsForm.addEventListener("submit", submitEvents);
djForm.addEventListener("submit", submitDJ);
timeslotForm.addEventListener("submit", submitTimeslot);