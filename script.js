const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

function addNavMobile() {
  nav.classList.add("active");
}

if (bar) {
  /*if we click on the hamburger-menu the nav-bar items shows up for mobile device*/
  bar.addEventListener("click", addNavMobile);
}
function closeMenuBar() {
  nav.classList.remove(
    "active"
  ); /*to close the menu bar after clicking on close */
}
if (close) {
  /*for closing the bar */
  close.addEventListener("click", closeMenuBar);
}
var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

if (MainImg) {
  smallImg[0].onclick = function ImgReplace1() {
    MainImg.src =
      smallImg[0].src; /*if anyone clicks on the smallImg the mainImg will be repalced by this smallimg */
  }; /*If clicking on index image number 0*/
  smallImg[1].onclick = function ImgReplace2() {
    MainImg.src =
      smallImg[1].src; /*if anyone clicks on the smallImg the mainImg will be repalced by this smallimg */
  };
  smallImg[2].onclick = function ImgReplace3() {
    MainImg.src =
      smallImg[2].src; /*if anyone clicks on the smallImg the mainImg will be repalced by this smallimg */
  };
  smallImg[3].onclick = function ImgReplace4() {
    MainImg.src =
      smallImg[3].src; /*if anyone clicks on the smallImg the mainImg will be repalced by this smallimg */
  };
}

// /*Contact Form */
// function goAnotherFile() {
//   window.location.href = "contactSubmitForm.html";
// }
// var newFile = document.getElementById("contact-Submit");
// // Add a click event listener to the button
// newFile.addEventListener("click", goAnotherFile);
// // Call the function to navigate to another page when the button is clicked;
//Redirect Functions------------------------------------------------------------------------------------------------------------------------
function goToShopPage() {
  // Redirect to another HTML file
  window.location.href = "dresses.html";
}
function Redirect() {
  window.location.href = "payement.html";
}

function HomePage() {
  window.location.href = "home.html";
}
function login() {
  Window.location.href = "index.html";
}
function signUp() {
  window.location.href = "signUp.html";
}
function dressSingleProduct() {
  window.location.href = "dressSingleProduct.html";
}
function goAnotherFile() {
  window.location.href = "contactSubmitForm.html";
}
function goToMenPage() {
  window.location.href = "men.html";
}
function goToChildrenPage() {
  window.location.href = "childrenSingleProduct.html";
}
function goToShirstSingleProduct() {
  window.location.href = "womenShirtsSingleProduct.html";
}
function goToSportsSingleProduct() {
  window.location.href = "singleSportaWear.html";
}
var newFile = document.getElementById("contact-Submit");
// Add a click event listener to the button
if (newFile) {
  newFile.addEventListener("click", goAnotherFile);
}
//Contact us js functions------------------------------------------------------------------------------------------------------------------------
const submitFormbtn = document.getElementById("contact-Submit");

function changeBackgroundColor() {
  submitFormbtn.style.backgroundColor = "#A9B388"; // Change to the desired color
}

// Function to revert background color when not hovering
function revertBackgroundColor() {
  submitFormbtn.style.backgroundColor = "#637E76"; // Revert to the original color or use a specific color
}
// Event listeners for hovering
if (submitFormbtn) {
  submitFormbtn.addEventListener("mouseover", changeBackgroundColor);
  submitFormbtn.addEventListener("mouseout", revertBackgroundColor);
}
// Function to change the border radius
function changeBorderRadius() {
  if (submitFormbtn) {
    submitFormbtn.style.borderRadius = "10px"; // Change the radius value to your desired size
  }
}

// Call the function to change the border radius
changeBorderRadius();
//Cart Page js Function------------------------------------------------------------------------------------------------------------------
function showCartAlert() {
  alert(
    "You Have procceded to the Payement Process,Please check your items carefully"
  );
}
//About Us -------------------------------------------------------------------------------------------------------------------
function mouseOverParagraph() {
  window.alert("Thank you for your Interest 💕");
}
//Blog----------------------------------------------------------------------------------------------------------------------
var blogParagraph = document.getElementsByClassName("page-headerParagraph");
function changeParagraphSize(e) {
  e.target.style.fontSize = "20px";
}
function originalSize(e) {
  e.target.style.fontSize = "15px";
}
if (blogParagraph) {
  for (var i = 0; i < blogParagraph.length; i++) {
    blogParagraph[i].addEventListener("mouseover", changeParagraphSize);
    blogParagraph[i].addEventListener("mouseout", originalSize);
  }
}
//SinglePage AddToCart Button-----------------------------------------------------------------------------------------------
var cartBtn = document.getElementsByClassName("normal");
function addItem() {
  if (cartBtn) {
    window.alert("Item is add to the cart Succesfully 🙈");
  }
}
//Login Closeicon-------------------------------------------------------------------------------------------------------
var closeBtn = document.getElementsByClassName("icon-close");
function dontCloseAlert() {
  if (closeBtn) {
    window.alert("Please Ignore this Step 👀");
  }
}
