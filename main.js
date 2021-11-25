var imageArray = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTfno0bOgE6OX7H77KCYEITVReA6CGLWq8-0XipJC0jVgR2SRucPZWMB5rrBMCbb3d6Y&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmFX7lVMEJ2e66bbeQdQ3nfkDDn3KfvGNlEe10Pp8M9ovMKVVetAfzHdwkCGcWxf2M08&usqp=CAU",
    "https://i.pinimg.com/originals/8b/cd/51/8bcd511d8fcef6856ac2946c7e3f00ec.jpg",
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/08/01/916723-tilak-1-1024x574.jpg"
];

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