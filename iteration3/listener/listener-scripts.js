
const preferenceSelection = {
    availablePreferences: [
        "Placeholder 1",    
        "Placeholder 2",
        "Placeholder 3",
        "Placeholder 4",
        "Placeholder 5",
    ],
    selectedPreferences: [
        "Placeholder 6",    
        "Placeholder 7",
        "Placeholder 8",
        "Placeholder 9",
        "Placeholder 0",
    ]
};

const selectAvailable = document.getElementById("select-available");
selectAvailable.addEventListener('submit', handleSubmitAvailable);
const selectSelected = document.getElementById("select-selected");

function handleSubmitAvailable(availablePreference) {
    console.log(preferenceSelection);
    const availableItems = document.getElementsByName("available-preference");
    for (let index = 0; index < availableItems.length; index++) {
        let ischecked = availableItems[index].firstElementChild.checked == true;
        if(ischecked){
            let removedChild = selectAvailable.removeChild(availableItems[index]);
            selectSelected.appendChild(removedChild);
            //console.log(removedChild);

            if (removedChild.querySelector("li label") !== null) {
                
            }
            preferenceSelection.selectedPreferences.push(removedChild.querySelector("li label").textContent);
        } else {
            console.log("NO");
        }
        console.log(preferenceSelection);

    }
    console.log(availableItems);
    
}
// const selectSelected = document.querySelector("#select-selected form");

const preferences = {
    availablePreferences: [],
    selectedPreferences: [],
}

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


function handleSubmitSelected (event) {
    
    let selectedPreferences = alertList('available-preference');
    preferences.availablePreferences = selectedPreferences;
    console.log(preferences);
    event.preventDefault();
}

const selectedAvailable = document.getElementById("select-available");
selectedAvailable.addEventListener("submit", handleSubmitSelected)

//const selectAvailable = document.querySelectorAll("#select-available form li");
//selectAvailable.forEach(node => node.addEventListener("submit", handleSubmitSelected));
// const selectAvailable = document.querySelectorAll("#available div #select-available form li");
// addEventListener("submit", handleSubmitSelected);
// for (let index = 0; index < selectAvailable.length; index++) {
//     console.log(selectAvailable[index]);
//     handleSubmitSelected(selectAvailable[index]);
// }