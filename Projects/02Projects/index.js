const form = document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height == " " || height <0 || isNaN(height)){
    console.log(`plz give me valid height ${height}`)
  }else if(weight == " " || weight <0 || isNaN(weight)){
    console.log(`plz give me valid weight ${weight}`)
  }else {
    const bmi =  (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`
  }
})