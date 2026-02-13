function calculate() {

    const principal = parseFloat(document.getElementById("principal").value);
    const interestPer100 = parseFloat(document.getElementById("interest").value);
    const startDate = new Date(document.getElementById("startDate").value);
    const today = new Date();

    // -----------------------------
    // Calendar-based calculation
    // -----------------------------

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();

    // Adjust days
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    // Total months (calendar logic)
    const totalMonths = (years * 12) + months + (days / 30);

    // Interest calculation (UNCHANGED logic)
    const interestAmount =
        (principal / 100) * interestPer100 * totalMonths;

    const totalAmount = principal + interestAmount;

    // -----------------------------
    // Extended time logic
    // -----------------------------

    const totalDays = Math.floor(
        (today - startDate) / (1000 * 60 * 60 * 24)
    );

    const totalMonthsOnly = (years * 12) + months;
    const weeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;
    const totalHours = totalDays * 24;

    // -----------------------------
    // Output
    // -----------------------------

    document.getElementById("result").innerHTML = `
        <h3>Calendar Time</h3>
        <p>${years} years + ${months} months + ${days} days</p>
        <p>${totalMonthsOnly} months + ${days} days</p>
        <p>${weeks} weeks + ${remainingDays} days</p>
        <p>${totalDays} days + 0 hours</p>
        <p>Total Hours: ${totalHours}</p>

        <h3>Amount Details</h3>
        <p>Interest Amount: ₹${interestAmount.toFixed(2)}</p>
        <p>Total Amount: ₹${totalAmount.toFixed(2)}</p>
    `;
}
