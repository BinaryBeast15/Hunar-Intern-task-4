document.addEventListener('DOMContentLoaded', function() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');

    calculateButton.addEventListener('click', calculateBMI);

    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultDiv.textContent = 'Please enter valid weight and height values.';
            return;
        }

        const bmi = weight / Math.pow(height / 100, 2);
        const roundedBMI = bmi.toFixed(1);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 25) {
            category = 'Normal weight';
        } else if (bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        resultDiv.innerHTML = `Your BMI is <span style="color: #4CAF50;">${roundedBMI}</span><br>Category: <span style="color: #4CAF50;">${category}</span>`;
    }
});