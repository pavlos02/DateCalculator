
function run() {
    const main = document.getElementById('count');
    const inputFromUser = document.getElementById('inputFromUser').value;
    const target = new Date(inputFromUser); 

    function updateCountdown() {
        const current = new Date();
        const difference = target - current;
        const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));

        if (difference > 0) {
            main.textContent = `${daysRemaining} days remaining`;
       
        } else {
            main.textContent = "The event has passed!";
        }
    }

    // Update the countdown every day (86400000 milliseconds = 1 day)
    setInterval(updateCountdown, 86400000);
    updateCountdown(); 
}


