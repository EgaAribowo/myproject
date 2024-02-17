


let banner = document.querySelector('.banner');
let darkMode = document.querySelector('.darkMode');
let typingText = new Typed("#text", {
    strings : ["Aribowo","Student","a Coder"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 50,
    backDelay : 1000
})

darkMode.onclick = function(){
    banner.classList.toggle('night')
}
