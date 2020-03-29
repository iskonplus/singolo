const menu = document.getElementsByClassName("menu");
const menuA = menu[0].querySelectorAll("a");
const form = document.getElementsByTagName("form");
const modal = document.getElementsByClassName("modal");
const buttonForm = document.querySelector(".input_form.button");
const modalButton = document.querySelector(".modal_button");
const inputForms = document.querySelectorAll(".input_form");
const subject = document.querySelector(".input_form.subject");
const describe = document.querySelector(".input_form.describe");
const pSubject = document.querySelector(".p_subject");
const pDescribe = document.querySelector(".p_describe");


//----------------menu------------------------------

const nav = document.getElementsByTagName("nav");
const navDiv = document.getElementsByClassName("nav_div");
const article = document.querySelectorAll("article");
const container = document.getElementsByClassName("container");

document.addEventListener("scroll", onScroll);


function onScroll(event) {

    let curentPosition = window.scrollY;
    if (curentPosition <= 0) {
        nav[0].style.padding = "17px 0px 55px";
    } else {
        nav[0].style.padding = "0px";
        navDiv[0].style.borderBottom = "2px #272c38 solid";
    }

    article.forEach(el => {

        if ((curentPosition + 2) >= el.offsetTop) {

            menuA.forEach(a => {
                a.classList.remove("a_active");

                if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {

                    a.classList.add("a_active");

                }
            })
        }
    })
}


//------------------modalka---------------

const validName = /^[A-Za-zа-яА-Я]+(\s)?([A-Za-zа-яА-Я]+)?$/;
const validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

let check = 0;


function ValidFunc(n, el) {
    if (!el.test(inputForms[n].value)) {
        inputForms[n].classList.remove("requiredOk");
        inputForms[n].classList.add("required");
        check = 0;

    } else {
        inputForms[n].classList.remove("required");
        inputForms[n].classList.add("requiredOk");
        check = inputForms[n].value.length;

    }

}

form[0].addEventListener("click", (event) => {

    if (event.target === inputForms[0]) {
        inputForms[0].onkeyup = () => ValidFunc(0, validName);
    } else if (event.target === inputForms[1]) {
        inputForms[1].onkeyup = () => ValidFunc(1, validEmail);
    }

    if (event.target === buttonForm) {

        (!inputForms[0].value || !inputForms[1].value) && (check = 0);

        if (!check) {
            inputForms[0].classList.add("required");
            inputForms[1].classList.add("required");
            inputForms[0].placeholder = ("This field is required!").toUpperCase();
            inputForms[1].placeholder = ("This field is required!").toUpperCase();
        } else {
            modal[0].style.display = "block";
            !subject.value || (pSubject.innerHTML = `- Subject: ${subject.value}.`);
            !describe.value || (pDescribe.innerHTML = `- Description: ${describe.value}.`);
            inputForms[0].classList.remove("requiredOk");
            inputForms[1].classList.remove("requiredOk");
            inputForms[0].classList.remove("required");
            inputForms[1].classList.remove("required");
            inputForms[0].placeholder = ("Name");
            inputForms[1].placeholder = ("Email");
            check = 0;
            container[0].classList.add("blur");
        }
    }
})

function modulNone() {

    container[0].classList.remove("blur");
    modal[0].style.display = "none";
    inputForms.forEach(el => el.type === "button" || (el.value = ""))
    pSubject.innerHTML = "Without subject";
    pDescribe.innerHTML = "Without subject";
}

modalButton.onclick = modulNone;


//------------------button portfolio---------------

const battonPotfolio = document.getElementsByClassName("batton_potfolio");
const buttonPort = battonPotfolio[0].querySelectorAll("input");
const portContainerImg = document.getElementsByClassName("container_portfolio_with_img");
const portImg = Array.from(portContainerImg[0].querySelectorAll(".img_ortfolio"));

battonPotfolio[0].addEventListener("click", (event) => {

    buttonPort.forEach(el => {

        el.classList.remove("portfolio_button");
        event.target.classList.add("portfolio_button");

        if (event.target === el) {
            for (let i = 0; i < portImg.length; i++) {
                let a = [...portImg]
                portContainerImg[0].append(a[Math.ceil(Math.random() * i)])
            }
        }
    })
})


portContainerImg[0].addEventListener("click", (event) => {
    portImg.forEach(el => {
        el.querySelector("div").classList.remove("active");
        event.target.classList.add("active");
    })

})



//------------------iphone display---------------

const containerIphone = document.getElementsByClassName("padding_iphone");
const iphoneVertical = containerIphone[0].querySelector(".iphone.vertical");
const iphoneHorizontal = containerIphone[0].querySelector(".iphone.horizontal");

function displayOnOf(element) {
    [element].forEach(el => {
        let iphoneDisplay = el.querySelector(".iphone_display");
        iphoneDisplay.classList.value !== "iphone_display id" ?
            iphoneDisplay.classList.add("id") :
            iphoneDisplay.classList.remove("id");
    })
}

iphoneVertical.addEventListener("click", (event) => { displayOnOf(iphoneVertical) })
iphoneHorizontal.addEventListener("click", (event) => { displayOnOf(iphoneHorizontal) })

//------------------slaider---------------

const imgSlider = document.getElementsByClassName("img_slider");
const sectionSlider = document.getElementsByClassName("section slider");
const slide_2 = document.getElementsByClassName("slide_2");
const triangleLeft = document.querySelector(".triangle.left");
const triangRight = document.querySelector(".triangle.right");
const noActive = document.querySelectorAll(".no_active");

let counter = 0;

triangleLeft.addEventListener("click", (event => {

    if (counter === 0) {
        imgSlider[0].style.left = "-100%";
        slide_2[0].style.left = "40%";
        sectionSlider[0].classList.add("background");
        imgSlider[0].style.opacity = "0";
        noActive[0].style.display = "block";

        setTimeout(() => {
            slide_2[0].style.left = "-40%";
            slide_2[0].style.opacity = "1";
            counter = 1
            noActive[0].style.display = "none";

        }, 600);

    } else if (counter === 1) {
        slide_2[0].style.left = "-140%";
        imgSlider[0].style.left = "100%";
        sectionSlider[0].classList.remove("background");
        slide_2[0].style.opacity = "0";
        noActive[0].style.display = "block";


        setTimeout(() => {
            imgSlider[0].style.left = "0%";
            imgSlider[0].style.opacity = "1";
            counter = 0
            noActive[0].style.display = "none";

        }, 600);
    }

}))

triangRight.addEventListener("click", (event => {

    if (counter === 0) {
        imgSlider[0].style.left = "100%";
        slide_2[0].style.left = "-140%";
        imgSlider[0].style.opacity = "0";
        sectionSlider[0].classList.add("background");
        noActive[1].style.display = "block";

        setTimeout(() => {
            slide_2[0].style.opacity = "1";
            slide_2[0].style.left = "-40%";
            counter = 1
            noActive[1].style.display = "none";

        }, 600);

    } else if (counter === 1) {
        slide_2[0].style.left = "40%";
        imgSlider[0].style.left = "-100%";
        slide_2[0].style.opacity = "0";
        sectionSlider[0].classList.remove("background");
        noActive[1].style.display = "block";



        setTimeout(() => {
            imgSlider[0].style.opacity = "1";
            imgSlider[0].style.left = "0%";
            counter = 0
            noActive[1].style.display = "none";

        }, 600);
    }

}))

    //------------------mobile menu---------------

const backBotton = document.getElementsByClassName("back_botton");
const buttonMenu = document.getElementsByClassName("button_menu");
const logo = document.getElementsByClassName("logo");

backBotton[0].addEventListener("click", (event =>  cliner()))

menu[0].addEventListener("click", (event => {
    menuA.forEach(el =>  cliner())
    
}))

function cliner() {
    buttonMenu[0].classList.toggle("rotate");
    menu[0].classList.toggle("none"); 
    navDiv[0].classList.toggle("height"); 
    logo[0].classList.toggle("margin"); 
}

