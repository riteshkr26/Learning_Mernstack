let p = document.querySelector('p');
function dbclickHandler() {
  p.style.color = 'red'; // Change the text color of the <p> element to red when it is double-clicked
}

p.addEventListener('dblclick', dbclickHandler); // Add an event listener to the <p> element that listens for a double-click event and calls the dbclickHandler function when the event occurs.

// Remove the event listener after 10 seconds       
setTimeout(() => {
  p.removeEventListener('dblclick', dbclickHandler); // This will remove the event listener for the double-click event on the <p> element, meaning that double-clicking the <p> element will no longer change its text color to red after 10 seconds.
}, 10000); // 10000 milliseconds = 10 seconds   



//input event
let input = document.querySelector('input');
input.addEventListener('input', (dets) => {
  //  console.log(input.value); // This will log the current value of the input field to the console every time the user types or changes the input.
  console.log(dets.data);
  if (dets.data !== null) {
    console.log('User typed: ' + dets.data); // This will log the specific character that the user typed into the input field to the console.
  }
});


//change 
let sel = document.querySelector('select');
sel.addEventListener("change", (dets) => {
  console.log(dets.target.value);
});

let device = document.querySelector("#device");
sel.addEventListener("change", (dets) => {
  device.textContent = `${dets.target.value } Device Selected `;
});


