(function () {
    let header = document.querySelector(".header-js");

    function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function bubbleCreation() {
        let bubblesArray = [],
            bubble;

        for (let i = 0; i < 600; i++) {
            bubble = document.createElement("div");
            bubblesArray.push(bubble);
        }

        bubblesArray.forEach(function (element, index) {
            if (index < 15) {
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
                        opacity: randomValue(3, 6) / 10
                    },
                    {
                        transform: `translateY(${randomValue(-100, -700) + 'px'})`,
                        opacity: 0
                    }
                ], 
                    {
                        duration: randomValue(10000, 30000),
                        iterations: Infinity
                    }
            );
            header.appendChild(element);
        });
    }
    bubbleCreation();
}());