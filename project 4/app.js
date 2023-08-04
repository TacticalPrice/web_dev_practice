function calculatePercentage() {
    const Subject1 = parseFloat(document.getElementById("subject1").value);
    const Subject2 = parseFloat(document.getElementById("subject2").value);
    const Subject3 = parseFloat(document.getElementById("subject3").value);
    const Subject4 = parseFloat(document.getElementById("subject4").value);

    const totalMarks = Subject1 + Subject2 + Subject3 + Subject4;
    const percentage = (totalMarks / 400) * 100;

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Percentage: ${percentage.toFixed(2)}%`;
}
