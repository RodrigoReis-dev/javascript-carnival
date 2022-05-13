  //! -    -   -   -   -  //
 //* JAVASCRIPT CARNIVAL //
//! -    -   -   -   -  //

console.log("Inflate The Unicorn!")

//?/ find the three placeholder `<img>` tags and replace their `src=` elements to the `unicorn-0.png` image. Check that this has updated by reloading your browser.

let img1 = document.querySelector("#img1");
img1.setAttribute('src', './images/unicorn-0.png');

let img2 = document.querySelector("#img2");
img2.setAttribute('src', './images/unicorn-0.png');

let img3 = document.querySelector("#img3");
img3.setAttribute('src', './images/unicorn-0.png');



//?/ Declaration of Variables and create array of images.

let currentImgIndex = 1;

let imgSrcArray = [
  "./images/unicorn-0.png",
  "./images/unicorn-1.png",
  "./images/unicorn-2.png",
  "./images/unicorn-3.png",
];


//?/ Using the "onclick" method to call it, you will need to write a function that gets called every time you click on one of the unicorns.
//?/ Create an alert each image when ballon is full says "'Unicorn Number `X` says thank you!'"

//*Function to swapImg1
function swapImg1() {
  if(currentImgIndex === imgSrcArray.length) {
    currentImgIndex = 0;
  }   if (currentImgIndex === 3){
        alert('Unicorn Number `1` says thank you!')
}

  document.getElementById("img1").src= imgSrcArray[currentImgIndex];
    currentImgIndex++;
}


//*Function to swapImg2
function swapImg2() {
  if(currentImgIndex === imgSrcArray.length) {
    currentImgIndex = 0;
  }   if (currentImgIndex === 3){
        alert('Unicorn Number `2` says thank you!')
}

  document.getElementById("img2").src= imgSrcArray[currentImgIndex];
    currentImgIndex++;
}


//*Function to swapImg3
function swapImg3() {
  if(currentImgIndex === imgSrcArray.length) {
    currentImgIndex = 0;
  }   if (currentImgIndex === 3){
        alert('Unicorn Number `3` says thank you!')
}

  document.getElementById("img3").src= imgSrcArray[currentImgIndex];
    currentImgIndex++;
}