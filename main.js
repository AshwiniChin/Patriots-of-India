var imageArray = ["Subhash Chandra Bose.jpg",
                    "Bhagat Singh.jpg",
                    "Sardar Vallabhbhai Patel.jpg",
                    "Bal Gangadhar Tilak.jpg"];

var namesArray = ["Subhash Chandra Bose",
    "Bhagat Singh",
    "Sardar Vallabhbhai Patel",
    "Bal Gangadhar Tilak"];

var i = 0;

function changeImage() {
    document.getElementById("album").src = imageArray[i];
    document.getElementById("names").innerHTML = namesArray[i];
    i++;
    if (i == 4) {
        i = 0;
    }
}