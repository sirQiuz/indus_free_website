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