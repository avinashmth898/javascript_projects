const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height= parseFloat(document.querySelector('#height').value);
    const weight= parseFloat(document.querySelector('#weight').value);
    console.log(height)
    console.log(weight)
    const results = document.querySelector('#results');
    const bmi= (weight/((height*height)/10000)).toFixed(2); 
    console.log(bmi)
    if(bmi<=18.5){results.innerHTML=`<br><span>The BMI is: ${bmi}</span><p> 
    <p>Underweight</p>
    BMI Categories:</p>
    <p> Underweight = <18.5</p>
        <p>  Normal weight = 18.5–24.9</p>
            <p>  Overweight = 25–29.9</p>
<p> Obesity = BMI of 30 or greater</p>`}
if(bmi>18.5 && bmi<=24.9){results.innerHTML=`<br><span>The BMI is: ${bmi}</span><p> 
    <p>Normal weight</p>
    BMI Categories:</p>
    <p> Underweight = <18.5</p>
        <p>  Normal weight = 18.5–24.9</p>
            <p>  Overweight = 25–29.9</p>
<p> Obesity = BMI of 30 or greater</p>`}
if(bmi>24.9){results.innerHTML=`<br><span>The BMI is: ${bmi}</span><p> 
    <p>Overweight</p>
    BMI Categories:</p>
    <p> Underweight = <18.5</p>
        <p>  Normal weight = 18.5–24.9</p>
            <p>  Overweight = 25–29.9</p>
<p> Obesity = BMI of 30 or greater</p>`}
    
    
});