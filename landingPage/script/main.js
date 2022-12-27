
function slide(a) {
    let img = document.querySelector('.landing_page_bg');
    let btn = document.querySelector('.sliding_circles').children;
    let left_logo = document.querySelector(".logo_left");

    if (a === 'btn1') {
        img.src = "./assests/img1.png";
        left_logo.style.top = "90%";
        left_logo.style.left = "10%";

        for (let i = 0; i <= 3; i++) {
            if (i === 0) {
                btn[i].style.backgroundColor = 'white';
            }
            else {
                btn[i].style.backgroundColor = 'transparent';
            }

        }
    }

    else if (a === 'btn2') {
        img.src = "./assests/img2.png";
        left_logo.style.top = "10%";
        left_logo.style.left = "75%";

        for (let i = 0; i <= 3; i++) {
            if (i === 1) {
                btn[i].style.backgroundColor = 'white';
            }
            else {
                btn[i].style.backgroundColor = 'transparent';
            }

        }
    }
    else if (a === 'btn3') {
        img.src = "./assests/img3.png";
        left_logo.style.top = "90%";
        left_logo.style.left = "10%";

        for (let i = 0; i <= 3; i++) {
            if (i === 2) {
                btn[i].style.backgroundColor = 'white';
            }
            else {
                btn[i].style.backgroundColor = 'transparent';
            }

        }
    }
    else if (a === 'btn4') {
        img.src = "./assests/img4.png";
        left_logo.style.top = "10%";
        left_logo.style.left = "75%";

        for (let i = 0; i <= 3; i++) {
            if (i === 3) {
                btn[i].style.backgroundColor = 'white';
            }
            else {
                btn[i].style.backgroundColor = 'transparent';
            }

        }
    }
}

