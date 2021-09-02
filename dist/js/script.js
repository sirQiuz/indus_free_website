(function () {
    let header = document.querySelector(".home-banner-js");

    function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function bubbleCreation() {
        let bubblesArray = [],
            bubble;

        for (let i = 0; i < 600; i++) {
            bubble = document.createElement("div");
            bubblesArray.push(bubble);
        }

        bubblesArray.forEach(function (element, index) {
            if (index < 150) {
                element.classList.add("bubble", "bubble--extra-small");
            } else if (150 <= index && index < 300) {
                element.classList.add("bubble", "bubble--small");
            } else if (300 <= index && index < 450) {
                element.classList.add("bubble", "bubble--medium");
            } else if (450 <= index && index < 600) {
                element.classList.add("bubble", "bubble--large");
            }

            element.style.right = randomValue(1, 1000) / 10 + "%";
            
            element.animate(
                [
                    {
                        transform: `translateY(${randomValue(15, -5) + 'px'})`,
                        opacity: randomValue(3, 5) / 10
                    },
                    {
                        transform: `translateY(${randomValue(-100, -700) + 'px'})`,
                        opacity: 0
                    }
                ], 
                    {
                        duration: randomValue(10000, 30000),
                        iterations: Infinity,
                        delay: randomValue(300, 2000)
                    }
            );
            header.appendChild(element);
            
        });
    }
    bubbleCreation();
}());
(function () {
    const deadLine = '2021-09-13';

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(total / (1000 * 60 * 60 * 24)),
            hours = Math.floor(total / (1000 * 60 * 60) % 24),
            minutes = Math.floor((total / (1000 * 60) % 60)),
            seconds = Math.floor((total / 1000) % 60);

        return {
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    
    function addZero(num) {
        if (num < 10) {
            return `0${num}`;
        }
        return num;
    }

    function setTimer(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('.timer__days-js'),
            hours = timer.querySelector('.timer__hours-js'),
            minutes = timer.querySelector('.timer__minutes-js'),
            seconds = timer.querySelector('.timer__seconds-js'),
            timeRestart = setInterval(updateTimer, 1000);

        updateTimer();

        function updateTimer() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeRestart);
            }
        }
    }

    setTimer('.timer-js', deadLine);
}());
(function () {
    let loaderElement = document.querySelector(".loader-js");

    window.onload = () => {
        function loaderTimeOut(){
            loaderElement.classList.add("loader--vanished");
        }
        setTimeout(loaderTimeOut, 1500);
    };
}());
(function () {
    let scrollPath = document.querySelector(".scroll-js"),
        scrollbar = document.querySelector(".scrollbar-js");

    function scrollTopCheck() {
        let top;
        if (window.pageYOffset >= 0) {
            top = (document.body.scrollHeight / (window.pageYOffset)) + "%";
        } else if (top > 100) {
            top = 100;
        } else {
            top = 0;
        }

        return top;
    }

    window.onscroll = () => {
        // scrollPath.style.height = +document.body.scrollHeight + "px";
        scrollbar.style.top = scrollTopCheck();
        scrollbar.style.height = (document.body.scrollHeight / window.innerHeight) * 10 + "%";
    };

    window.onchange = () => {
        scrollbar.style.height = (document.body.scrollHeight / window.innerHeight) * 10 + "%";
    }
}());

