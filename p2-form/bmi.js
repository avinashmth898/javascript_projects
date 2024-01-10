const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height= parseFloat(document.querySelector('#height').value);
    const weight= parseFloat(document.querySelector('#weight').value);
    console.log(height)
    console.log(weight)
    const results = document.querySelector('#result');
    const bmi= (weight/((height*height)*10000)).toFixed(2); 
    results.innerHTML= `<span>${bmi}</span>`
    
})