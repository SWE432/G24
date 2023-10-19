//djplaylists.html is no longer needed due to js.
//everything is on main.

//prelim setups
//variables
let t1 = document.getElementById('earlymorn');
let text1 = t1.innerHTML;
let t2 = document.getElementById('midmorn');
let text2 = t2.innerHTML;
let t3 = document.getElementById('latemorn');
let text3 = t3.innerHTML;


let playlisthead = document.getElementById('header');

let playlist = document.getElementById('playlists');
let times = document.getElementById('times');

//array and object usage
let currentlist = [
    {
        id:0,
        name: 'Let it go',
        artist: 'Elsa'
    },
    {
        id:1,
        name: 'Random Album Title',
        artist: 'Deadmau5'
    }
];

let history = [
    {
        id:0,
        name: 'Uptown Funk',
        artist: 'Mark Ronson ft Bruno Mars'
    },
    {
        id:1,
        name: 'Shape of You',
        artist: 'Ed Sheeran'
    },
    {
        id:2,
        name: 'Old Town Road',
        artist: 'Lil Nas X'
    },
    {
        id:3,
        name: 'Blinding Lights',
        artist: 'The Weeknd'
    },
    {
        id:4,
        name: 'Bad Guy',
        artist: 'Billie Eilish'
    },
    {
        id:5,
        name: 'Levitating',
        artist: 'Dua Lipa'
    },
    {
        id:6,
        name: 'Montero (Call me by your name)',
        artist: 'Lil Nas X'
    },
    {
        id:7,
        name: 'Good 4 U',
        artist: 'Olivia Rodrigo'
    },
    {
        id:8,
        name: 'Stay',
        artist: 'The Kid LAROI & Justin Bieber'
    },
    {
        id:9,
        name: 'Princess Diana',
        artist: 'Ice Spice'
    },
];

//event types
t1.addEventListener("click", function () {
    //alert(t1.innerHTML);
    //DOM manipulation
    playlisthead.innerHTML = text1;
    console.log(times.style.display);
    changeDisplay();
});

//event types
t2.addEventListener("click", function () {
    //alert(t1.innerHTML);
    //DOM manipulation
    playlisthead.innerHTML = text2;
    console.log(times.style.display);
    changeDisplay();
});

//event types
t3.addEventListener("click", function () {
    //alert(t1.innerHTML);
    playlisthead.innerHTML = text3;
    console.log(times.style.display);
    changeDisplay();
});

document.getElementById('remove').addEventListener('click', function() {
    validateForm('songForm');
});
document.getElementById('add').addEventListener('click', function() {
    validateForm('songForm2');
});

//validate forms and function.
function validateForm (id){

    let form = document.getElementById(id);
    let formboxed = form.querySelectorAll('input[type="checkbox"]');

    let checked = [];

    //for each
    formboxed.forEach (function (checkbox) {
        //conditional
        if (checkbox.checked) {
            checked.push(checkbox.value);
            console.log(checked);
        }
    });

    //conditional
    if (checked.length == 0) {
        let alertMsg = 'Need to choose a song to ';
        if (id === 'songForm')
        alertMsg += 'remove!';
        else if (id === 'songForm2')
        alertMsg += 'add!';

        alert(alertMsg);
    }
    else {
        let songs = '\n';
        checked.forEach(function(song) {
            songs += song + '\n';
            if (id==='songForm') {
                remove(song);
            }
        })
        console.log(songs);
        if (id==='songForm')
        alert('Removing: ' + songs);
        else if (id==='songForm2')
        alert('Adding: ' + songs);
    }
    
}

//change display function
function changeDisplay() {
    playlist.style.display = "block";
    times.style.display = "none";
}

populateLists();
function populateLists() {
    let current = document.getElementById('current');
    let playhistory = document.getElementById('history');

    currentlist.forEach(function (song) {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = song.name + ' - ' + song.artist;
        song.value = checkbox.value;
        listItem.className = 'intext';
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(song.name + ' - ' + song.artist));
        current.appendChild(listItem);
    });

    history.forEach(function (song) {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = song.name + ' - ' + song.artist;
        //adding attribute to object
        song.value = checkbox.value;
        listItem.className = 'intext';
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(song.name + ' - ' + song.artist));
        playhistory.appendChild(listItem);
    });
}

//remove
function remove(value) {
    console.log(value);
    if (value != null && value != '') {
        //make updates to html here... and db in the future
    }
}

//add
function add(value) {
    console.log(value);
    if (value != null && value != '') {
        //make updates...
    }
}
