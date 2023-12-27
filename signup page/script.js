const lastDate = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var data = [];
var user;
getMonth(1);
getYear(2000);


(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      var first_Name = document.getElementById('inputFname').value;
      var last_Name = document.getElementById('inputLname').value;
      var email = document.getElementById('inputEmail').value;
      var temp_gender = document.getElementById('inlineRadio1');
      var birthMonth = document.getElementById('inputState1').value;
      var birthDate = document.getElementById('inputState2').value;
      var birthYear = document.getElementById('inputState3').value;
      var dob = new Date(birthYear, birthMonth, birthDate);

      if (temp_gender) {
        var whatGender = "Male";
        console.log(whatGender);
      }

      else if (temp_gender) {
        var whatGender = "Female";
        console.log(whatGender);
      }

      else if (temp_gender) {
        var whatGender = "Other";
        console.log(whatGender);
      }

      else {
        var gender_warning = document.getElementById("genderWarning").innerHTML;
        gender_warning = `Please select a gender`;
      }

      localStorage.setItem('First_Name', first_Name);
      localStorage.setItem('Last_Name', last_Name);
      localStorage.setItem('Email', email);
      localStorage.setItem('DOB', dob);
      localStorage.setItem('Gender', whatGender);
      form.classList.add('was-validated')
    }, false)
  })
})()


function getMonth() {
  const birthMonth = document.getElementById("inputState1").value;
  console.log(birthMonth);
  getDate(birthMonth);
}

function getDate(birthMonth) {
  const birthDate = document.getElementById("inputState2");
  birthDate.innerHTML = "";
  for (let i = 0; i < lastDate[birthMonth]; i++) {

    birthDate.innerHTML += `<option value="${i + 1}">${i + 1}</option>`;
  }
  console.log(birthDate);
}

function getYear() {
  const birthYear = document.getElementById("inputState3");
  for (let i = 2023-18; i > 1900; i--) {
    birthYear.innerHTML += `<option value="${i}">${i}</option>`;
  }
  console.log(birthYear);
}