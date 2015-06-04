module.exports = {
  letterGrader: function(testScore) {
    var EquivalentLetterGrade;
    if (testScore>=90) {
      EquivalentLetterGrade= "A";
    }
    else if (testScore >=80) {
      EquivalentLetterGrade = "B";
    }
    else if (testScore >=70) {
      EquivalentLetterGrade = "C";
    }
    else if (testScore >=60) {
      EquivalentLetterGrade = "D";
    }
    else {
      EquivalentLetterGrade = "F";
    };
    return EquivalentLetterGrade;
  }

}
