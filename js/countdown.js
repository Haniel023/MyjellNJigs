// Set the date you're counting down to (adjust as needed)
const countdownDate = new Date("2023-10-28 16:00:00").getTime();

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");

    if (distance < 0) {
        clearInterval(x);
        // You can display a message when the countdown is over
        document.getElementById("timer").innerHTML = "Best Wishes, Castro-Bayanin Family!";
    }
}, 1000);