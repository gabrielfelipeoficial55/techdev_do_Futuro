const navbar = document.querySelector(".navbar");
const btnMobile = document.querySelector(".fa-bars");
const title = document.querySelector("h1");

btnMobile.addEventListener('click', () => {

    navbar.classList.toggle('active');

})

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