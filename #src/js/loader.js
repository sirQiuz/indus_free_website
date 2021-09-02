(function () {
    let loaderElement = document.querySelector(".loader-js");

    window.onload = () => {
        function loaderTimeOut(){
            loaderElement.classList.add("loader--vanished");
        }
        setTimeout(loaderTimeOut, 1500);
    };
}());