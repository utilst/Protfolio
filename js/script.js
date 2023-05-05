window.addEventListener('load', function myfct(e) {
    const navbar = document.querySelector(".navbar");
    const tiana = document.querySelector(".tiana");
    const menu = document.querySelector(".menu");
    const body = document.querySelector(".body");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const upButton = this.document.querySelector(".upButton");
    const c1 = document.querySelector(".c1");
    const c2 = document.querySelector(".c2");
    const c3 = document.querySelector(".c3");
    const c4 = document.querySelector(".c4");
    // const c5 = document.querySelector(".c5");

    //mampipotra tiroir rehefa kotihina ny hamburger
    menuBtn.onclick = () => {
        menu.classList.add("active");
        menuBtn.classList.add("hide");
        body.classList.add("disabledscroll");
    }
    //manala tiroir

    c1.onclick = () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        body.classList.remove("disabledscroll");
    }
    c2.onclick = () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        body.classList.remove("disabledscroll");
    }

    c3.onclick = () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        body.classList.remove("disabledscroll");
    }

    c4.onclick = () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        body.classList.remove("disabledscroll");
    }

    // c5.onclick = () => {
    //     menu.classList.remove("active");
    //     menuBtn.classList.remove("hide");
    //     body.classList.remove("disabledscroll");
    // }

    cancelBtn.onclick = () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        body.classList.remove("disabledscroll");
    }


    //manao transparent ilay navbar
    window.onscroll = () => {
        if (this.scrollY > 100) {
            navbar.classList.add("sticky");
            tiana.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
            tiana.classList.remove("sticky");
            upButton.classList.remove("sticky");
        }
    }
    //animation ecriture clavs
    var typed = new Typed(".clavs", {
        strings: ["Backend_", "Fullstack_", "Photographe_", "Frontend_", "DevOPS_", "Linux_"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".clavs2", {
        strings: ["Backend_", "Fullstack_", "Photographe_", "Frontend_", "DevOPS_", "Linux_"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


})



