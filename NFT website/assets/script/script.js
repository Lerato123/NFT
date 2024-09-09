// Get the modal
var modal = document.getElementById("imageModal");

// Get the modal image and caption text
var modalImg = document.getElementById("fullImage");
var captionText = document.getElementById("caption");

// Get all images and loop through them to add the click event
var images = document.querySelectorAll('.grid-layout img');
images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside the image
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
