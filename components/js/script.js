const navbar = document.querySelector(".navbar");
const btnMobile = document.querySelector(".fa-bars");
const title = document.querySelector("h1");

btnMobile.addEventListener('click', () => {


    if(navbar.classList.contains("active")) {

        navbar.classList.remove('active');

    }else {

        navbar.classList.add('active');
        navbar.style.animation = "navMobileStart 0.5s ease-in-out";
        

    }
    

});

function machineWriter(element) {

    
    setInterval(() => {

        const textArray = element.innerHTML.split('');
        element.innerHTML = "";
        
        textArray.forEach((letter, i) => { /* letter = letra and i = index */
        
            setTimeout(() => {
    
                element.innerHTML += letter;
    
            }, 160 * i)
    
        });

    }, 5800);

}

machineWriter(title);