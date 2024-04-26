document.getElementById("bmiForm").addEventListener('submit', function(e){

    e.preventDefault();
    console.log("Form submitted");
    
    const gender = document.getElementById('Gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('heightFeet').value);
    const heightInches = parseInt(document.getElementById('heightInches').value);
    const weight = parseFloat(document.getElementById('Weight').value);

    console.log("Gender:", gender);
    console.log("Age:", age);
    console.log("Height (Feet):", heightFeet);
    console.log("Height (Inches):", heightInches);
    console.log("Weight:", weight);

    if(gender && age && heightFeet && heightInches && weight){
        const heightInMeters = ((heightFeet*12)+heightInches)*0.0254;
        const BMI = weight / (heightInMeters*heightInMeters);
        console.log("BMI:", BMI);
        const resultElement =  document.getElementById('result');
        let category = '';
        if(BMI < 18.5){
            category = 'Underweight'
        }
        else if(BMI >= 18.5 && BMI < 24.9){
            category = 'Normal weight'
        }
        else if(BMI >= 24.9 && BMI < 29.9){
            category = 'Overweight'
        }
        else{
            category = 'Obese'
        }
        let resultMessage = 'Your BMI: ' + BMI.toFixed(2) + '<br>';
        resultMessage += 'Category: ' + category;

        resultElement.innerHTML = resultMessage;

    } else {
        console.log("Please fill in all the fields.");
    }

});
