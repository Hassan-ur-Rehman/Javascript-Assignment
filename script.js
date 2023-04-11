//Question 01

function createAdder(num) {
    return function(x) {
      return num + x;
    }
  }
  
  // Example usage:
  const addFive = createAdder(5);
  console.log(addFive(5)); // Output: 15
  console.log(addFive(10)); // Output: 25 

  //Question 02

  const arr = [1, 2, 3, 4, 5];

  function searchArray(arr, value) {
    if (arr.length === 0) {
      return false; // Base case: the array is empty, so the value is not found
    } else if (arr[0] === value) {
      return true; // Base case: the first element of the array is the value
    } else {
      return searchArray(arr.slice(1), value); // Recursive case: search the rest of the array
    }
  }
  
  console.log(searchArray(arr, 3)); // Output: true
  console.log(searchArray(arr, 6)); // Output: false 

  function addParagraph(text) {
    const newPara = document.createElement('p'); // create a new <p> element
    const content = document.createTextNode(text); // create a text node with the provided text
    newPara.appendChild(content); // append the text node to the <p> element
    document.body.appendChild(newPara); // append the <p> element to the end of the <body> element
  }
  addParagraph('This is a new paragraph.'); 

  function addListItem(text) {
    // Get a reference to the unordered list
    var myList = document.getElementById("myList");
  
    // Create a new list item element
    var newItem = document.createElement("li");
  
    // Set the text content of the new list item
    newItem.textContent = text;
  
    // Add the new list item to the end of the unordered list
    myList.appendChild(newItem);
  }
  
  // Call the addListItem function with a string argument
  addListItem("New item");

  function changeBackgroundColor(element, color) {
    // Set the background color of the element
    element.style.backgroundColor = color;
  }
  
  // Get a reference to the HTML element
  var myElement = document.getElementById("myElement");
  
  // Call the changeBackgroundColor function with the element and color arguments
  changeBackgroundColor(myElement, "red"); 

  function saveObjectToLocalStorage(key, object) {
    // Convert the object to a string using JSON.stringify
    var objectString = JSON.stringify(object);
  
    // Save the object string to localStorage using the specified key
    localStorage.setItem(key, objectString);
  }
  var myObject = { name: "Hassan", age: 24 };
saveObjectToLocalStorage("myKey", myObject); 

var myObject = getObjectFromLocalStorage("myKey");

function getObjectFromLocalStorage(key) {
    // Get the object string from localStorage using the specified key
    var objectString = localStorage.getItem(key);
  
    // Convert the object string back to an object using JSON.parse
    var object = JSON.parse(objectString);
  
    // Return the object
    return object;
  }

var myObject = { name: "Hassan", age: 24 };
var retrievedObject = saveObjectPropertiesToLocalStorage(myObject);

function saveObjectPropertiesToLocalStorage(object) {
    // Loop through each property of the object
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        // Save the property value to localStorage using the property name as the key
        localStorage.setItem(key, object[key]);
      }
    }
  
    // Create a new object to hold the retrieved properties
    var retrievedObject = {};
  
    // Loop through each key in localStorage
    for (var i = 0; i < localStorage.length; i++) {
      // Get the key and value from localStorage
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
  
      // Add the key and value to the retrievedObject
      retrievedObject[key] = value;
    }
  
    // Return the retrievedObject
    return retrievedObject;
  }