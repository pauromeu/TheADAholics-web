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
createOptions("menu-actors", "./data/actors.json");
createOptions("menu2", "./data/actors.json");
createOptions("menu3", "./data/actors.json");

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

// Update the sum when the selected option is changed
function showSum() {
    var sum = 0;
    // Get the dictionaries for each dropdown menu
    var data1 = document.getElementById("menu-actors").dictionary;
    var data2 = document.getElementById("menu2").dictionary;
    var data3 = document.getElementById("menu3").dictionary;

    // Add the values of each dropdown menu
    if (document.getElementById("menu-actors").value !== "") {
        sum += data1[document.getElementById("menu-actors").value];
    }
    if (document.getElementById("menu2").value !== "") {
        sum += data2[document.getElementById("menu2").value];
    }
    if (document.getElementById("menu3").value !== "") {
        sum += data3[document.getElementById("menu3").value];
    }

    // Display the sum
    console.log(sum)
    document.getElementById("sum").innerHTML = "Sum: " + sum;
}
