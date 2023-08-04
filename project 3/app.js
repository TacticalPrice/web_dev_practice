document.addEventListener("DOMContentLoaded", function() {
    const birthdateInput = document.getElementById("birthdateinput")
    const calculateBtn = document.getElementById("calculateBtn");
    
    function showBirthdateInput() {
        birthdateInput.style.display = "block";
    }

    function calculateLifeTime() {
        const birthdate = new Date(document.getElementById('birthdate').value);
        const now = new Date();
        const diff = now - birthdate;

        const seconds = Math.floor(diff /1000);
        const minutes = Math.floor(seconds/60);
        const hours = Math.floor(minutes/60);
        const days = Math.floor(hours/24);

        const years = Math.floor(days /365);
        const months = Math.floor((days % 365)/30);

        document.getElementById("years").innerText = years+" years";
        document.getElementById("months").innerText = months+" months";
        document.getElementById('days').innerText = (days%30) + "days";
        document.getElementById("hours").innerText = (hours % 24) + " hours";
        document.getElementById("minutes").innerText = (minutes % 60) + " minutes";
        document.getElementById("seconds").innerText = (seconds % 60) + " seconds";

        birthdateInput.style.display = "none";

    }
    document.getElementById("settingsIcon").addEventListener("click", showBirthdateInput);
    calculateBtn.addEventListener("click", calculateLifeTime);
});