
//validate forms and function.
function validateForm (id){
    
    //console.log(id);
    let form = document.getElementById(id);
    //console.log(form);
    let formboxed = form.querySelectorAll('input[type="checkbox"]');

    let checked = [];

    //for each
    formboxed.forEach (function (checkbox) {
        //conditional
        if (checkbox.checked) {
            checked.push(checkbox.value);
            //console.log(checked);
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
        //console.log(songs);
        if (id==='songForm')
        alert('Removing: ' + songs);
        else if (id==='songForm2')
        alert('Adding: ' + songs);
    }
    
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
