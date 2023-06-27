// Step 1: Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // Step 1a: Update first header under <main> element
  var header = document.querySelector('main h1');
  header.textContent = "Your Name";

  // Step 1b: Move focus to name text field
  var nameField = document.getElementById('name');
  nameField.focus();

  // Step 1c: Click event listeners for addGrade and resetGrades buttons
  var addGradeButton = document.getElementById('addGrade');
  addGradeButton.addEventListener('click', addGradeHandler);

  var resetGradesButton = document.getElementById('resetGrades');
  resetGradesButton.addEventListener('click', resetGradesHandler);

  // Step 1d: Change event listeners for showAverageGrade and showTopGrade checkboxes
  var showAverageGradeCheckbox = document.getElementById('showAverageGrade');
  showAverageGradeCheckbox.addEventListener('change', showAverageGradeHandler);

  var showTopGradeCheckbox = document.getElementById('showTopGrade');
  showTopGradeCheckbox.addEventListener('change', showTopGradeHandler);
});

// Step 2: Create empty array studentGrades
var studentGrades = [];

// Step 3: resetForm function
function resetForm() {
  var form = document.getElementById('gradesForm');
  form.reset();
  var nameField = document.getElementById('name');
  nameField.focus();
}

// Step 4: calcAverageGrade function
function calcAverageGrade() {
  if (studentGrades.length === 0) {
    return "0.00";
  }

  var sum = 0;
  for (var i = 0; i < studentGrades.length; i++) {
    sum += studentGrades[i].grade;
  }

  var average = sum / studentGrades.length;
  return average.toFixed(2);
}

// Step 5: getTopGrade function
function getTopGrade() {
  if (studentGrades.length === 0) {
    return "None";
  }

  var topGrade = studentGrades[0].grade;
  for (var i = 1; i < studentGrades.length; i++) {
    if (studentGrades[i].grade > topGrade) {
      topGrade = studentGrades[i].grade;
    }
  }

  return topGrade.toString();
}

// Step 6: updateStudentGradesOnUI function
function updateStudentGradesOnUI() {
  var gradesSection = document.getElementById('grades');
  var noGradesSection = document.getElementById('noGrades');
  var gradesOutput = document.getElementById('gradesOutput');
  gradesOutput.innerHTML = "";

  if (studentGrades.length === 0) {
    noGradesSection.classList.add('show');
    gradesSection.classList.remove('show');
  } else {
    noGradesSection.classList.remove('show');
    gradesSection.classList.add('show');

    for (var i = 0; i < studentGrades.length; i++) {
      var student = studentGrades[i];
      var gradeParagraph = document.createElement('p');
      gradeParagraph.textContent = student.name + ": " + student.grade;
      gradesOutput.appendChild(gradeParagraph);
    }

    var showTopGradeCheckbox = document.getElementById('showTopGrade');
    if (showTopGradeCheckbox.checked) {
      var topGradeParagraph = document.createElement('p');
      topGradeParagraph.textContent = "Top Grade: " + getTopGrade();
      gradesOutput.appendChild(topGradeParagraph);
    }

    var showAverageGradeCheckbox = document.getElementById('showAverageGrade');
    if (showAverageGradeCheckbox.checked) {
      var averageGradeParagraph = document.createElement('p');
      averageGradeParagraph.textContent = "Average Grade: " + calcAverageGrade();
      gradesOutput.appendChild(averageGradeParagraph);
    }
  }
}

// Step 7: addGradeHandler function
function addGradeHandler(event) {
  event.preventDefault();

  var nameField = document.getElementById('name');
  var gradeField = document.getElementById('grade');

  var nameValue = nameField.value.trim();
  var gradeValue = parseFloat(gradeField.value);

  if (nameValue === "") {
    alert("Please enter the student's name.");
    return;
  }

  if (isNaN(gradeValue) || gradeValue < 0 || gradeValue > 100) {
    alert("Please enter a valid numeric grade between 0 and 100.");
    return;
  }

  var student = {
    name: nameValue,
    grade: gradeValue
  };

  studentGrades.push(student);
  updateStudentGradesOnUI();
  resetForm();
}

// Step 8: resetGradesHandler function
function resetGradesHandler() {
  studentGrades = [];
  updateStudentGradesOnUI();
  resetForm();
}

// Step 9: showTopGradeHandler function
function showTopGradeHandler() {
  updateStudentGradesOnUI();
}

// Step 10: showAverageGradeHandler function
function showAverageGradeHandler() {
  updateStudentGradesOnUI();
}