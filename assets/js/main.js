/**
 * Template Name: ComingSoon - v4.8.1
 * Template URL: https://bootstrapmade.com/comingsoon-free-html-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

// let axios = require("axios")

(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach((e) => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    };

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
        el.addEventListener("scroll", listener);
    };

    /**
     * Back to top button
     */
    let backtotop = select(".back-to-top");
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add("active");
            } else {
                backtotop.classList.remove("active");
            }
        };
        window.addEventListener("load", toggleBacktotop);
        onscroll(document, toggleBacktotop);
    }

    /**
     * Countdown timer
     */
    let countdown = select(".countdown");
    const output = countdown.innerHTML;

    const countDownDate = function () {
        let timeleft =
            new Date(countdown.getAttribute("data-count")).getTime() -
            new Date().getTime();

        let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        countdown.innerHTML = output
            .replace("%d", days)
            .replace("%h", hours)
            .replace("%m", minutes)
            .replace("%s", seconds);
    };
    countDownDate();
    setInterval(countDownDate, 1000);
})();

let name = document.getElementById("");
let submit = document.getElementById("form");
let courses = document.getElementById("courses");

// let a = () =>
//   axios.post(
//     "https://api.telegram.org/bot5626053499:AAF5nY9wWWTUoUmmLoeflMvCtUvlaayI7vU/sendmessage?chat_id=950348637&text=test",
//     "sd"
//   );
// button.addEventListener("click", () => {
//   a();
// });
let nameEvent = "";
let emailEvent = "";
let courseEvent = "English";
let messageEvent = "";

function changeForm(event) {
    if (event.target.name === "name") {
        nameEvent = event.target.value;
    } else if (event.target.name === "email") {
        emailEvent = event.target.value;
    } else if (event.target.name === "message") {
        messageEvent = event.target.value;
    }
    console.log(event.target.name);
}

function submitForm(event) {
    event.preventDefault();
    let messageText = `
👥 User Contact

👤 user-name: ${nameEvent}
📤 user-email: ${emailEvent}
⛳️ user-course: ${courseEvent}
⛳️ user-message: ${messageEvent}
`;
    axios.post(
        "https://api.telegram.org/bot5796259114:AAGge1SaSSnv843CTi7VT1Y7CMC4UdoHSrc/sendmessage?chat_id=-1001642583555&text=" +
            messageText
    );
    // console.log("Salom");
}

courses.addEventListener("change", (event) => {
    // console.log(event.target.value);
    courseEvent = event.target.value;
});

// -1001642583555

// https://api.telegram.org/bot5626053499:AAF5nY9wWWTUoUmmLoeflMvCtUvlaayI7vU/sendmessage?chat_id=950348637&text=test
