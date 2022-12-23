let navToggleStatus = false;

let menuBtn = document.getElementById('menu');
let getSideBar = document.getElementsByClassName('.nav-sidebar');
let getSidebarUL =document.querySelector ('.nav-sidebar ul')
let getSidebarLinks=document.querySelectorAll ('.nav-sidebar ul li');

console.log(menuBtn);
console.log(getSideBar);

menuBtn.addEventListener ('click', function(){
  console.log('menu is clicked');

  if (navToggleStatus === false) {
    getSidebarUL.style.visibility = 'visible';
    //getSidebarLinks.style.width ='300px';
  
  let arrayLenght = getSidebarLinks.length;
  for (let i=0; i < arrayLenght; i++) {
    getSidebarLinks[i].style.opacity = "0.5";
  }

  navToggleStatus = true;
}
  
  else if (navToggleStatus === true) {
      //getSidebarLinks.style.width ='0px';
  
  let arrayLenght = getSidebarLinks.length;
  for (let i=0; i < arrayLenght; i++) {
    getSidebarLinks[i].style.opacity = "0";
  }
    getSidebarUL.style.visibility = "hidden";
  }
  navToggleStatus = false;
})

onst red-bg = () => {
  document.body.style.backgroundColor = '#f65d5d';
};
red.addEventListener("click", backgroundRood);


const backgroundGroen = () => {
  document.body.style.backgroundColor = '#50a42e';
};
green.addEventListener("click", backgroundGroen);


const backgroundBlauw = () => {
  document.body.style.backgroundColor = '#2195e1';
};
blue.addEventListener("click", backgroundBlauw);

const backgroundPaars = () => {
  document.body.style.backgroundColor = '#905b95';
};
purple.addEventListener("click", backgroundPaars);

const backgroundReset = () => {
  document.body.style.backgroundColor = '#fff';
};
reset.addEventListener("click", backgroundReset);