// This function called ageInDays reference to the click button
function ageInDays(params) {
    const age = prompt("What year were you born?");
    const birthYear = (2022 - age) * 365;

    // This block of code reference to the out-put i.e your age in days
    const h1 = document.createElement("h2");  //Creates an h1 element inside the div>result tag.
    const answer = document.createTextNode("You are " + birthYear + " days old.");
    h1.setAttribute("id", "age-in-days");
    h1.appendChild(answer);
    document.getElementById("results").appendChild(h1);
};

// This function reference to the reset button
function reset(params) {
    document.getElementById("age-in-days").remove();
};