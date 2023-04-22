const nav = document.querySelector('.header-div');
const header = document.querySelector('header');
const navLi = document.querySelector('.nav-li');



const navObserverCallback = (watchEntries, navObserver) => {
  if(!watchEntries[0].isIntersecting) {
    nav.classList.add('active');

  } else {
    nav.classList.remove('active');
    
  }
}

const navObserverOptions = {
  rootMargin: '500px',
  threshold: 0.5
}

const navObserver = new IntersectionObserver(navObserverCallback, navObserverOptions);

navObserver.observe(header);



const secondPart = document.querySelectorAll('.second-part');


const secondPartObserverCallback = (secondPartEntries, secondPartObserver) => {
  secondPartEntries.forEach(secondPartEntries => {
    if(secondPartEntries.isIntersecting) {
      secondPartEntries.target.classList.add('fade');
      secondPartObserver.unobserve(secondPartEntries.target);
    }w
  })
}

const secondPartObserverOptions = {
  rootMargin: '400px',
  threshold: .4
}


const secondPartObserver = new IntersectionObserver(secondPartObserverCallback, secondPartObserverOptions);


secondPart.forEach(secondPart => {
  secondPartObserver.observe(secondPart);
})


const signUpBox = document.querySelector('.sign-up');
function gotoSignUpBox(){
  signUpBox.scrollIntoView({ behavior: "smooth", block: "start" });
}

