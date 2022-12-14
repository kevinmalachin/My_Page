$(document).ready(function(){
    $("#menuButton").click(function(){
      $("#menu").slideToggle();
    }); 
  });

var currentImg    = 0;                                   // keep track of current visible image index 
var imgCollection = document.getElementsByClassName("slide-img"); // get all images

// transform html collection to array
var imgList = [];
Array.prototype.forEach.call(imgCollection, img => imgList.push(img) );

// this function set the next image z-index to 20 and resets the z-index of the other images
function bumpNextImage(){

    // set image index to show
    if (currentImg < imgList.length-1){
        currentImg++;
    } else {
        currentImg = 0;
    }

    console.log("showing image:", currentImg, "of", imgList.length-1);
    
    // cycle thorugh image list
    imgList.forEach( (img, idx) => {
        // if is a match
        if(idx == currentImg){
            img.style.zIndex = "20";
            console.log("img ", idx, "set to 20");
        } else {
            img.style.zIndex = "10";
            console.log("img ", idx, "set to 10");
        }
    });
}

myInterval = setInterval(bumpNextImage, 5000);

