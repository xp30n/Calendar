function updateCalendar() {
    const now = new Date(); // Update the calendar based on the date
    const day = now.getDate(); // get today's date
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"] // Displays the names of each month
    const year = now.getFullYear(); // Get the year
    const month = monthNames[now.getMonth()]; // Fetch the month from the array^ 

    // Displays the day, month and the year
    document.getElementById("day").textContent = day;
    document.getElementById("month").textContent = month;
    document.getElementById("year").textContent = year;

}

// Updates the calendar on each load
updateCalendar();