function totalGradePerc() {
    // Grabs the values from index.html
    var assignments = parseInt($("#assignments").val());
    var groupProject = parseInt($("#groupProject").val());
    var quizzes = parseInt($("#quizzes").val());
    var exams = parseInt($("#exams").val());
    var intex = parseInt($("#intex").val());

    // Adds up values received by index.html and initializes letterGrade
    var gradePercent = (assignments + groupProject + quizzes + exams + intex);
    var letterGrade = "";

    // Changes the letter grade based on gradePercent
    if (gradePercent >= 94) {
        letterGrade = "A"
    } else if (gradePercent >= 90) {
        letterGrade = "A-"
    } else if (gradePercent >= 87) {
        letterGrade = "B+"
    } else if (gradePercent >= 84) {
        letterGrade = "B"
    } else if (gradePercent >= 80) {
        letterGrade = "B-"
    } else if (gradePercent >= 77) {
        letterGrade = "C+"
    } else if (gradePercent >= 74) {
        letterGrade = "C"
    } else if (gradePercent >= 70) {
        letterGrade = "C-"
    } else if (gradePercent >= 67) {
        letterGrade = "D+"
    } else if (gradePercent >= 64) {
        letterGrade = "D"
    } else if (gradePercent >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    }
    // What to display in alert
    alert("Calculated Grade: " + gradePercent + ", Letter Grade: " + letterGrade);;
}