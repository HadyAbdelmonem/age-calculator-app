


// let submit = document.getElementById("submit");




// submit.onclick = function () {
//     outyear.innerHTML= date.getFullYear() - inyear.value;
//     outmonth.innerHTML= date.getMonth()+1 - inmonth.value;
//     outday.innerHTML= date.getDay() - inday.value;
// }





const inday = document.getElementById("inday");
const inmonth = document.getElementById("inmonth");
const inyear = document.getElementById("inyear");

const outday = document.getElementById("outday");
const outmonth = document.getElementById("outmonth");
const outyear = document.getElementById("outyear");

let submit = document.getElementById("submit");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    
    if (!i.value) {
      i.style.borderColor = "red";
      
      validator = false;
    } else if (inmonth.value > 12) {
        inmonth.style.borderColor = "red";
        
        validator = false;
    } else if (inday.value > 31) {
        inday.style.borderColor = "red";
        
        validator = false;
    } else {
      i.style.borderColor = "black";
      
      validator = true;
    }
  });
  return validator;
}
submit.addEventListener("click",function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (inday.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (inmonth.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - inday.value;
    const m = month - inmonth.value;
    const y = year - inyear.value;

    outday.innerHTML = d;
    outmonth.innerHTML = m;
    outyear.innerHTML = y;
  }
})

