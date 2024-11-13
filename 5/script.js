// Function to change image source on hover
function changeImage(element, newSrc) {
    element.src = newSrc;
}

// Timer-based image rotation for onLoad event
let images = [
    "D:/web/5/bus.gif", 
    "D:/web/5/city.gif", 
    "D:/web/5/edu.gif"
];
let currentIndex = 0;

function startImageRotation() {
    setInterval(() => {
        // Update the image
        const rotatingImage = document.getElementById("selectedImage");
        rotatingImage.src = images[currentIndex];

        // Increment the index and reset if at the end
        currentIndex = (currentIndex + 1) % images.length;
    }, 2000); // Change image every 2 seconds
}

// Function to change image based on dropdown selection
function changeSelectedImage() {
    const selector = document.getElementById('imageSelector');
    const selectedValue = selector.value;
    document.getElementById('selectedImage').src = selectedValue;
}
