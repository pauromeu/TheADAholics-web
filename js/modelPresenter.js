const actors_weight = 0.5535388588905334;
const directors_weight = 0.7363501191139221;
const offset = -2.4316546535017274;

// Define a function to create the dropdown menu options
function createOptions(menuId, dictionaryUrl) {
    fetch(dictionaryUrl)
        .then(response => response.json())
        .then(data => {
            // Loop through the dictionary and create an option element for each entry
            for (var key in data) {
                var option = document.createElement("option");
                option.value = key;
                option.text = key;
                document.getElementById(menuId).add(option);
            }

            document.getElementById(menuId).dictionary = data
        });
}

// Create the options for each dropdown menu
createOptions("menu-actors", "./data/actors_score_1000.json");
createOptions("menu-directors", "./data/directors_score_1000.json");
createOptions("menu-genres", "./data/genres_weights.json");
createOptions("menu-countries", "./data/countries_weights.json");
createOptions("menu-languages", "./data/languages_weights.json");

// Filter the options in the dropdown menu as the user types
function filterOptions(menuId, input) {
    // Convert the input to lowercase
    input = input.toLowerCase();

    // Loop through the options and hide those that do not match the input
    var options = document.getElementById(menuId).options;
    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        if (option.text.toLowerCase().indexOf(input) > -1) {
            option.style.display = "";
        } else {
            option.style.display = "none";
        }
    }
}

async function getTopPercentage(number) {
    // read the JSON file and parse it into an object
    const dictionary = await fetch('./data/scores.json')
        .then(response => response.json())
        .then(data => data);

    // sort the keys in ascending order
    const keys = Object.keys(dictionary).sort((a, b) => dictionary[a] - dictionary[b]);
    // find th e key with a value equal to or greater than the given number
    let topPercentage = null;
    for (const key of keys) {
        if (dictionary[key] >= number) {
            topPercentage = key;
            break;
        }
    }

    // return the top percentage
    return topPercentage;
}

// Update the sum when the selected option is changed
async function showScore() {
    var sum = 0;
    var show = true;

    // Get the dictionaries for each dropdown menu
    var data1 = document.getElementById("menu-actors").dictionary;
    var data2 = document.getElementById("menu-directors").dictionary;
    var data3 = document.getElementById("menu-genres").dictionary;
    var data4 = document.getElementById("menu-countries").dictionary;
    var data5 = document.getElementById("menu-languages").dictionary;

    // Add the values of each dropdown menu
    if (document.getElementById("menu-actors").value !== "") {
        sum += data1[document.getElementById("menu-actors").value] * actors_weight;
    } else { show = false }
    if (document.getElementById("menu-directors").value !== "") {
        sum += data2[document.getElementById("menu-directors").value] * directors_weight;
    } else { show = false }
    if (document.getElementById("menu-genres").value !== "") {
        sum += data3[document.getElementById("menu-genres").value];
    } else { show = false }
    if (document.getElementById("menu-countries").value !== "") {
        sum += data4[document.getElementById("menu-countries").value];
    } else { show = false }
    if (document.getElementById("menu-languages").value !== "") {
        sum += data5[document.getElementById("menu-languages").value];
    } else { show = false }

    // Display the sum

    if (show) {
        //document.getElementById("sum").innerHTML = "Sum: " + (sum + offset);
        console.log(sum)
        score = Math.max(Math.min(sum + offset, 10.000), 0.000);
        const topPercentage = await getTopPercentage(score);
        console.log("TOP: ", topPercentage);
        const integerPart = Math.floor(score);
        const decimalPart = score.toFixed(3).split('.')[1];

        document.querySelector('.integer').textContent = integerPart;
        document.querySelector('.decimal').textContent = decimalPart;
        document.getElementById("top-per").innerHTML = topPercentage;
        if (score == 10.000)
            document.getElementById("sum").innerHTML = "Wow! Your movie is going to be very succesful!";
        else if (score == 0.000)
            document.getElementById("sum").innerHTML = "We are sorry to tell you that your movie is very bad :( \n Why don't you try using a good actress (like Jennifer Aninston) with a good director (like Clint Eastwood)? ";
        else
            document.getElementById("sum").innerHTML = "Keep changing parameters to try to improve your score!";
    } else {
        document.getElementById("sum").innerHTML = "Fill all the options to get your score!!";
    }

}
