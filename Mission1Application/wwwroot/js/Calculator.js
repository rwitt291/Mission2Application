function addPercentInputs() {
    var assignments = parseInt$("#intAssignments").val();
    var group = parseInt$("#intGroup").val();
    var quizzes = parseInt$("#intQuizzes").val();
    var exams = parseInt$("#intExams").val();
    var intex = parseInt$("#intINTEX").val();
}

var CalcGrade = (assignments + group + quizzes + exams + intex);
let letter = "";

if (CalcGrade < 60) {
    letter = "F";
} else if (CalcGrade < 70) {
    letter = "D";
} else if (CalcGrade < 80) {
    letter = "C";
} else if (CalcGrade < 90) {
    letter = "B";
} else {
    letter = "A";
}


$("#butnSend").click(function () {
    alert("Calculated Grade: " + CalcGrade + ", Letter Grade: " + letter);
})