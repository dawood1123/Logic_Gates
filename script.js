const input1 = document.getElementById("one");
const input2 = document.getElementById("two");
const output = document.getElementById("out");

// Function to update the light color based on input states
function updateLight() {
  if (input1.checked && input2.checked) {
    output.classList.add("red");
  } else {
    output.classList.remove("red");
  }
}

// Add event listeners to checkboxes
input1.addEventListener("change", updateLight);
input2.addEventListener("change", updateLight);
