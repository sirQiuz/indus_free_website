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