// start or controller function
// get values from the page
function getValues() {
    // get values from the page by id
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    
    // input validation
    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    }
    else
        alert("You must enter integers");
}

// logic function
// generate numbers from startValue to endValue
function generateNumbers(startValue, endValue) {
    let numbers = [];
    for (let i = startValue; i <= endValue; i++){
        numbers.push(i);
    }

    return numbers;
}

// display or view function
// display numbers and mark even numbers in bold
function displayNumbers(numbers) {
    let templateRows = "";

    for (let i = 0; i < numbers.length; i++) {
        let className = 'even';
        let number = numbers[i];

        if (number % 2 == 0)
            className = 'even';
        else
            className = 'odd';

        // this line doesn't render correctly with Prism, see the source
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}