let getEmail = document.getElementById('input-email');

let button = document.getElementById('notify-btn');

const regex = /^[a-z 0-9]+@[a-z]+\.com$/;

function validate() {
    let result = regex.test(getEmail.value);

    if (getEmail.value === '') {
        alert("Oops! Please add your email address");
    }else if(result === true){
        alert(`Thanks for signing up with us, we've sent you an email, check your inbox!`)
    }else if(result === false){
        alert(`Oops! That doesn't look like an email address`);
    }
}

button.onclick = validate;

let btnOptions = {
    rootMargin: "-50px",
    threshold: 1,
}

let btnObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("btnAnimate", entry.isIntersecting)
    });
}, btnOptions);

btnObserver.observe(button);

// ***********************************************************************************************

let feature1 = document.querySelectorAll('.featureOdd');
let feature2 = document.querySelectorAll('.featureEven');

/*setAnimation = () =>{
    featureElem1.style.animationName = "feature1";
}*/

let options = {
    rootMargin: "220px",
    threshold: 1,
};

let observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("animate1", entry.isIntersecting)
        //if(entry.isIntersecting){observer1.unobserve(entry.target)}
    })
}, options);

let observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("animate2", entry.isIntersecting)
        //if(li.isIntersecting){observer2.unobserve(li.target)}
    })
}, options);

feature1.forEach(feat => {
    observer1.observe(feat);
})


feature2.forEach(feat => {
   observer2.observe(feat); 
})

