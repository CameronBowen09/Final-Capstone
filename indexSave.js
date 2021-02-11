const formId = "save-later-form"; // ID of the form
const articleId = "article";
const url = location.href; //  href for the page
const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
const articleIdentidier = `${url} ${articleId}`;
const saveButton = document.querySelector("#save"); // select save button
const saveButton2 = document.querySelector("#save");
const saveButton3 = document.querySelector("#save");
const saveButton4 = document.querySelector("#save");
const alertBox = document.querySelector(".alert"); // select alert display div
let form = document.querySelector(`#${formId}`); // select form
let formElements = form.elements; // get the elements in the form
let article = document.getElementById("article"); // select the article the user has entered
let image = document.getElementById("image"); // select the image the user has entered
let reciepts = document.getElementById("reciepts"); // select the reciepts the user has entered

/**
 * This function gets the values in the form
 * and returns them as an object with the
 * [formIdentifier] as the object key
 * @returns {Object}
 */
const getFormData = () => {
    let data = {
        [formIdentifier]: {}
    }; // create an empty object with the formIdentifier as the key and an empty object as its value
    for (const element of formElements) {
        if (element.name.length > 0) {
            data[formIdentifier][element.name] = element.value;
        }
    }
    return data;
};

saveButton.onclick = event => {
    event.preventDefault();
    data = getFormData();
    localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
    const message = "Your User Information Has Been Saved!";
    displayAlert(message);
};

const getArticleDate = () => {
    let data = {
        [articleIdentidier]: {}
    }; // create an empty object with the formIdentifier as the key and an empty object as its value
    for (const element of article) {
        if (element.name.length > 0) {
            data[articleIdentidier][element.name] = element.value;
        }
    }
    return data;
};

saveButton2.onclick = event => {
    event.preventDefault();
    data = articleData();
    localStorage.setItem(articleIdentidier, JSON.stringify(data[articleIdentidier]));
    const message2 = "Your Article Has Been Saved!";
    displayAlert(message2);
};

const getImageDate = () => {

}

saveButton3.onclick = event => {
    event.preventDefault();
    data = imageData();
    localStorage.setItem(image, JSON.stringify(data[image]));
    const message3 = "Your Image Has Been Saved!";
    displayAlert(message3);
};

const getRecieptDate = () => {

}

saveButton4.onclick = event => {
    event.preventDefault();
    data = recieptData();
    localStorage.setItem(reciepts, JSON.stringify(data[reciepts]));
    const message4 = "Your Reciept Has Been Saved!";
    displayAlert(message4);
};

/**
 * This function displays a message
 * on the page for 2 second
 *
 * @param {String} message
 */
const displayAlert = message => {
    alertBox.innerText = message; // add the message into the alert box
    alertBox.style.display = "block"; // make the alert box visible
    setTimeout(function() {
        alertBox.style.display = "none"; // hide the alert box after 2 second
    }, 2000);
};

const displayAlert2 = message2 => {
    alertBox.innerText = message2; // add the message into the alert box
    alertBox.style.display = "block"; // make the alert box visible
    setTimeout(function() {
        alertBox.style.display = "none"; // hide the alert box after 2 second
    }, 2000);
};

const displayAlert3 = message3 => {
    alertBox.innerText = message3; // add the message into the alert box
    alertBox.style.display = "block"; // make the alert box visible
    setTimeout(function() {
        alertBox.style.display = "none"; // hide the alert box after 2 second
    }, 2000);
};

const displayAlert4 = message4 => {
    alertBox.innerText = message4; // add the message into the alert box
    alertBox.style.display = "block"; // make the alert box visible
    setTimeout(function() {
        alertBox.style.display = "none"; // hide the alert box after 2 second
    }, 2000);
};

/**
 * This function populates the form
 * with data from localStorage
 *
 */
const populateForm = () => {
    if (localStorage.key(formIdentifier)) {
        const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
        for (const element of formElements) {
            if (element.name in savedData) {
                element.value = savedData[element.name];
            }
        }
        const message = "Form has been refilled with saved data!";
        displayAlert(message);
    }
};
document.onload = populateForm(); // populate the form when the document is loaded