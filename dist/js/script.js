(function () {
    let header = document.querySelector(".header-js");

    function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min) + min) / 10;
    }

    function bubbleCreation() {
        let bubblesArray = [], 
            bubble;
        for (let i = 0; i < 120; i++) {
            // let extraSmallBubble;
            // extraSmallBubble = document.createElement("div");
            // extraSmallBubble.classList.add("bubble", "bubble--extra-small");
            // extraSmallBubble.style.right = randomValue(1, 1000) + "%";
            // extraSmallBubble.style.opacity = randomValue(3, 8);
            // extraSmallBubble.style.animationName = "bubbleFlyAnimation";
            // extraSmallBubble.style.animationDuration = randomValue(10, 150);
            // extraSmallBubble.style.animationTimingFunction = "linear";
            // extraSmallBubble.style.animationDelay = randomValue(10, 60);
            // extraSmallBubble.style.animationIterationCount = "infinite";
            // header.appendChild(extraSmallBubble);
            // -----
            bubble = document.createElement("div");
            bubblesArray.push(bubble);
        }

        let extraSmallBubbles = bubblesArray.splice(0,30);
            extraSmallBubbles.forEach(function(element) {

            });


        // for (let i = 0; i < 45; i++) {
        //     let smallBubble;
        //     smallBubble = document.createElement("div");
        //     smallBubble.classList.add("bubble", "bubble--small");
        //     header.appendChild(smallBubble);
        // }

        // for (let i = 0; i < 35; i++) {
        //     let mediumBubble;
        //     mediumBubble = document.createElement("div");
        //     mediumBubble.classList.add("bubble", "bubble--medium");
        //     header.appendChild(mediumBubble);
        // }

        // for (let i = 0; i < 35; i++) {
        //     let largeBubble;
        //     largeBubble = document.createElement("div");
        //     largeBubble.classList.add("bubble", "bubble--large");
        //     header.appendChild(largeBubble);
        // }
    }
    bubbleCreation();

}());