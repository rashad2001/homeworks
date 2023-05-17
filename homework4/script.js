let myArray = [23, "Rashad", null, "Namiq", 243, "Heydar", true];
let filteredNumbers;

function filterBy(arr, dataType) {
  filteredNumbers = arr.filter(x => typeof x !== dataType);
}

filterBy(myArray, "boolean");
alert(filteredNumbers);