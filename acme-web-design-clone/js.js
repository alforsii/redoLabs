function myFunction() {
    var inpObj = document.getElementById("demo");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo").innerHTML = "Input OK";
    } 
  } 