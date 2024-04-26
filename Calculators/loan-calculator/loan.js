document.getElementById("calculateButton").addEventListener("click", function() {
    calculate();
});

function calculate() {
    const loanAmt = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interest").value);
    const loanTerm = parseFloat(document.getElementById("months").value);

    if (isNaN(loanAmt) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Please enter valid numbers in all the fields");
        return;
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayment = loanTerm ;
    const monthlyPayment = (loanAmt * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayment));
    const totalInterest = (monthlyPayment * totalPayment) - loanAmt;

    displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest) {
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = `
        <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</strong></p>
        <p><strong>Total Interest: ${totalInterest.toFixed(2)}</strong></p>
    `;
}
