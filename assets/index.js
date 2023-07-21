function submitFunction() {
  var dayInput = document.getElementById("dayInput").value;
  var monthInput = document.getElementById("monthInput").value;
  var yearInput = document.getElementById("yearInput").value;
  var formatEl = document.querySelectorAll(".format");
  var errorElDay = document.querySelector(".error-El-day");
  var errorElMonth = document.querySelector(".error-El-month");
  var errorElYear = document.querySelector(".error-El-year");
  var resultYearsEl = document.getElementById("resultYears");
  var resultMonthsEl = document.getElementById("resultMonths");
  var resultDaysEl = document.getElementById("resultDays");
  let day = parseInt(dayInput);
  let month = parseInt(monthInput) - 1;
  let year = parseInt(yearInput);
  const currentDate = new Date();

  // Determine the invalid part of the date
  if (dayInput === "") {
    formatEl[0].style.color = "red";
    errorElDay.textContent = "This field is required";
  }
  if (monthInput === "") {
    formatEl[1].style.color = "red";
    errorElMonth.textContent = "This field is required";
  }
  if (yearInput === "") {
    formatEl[2].style.color = "red";
    errorElYear.textContent = "This field is required";
  }
  if (dayInput !== "" && monthInput !== "" && yearInput !== "") {
    checkValues();
    calculateAge();
  }
  function checkValues() {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (currentDate.getFullYear() < year) {
      errorElYear.textContent = "Invalid Year";
    }
    if (month >= 12 || month < 0) {
      errorElMonth.textContent = "Invalid month";
    }
    if (day <= 0 || day > daysInMonth[month]) {
      errorElDay.textContent = "Invalid day";
    }
  }

  function calculateAge() {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;

    if (ageDays < 0) {
      ageMonths--;
      const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
      ageDays += daysInPrevMonth;
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    resultYearsEl.textContent = ageYears + " ";
    resultMonthsEl.textContent = ageMonths + " ";
    resultDaysEl.textContent = ageDays + " ";
  }
}
