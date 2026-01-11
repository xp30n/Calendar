function updateCalendar() {
    const now = new Date(); // Update the calendar based on the date
    const day = now.getDate(); // get today's date
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"] // Displays the names of each month
    const year = now.getFullYear();
    const month = monthNames[now.getMonth()];

}