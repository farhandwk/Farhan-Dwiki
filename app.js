//variabel navbar

const navAboutme = document.querySelector(".navAboutme")
const navProjects = document.querySelector(".navProjects")
const navWorks = document.querySelector(".navWorks")
const navSosmed = document.querySelector(".navSosmed")

//function navbar

function shownavAboutme() {
    if (navAboutme.classList.contains("shownavAboutme")) {
        navAboutme.classList.remove("shownavAboutme")
    } else {
        navAboutme.classList.add("shownavAboutme")
    }
}

function closenavAboutme() {
    if (navAboutme.classList.contains("shownavAboutme")) {
        navAboutme.classList.remove("shownavAboutme")
    } else {
        navAboutme.classList.add("shownavAboutme")
    }
}

function shownavProjects() {
    if (navProjects.classList.contains("shownavProjects"))(
        navProjects.classList.remove("shownavProjects")
    )
    else {
        navProjects.classList.add("shownavProjects")
    }
}

function closenavProjects() {
    if (navProjects.classList.contains("shownavProjects"))(
        navProjects.classList.remove("shownavProjects")
    )
    else {
        navProjects.classList.add("shownavProjects")
    }
}

function shownavWorks() {
    if (navWorks.classList.contains("shownavWorks"))(
        navWorks.classList.remove("shownavWorkss")
    )
    else {
        navWorks.classList.add("shownavWorks")
    }
}

function closenavWorks() {
    if (navWorks.classList.contains("shownavWorks"))(
        navWorks.classList.remove("shownavWorks")
    )
    else {
        navWorks.classList.add("shownavWorks")
    }
}

function shownavSosmed() {
    if (navSosmed.classList.contains("shownavSosmed"))(
        navSosmed.classList.remove('shownavSosmed')
    )
    else {
        navSosmed.classList.add("shownavSosmed")
    }
}

function closenavSosmed() {
    if (navSosmed.classList.contains("shownavSosmed"))(
        navSosmed.classList.remove('shownavSosmed')
    )
    else {
        navSosmed.classList.add("shownavSosmed")
    }
}

// screen and media query

const containerAll = document.querySelector(".containerAll")
const getSyle = window.getComputedStyle(containerAll)
let varWidth = parseInt(getSyle.width)
let varHeight = parseInt(getSyle.height)

const navbar = document.querySelector(".navbarLanding")
const header = document.querySelector(".headerLanding")
const judulLanding = document.querySelector(".judulHeader")
const imgHeader = document.querySelector(".imgHeader")
const p1Landing = document.querySelector(".p1Landing")
const kataLanding = document.querySelector(".kataLanding")
const p2Landing = document.querySelector(".p2Landing")
const btnLanding = document.querySelector(".btnLanding")
const imgProfile = document.querySelector(".imgProfile")
const openSidebar = document.querySelector(".openSidebar")

document.addEventListener("DOMContentLoaded", () => {
    if (varWidth < varHeight) {
        navbar.style.display = "none"
        judulLanding.style.fontSize = "2.3vw"
        judulLanding.style.marginTop = "2vh"
        judulLanding.style.marginLeft = "2vw"
        imgHeader.style.width = "7vw"
        imgHeader.style.height = "5vh"
        p1Landing.textContent = "Hello Everyone"
        p1Landing.style.fontSize = "7vw"
        p1Landing.style.color = "#BAC1CC"
        p1Landing.style.marginLeft = "40vw"
        p1Landing.style.width = "100vw"
        kataLanding.style.fontSize = "4vw"
        kataLanding.style.color = "#BAC1CC"
        kataLanding.style.marginLeft = "13vw"
        kataLanding.style.width = "70vw"
        kataLanding.style.textAlign = "justify"
        p2Landing.style.marginTop = "38vh"
        btnLanding.style.marginLeft = "13vw"
        btnLanding.style.top = "43.5vh"
        btnLanding.style.width = "42vw"
        btnLanding.style.height = "6vh"
        btnLanding.style.fontSize = "3.5vw"
        imgProfile.style.position = "absolute"
        imgProfile.style.width = "65%"
        imgProfile.style.right = "-8vw"
            // header.style.position = "sticky"
            // header.style.top = "0"
            //button lets chat

        const telegram = document.querySelector(".telegram")
        const whatsapp = document.querySelector(".whatsapp")
        let clicked = false
        telegram.style.top = "46vh"
        telegram.style.left = "40vw"
        whatsapp.style.top = "46.1vh"
        whatsapp.style.left = "19vw"

        btnLanding.addEventListener("click", () => {

            if (!clicked) {
                telegram.style.left = "40vw"
                telegram.style.top = "55vh"
                whatsapp.style.left = "19vw"
                whatsapp.style.top = "55vh"
                telegram.style.transition = "0.5s"
                whatsapp.style.transition = "0.5s"
                telegram.style.rotate = "0deg"
                whatsapp.style.rotate = "0deg"
                clicked = true
                console.info(clicked)
            } else if (clicked) {
                telegram.style.left = "40vw"
                telegram.style.top = "46.5vh"
                whatsapp.style.left = "19vw"
                whatsapp.style.top = "46.7vh"
                telegram.style.rotate = "0deg"
                whatsapp.style.rotate = "0deg"
                clicked = false
                console.info(clicked)
            }
        })
    } else {
        openSidebar.style.display = "none"
        kataLanding.style.display = "none"
    }
})

//button lets chat

const btnLetschat = document.querySelector(".btnLanding")
const telegram = document.querySelector(".telegram")
const whatsapp = document.querySelector(".whatsapp")
let clicked = false

btnLetschat.addEventListener("click", () => {

    if (!clicked) {
        telegram.style.left = "41vw"
        telegram.style.top = "73vh"
        whatsapp.style.left = "41vw"
        whatsapp.style.top = "82vh"
        telegram.style.transition = "0.5s"
        whatsapp.style.transition = "0.5s"
        telegram.style.rotate = "0deg"
        whatsapp.style.rotate = "0deg"
        clicked = true
        console.info(clicked)
    } else if (clicked) {
        telegram.style.left = "36vw"
        telegram.style.top = "78vh"
        whatsapp.style.left = "36vw"
        whatsapp.style.top = "78vh"
        telegram.style.rotate = "0deg"
        whatsapp.style.rotate = "0deg"
        clicked = false
        console.info(clicked)
    }
})