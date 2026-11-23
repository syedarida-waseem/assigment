
function calculateResult() {

    // Get student name
    let name = document.getElementById("name").value;

    // Get subject marks
    let english = Number(document.getElementById("english").value);
    let math = Number(document.getElementById("math").value);
    let computer = Number(document.getElementById("computer").value);
    let physics = Number(document.getElementById("physics").value);
    let urdu = Number(document.getElementById("urdu").value);

    // Store marks in array
    let marks = [english, math, computer, physics, urdu];

    // Check empty fields and invalid marks
    let fields = ["english", "math", "computer", "physics", "urdu"];

    for (let i = 0; i < fields.length; i++) {

        let value = document.getElementById(fields[i]).value;

        if (value === "" || marks[i] < 0 || marks[i] > 100) {
            alert("Please enter marks between 0 and 100 in every subject");
            return;
        }
    }

    if (name.trim() === "") {
        alert("Please enter student name");
        return;
    }

    // Calculate total
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    // Calculate percentage
    let percentage = (total / 500) * 100;

    // Find highest and lowest
    let highest = marks[0];
    let lowest = marks[0];

    for (let i = 0; i < marks.length; i++) {

        if (marks[i] > highest) {
            highest = marks[i];
        }

        if (marks[i] < lowest) {
            lowest = marks[i];
        }
    }

    // Calculate grade
    let grade;

    if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 50) {
        grade = "C";
    }
    else {
        grade = "Fail";
    }

    // Check pass or fail
    let result;

    if (marks.every(mark => mark >= 33)) {
        result = "Pass";
    }
    else {
        result = "Fail";
    }

    // Display result
    document.getElementById("result").innerHTML = `

        <h2>Student Result </h2>

        <p><b>Student Name:</b> ${name}</p>

        <p><b>Total Marks:</b> ${total} / 500</p>

        <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>

        <p><b>Grade:</b> ${grade}</p>

        <p><b>Highest Marks:</b> ${highest}</p>

        <p><b>Lowest Marks:</b> ${lowest}</p>

        <p><b>Final Result:</b> ${result}</p>

    `;
}
