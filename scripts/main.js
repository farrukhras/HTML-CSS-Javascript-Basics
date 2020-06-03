// IMAGE CHANGER
/*
Store a reference to the <img> element in the myImage variable. 
Next, make this variable's onclick event handler property equal to a function with no name (an "anonymous" function). 
So every time this element is clicked:
  1. The code retrieves the value of the image's src attribute.
  2. The code uses a conditional to check if the src value is equal to the path of the original image:
    i) If it is, the code changes the src value to the path of the second image, forcing the other image to be loaded 
    inside the <img> element.
    ii) If it isn't (meaning it must already have changed), the src value swaps back to the original image path, to the original state.
*/ 
let myImg = document.querySelector('img');

myImg.onclick = function() {
  let mySrc = myImg.getAttribute('src');
  if (mySrc === 'images/test-image.jpg') {
    myImg.setAttribute('src', 'images/test-image2.jpg');
  } else {
    myImg.setAttribute('src', 'images/test-image.jpg');
  }
}

// PERSONALIZED WELCOME MESSAGE

// Take references to a new button and the heading, storing each inside variables:
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*
The setUserName() function contains a prompt() function, which displays a dialog box. 
This prompt() function asks the user to enter data, and store it in a variable after the user clicks OK. 
In this case, the user is being asked to enter a name. 
Next, the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later. 
Here localStorage's setItem() function is used to create and store a data item called 'name', setting its value to the myName variable 
which contains the user's entry for the name. Finally, the textContent of the heading is set to a string, plus the user's newly 
stored name.

The if-else statements do the following: If myName has no value, run setUserName() again from the start. If it does have a value 
(if the above statement is not true), then store the value in localStorage and set it as the heading's text.
*/
function setUserName() {
  let myName = prompt('Please enter your name: ');

  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML  = 'Mozilla is cool, ' + myName;
  }
}

/*
This first line of this block uses the negation operator (logical NOT, represented by the !) to check whether the name data exists. 
If not, the setUserName() function runs to create it. If it exists (that is, the user set a user name during a previous visit),
we retrieve the stored name using getItem() and set the textContent of the heading to a string, plus the user's name, 
as we did inside setUserName().
*/
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

// When the button is clicked, setUserName() runs. This allows the user to enter a different name by pressing the button
myButton.onclick = function() {
  setUserName();
}