//function to check user submission
function submitForm() {
  //select all elements by given classname
  var question1 = document.getElementsByClassName('question1');
  //store element by id to store results later
  var results = document.getElementById('results');
  //create array for checkbox answers this will become the value for var answer1
  var checkboxesArray = [];
  //create variable to hold question1 answers
  var answer1;

  //loop through all checkboxes using the question1 variable
  for (var i = 0; i < question1.length; i++){
    if(question1[i].checked) {
      checkboxesArray.push(question1[i].value);
    };
    //set anwswer1 variable equal to checkbox araru
    answer1 = checkboxesArray;
    console.log(answer1);
  }
};

//select button with id="submitButton"
var submitButton = document.getElementById('submitButton');
//add even to submitButton
submitButton.addEventListener('click', submitForm, false);
