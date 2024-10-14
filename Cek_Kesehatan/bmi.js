document.getElementById("bmiForm").addEventListener("submit", function (e) {
	e.preventDefault();

	// Get weight and height from the form
	const weight = parseFloat(document.getElementById("weight").value);
	const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

	// Calculate BMI
	const bmi = weight / (height * height);

	// Determine BMI category
	let category = "";
	if (bmi < 18.5) {
		category = "Underweight";
	} else if (bmi >= 18.5 && bmi < 24.9) {
		category = "Normal weight";
	} else if (bmi >= 25 && bmi < 29.9) {
		category = "Overweight";
	} else {
		category = "Obese";
	}

	// Display result
	const resultElement = document.getElementById("bmiResult");
	resultElement.innerHTML = `
        <h4>Your BMI is: ${bmi.toFixed(2)}</h4>
        <p>Category: <strong>${category}</strong></p>
    `;
});
