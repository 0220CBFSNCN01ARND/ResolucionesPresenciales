window.addEventListener("load", () => {
    let start = document.querySelector(".start");
    let pause = document.querySelector(".pause");
    let reset = document.querySelector(".reset");
    let minutesCotrol = document.querySelector(".minutes");
    let secondsCotrol = document.querySelector(".seconds");

    var intervalo = 0;

    let timeSeg = 57;
    let timeMin = 0;

    start.addEventListener("click", () => {
        pause.disabled = false
        reset.disabled = false
        start.disabled = true

        intervalo = setInterval(() => {
            timeSeg++
            if (timeSeg < 10)
                secondsCotrol.innerHTML = "0" + timeSeg
            else
                secondsCotrol.innerHTML = timeSeg


            if (timeSeg == 59) {

                timeSeg = 0
                timeMin++
                if (timeMin < 10)
                    minutesCotrol.innerHTML = "0" + timeMin
                else
                    minutesCotrol.innerHTML = timeMin
            }


        }, 1000)
    });

    pause.addEventListener("click", () => {
        start.disabled = false
        clearInterval(intervalo)
    });
    reset.addEventListener("click", () => {
        timeSeg = 0;
        timeMin = 0;
        pause.disabled = true
        reset.disabled = true
        start.disabled = false
        clearInterval(intervalo)
        minutesCotrol.innerHTML = "00"
        secondsCotrol.innerHTML = "00"
    });
});