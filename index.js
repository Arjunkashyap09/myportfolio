




//  function to make webpage darkmode enabled
const darkmd = document.querySelector('.name');  //creating a new variable and selecting a class
const about = document.querySelector('.about');  //creating a new variable and selecting a class 
const projects = document.querySelector('.projects');  //creating a new variable and selecting a class 
const project1 = document.querySelector('.project1');  //creating a new variable and selecting a class 
const projectdis1 = document.querySelector('.projectdis1');  //creating a new variable and selecting a class 
const project2 = document.querySelector('.project2');  //creating a new variable and selecting a class 
const projectdis2 = document.querySelector('.projectdis2');
const project3 = document.querySelector('.project3');
const projectdis3 = document.querySelector('.projectdis3');
const socialmedia = document.querySelector('.socialmedia');
const Company = document.querySelector('.Company'); //creating a new variable   
const uflink = document.querySelector('.uflink');
const Products = document.querySelector('.Products');
const contact = document.querySelector('.contact');
const background = document.querySelector('.background');
const dark = document.querySelector('.darkmode');
const lightmode = document.getElementById('darkmodeid');
const navbarme = document.getElementById('navbarme');
const deletecheckbox = document.getElementById('deletecheckbox');
// this is main check box class selecting



dark.addEventListener('change', function () {

   if (dark.checked) {
      document.getElementById("darkmodeid").innerHTML = "Light Mode";
   }
   else {
   
      document.getElementById("darkmodeid").innerHTML = "Dark Mode";
   }
   darkmd.classList.toggle('text-light');
   about.classList.toggle('text-light');
   projects.classList.toggle('text-light');
   project1.classList.toggle('text-light');
   projectdis1.classList.toggle('text-light');
   project2.classList.toggle('text-light');
   projectdis2.classList.toggle('text-light');
   background.classList.toggle('bg-dark');
   project3.classList.toggle('text-light');
   projectdis3.classList.toggle('text-light');
   socialmedia.classList.toggle('text-light');
   Company.classList.toggle('text-light');
   uflink.classList.toggle('text-light');
   contact.classList.toggle('text-light');
   Products.classList.toggle('text-light');
   Products.classList.toggle('text-light');
   // dark.classList.remove('darkmode');
   dark.classList.toggle('lightmode');


   
   
});


// //  This function is use to make page light mode

//  if (document.getElementById('darkmodeid').checked){

//  const light = document.querySelector('.lightmode');

//  light.addEventListener('change',() =>{
//    darkmd.classList.remove('text-light');
//    about.classList.remove('text-light');
//    projects.classList.remove('text-light');
//    project1.classList.remove('text-light');
//    projectdis1.classList.remove('text-light');
//    project2.classList.remove('text-light');
//    projectdis2.classList.remove('text-light');
//    background.classList.remove('bg-dark');
//    project3.classList.remove('text-light');
//    projectdis3.classList.remove('text-light');
//    socialmedia.classList.remove('text-light');
//    Company.classList.remove('text-light');
//    uflink.classList.remove('text-light');
//    contact.classList.remove('text-light');
//    Products.classList.remove('text-light');
//    Products.classList.remove('text-light');
//    dark.classList.remove('lightmode');
//    dark.classList.add('darkmode');
//    document.getElementById("darkmodeid").innerHTML = "Dark Mode";


//  })


// }
























let a = 1;
let b = 2;
let c = 3;
let d = a + b + c;
console.log(d)