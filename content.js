chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "markAttendance") {

    let inputRolls = request.rollNumbers
      .split(",")
      .map(r => r.trim())
      .map(r => r.padStart(3, "0"));

    let rows = document.querySelectorAll("table tbody tr");

    rows.forEach(row => {

      let cells = row.querySelectorAll("td");

      if (cells.length < 3) return;

      // Roll number usually in 3rd column (change if needed)
      let rollText = cells[2].innerText.trim();

      let lastThree = rollText.slice(-3);

      if (inputRolls.includes(lastThree)) {

        // IMPORTANT: Element UI checkbox
        let checkbox = row.querySelector("input.el-checkbox__original");

        if (checkbox && !checkbox.checked) {
          checkbox.click();
        }
      }

    });

    alert("Attendance Marked ✅");
  }
});
