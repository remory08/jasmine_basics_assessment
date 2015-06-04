module.exports = {
  letterGrader: function(testScore) {
    var EquivalentLetterGrade;
    if (testScore>=98) {
      EquivalentLetterGrade= "A+";
    }
    else if (testScore >=93) {
      EquivalentLetterGrade = "A";
    }
    else if (testScore >=90) {
      EquivalentLetterGrade = "A-";
    }
    else if (testScore >=88) {
      EquivalentLetterGrade = "B+";
    }
    else if (testScore >=83) {
      EquivalentLetterGrade = "B";
    }
    else if (testScore >=80) {
      EquivalentLetterGrade = "B-";
    }
    else if (testScore >=78) {
      EquivalentLetterGrade = "C+";
    }
    else if (testScore >=73) {
      EquivalentLetterGrade = "C";
    }
    else if (testScore >=70) {
      EquivalentLetterGrade = "C-";
    }
    else if (testScore >=68) {
      EquivalentLetterGrade = "D+";
    }
    else if (testScore >=63) {
      EquivalentLetterGrade = "D";
    }
    else if (testScore >=60) {
      EquivalentLetterGrade = "D-";
    }
    else {
      EquivalentLetterGrade = "F";
    };
    return EquivalentLetterGrade;
  },

  averageScore: function (arr) {
    var total = 0;
    for(i=0; i < arr.length; i++) {
      total += arr[i];
    }
    return total/arr.length;
  },

    medianScore: function (arr) {

        var half = Math.floor(arr.length/2);

        if(arr.length % 2 !== 0)
            return arr[half];
        else
            return (arr[half-1] + arr[half]) / 2.0;
    },

    modeScore: function (arr) {
       var obj = {};
       var max = 0;
       for (i=0; i < arr.length; i++) {
         if (obj[arr[i]]) {
           obj[arr[i]] ++;
           if ([arr[i]] > max) {
             max = arr[i];
           }
         }
         else {
           obj[arr[i]] = [arr[i]=1];
         }
       }
       return max;
     }

}
