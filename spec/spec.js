var code = require('./../grader.js')

describe('Grading Exercise', function() {
  it('takes a number grade and returns the equivalent letter value.', function () {
    expect(code.letterGrader(78)).toEqual("C+");
    expect(code.letterGrader(84)).toEqual("B");
    expect(code.letterGrader(30)).toEqual("F");
    expect(code.letterGrader(93)).toEqual("A");
    expect(code.letterGrader(60)).toEqual("D-");
    expect(code.letterGrader(70)).toEqual("C-");
    expect(code.letterGrader(80)).toEqual("B-");
    expect(code.letterGrader(90)).toEqual("A-");
    expect(code.letterGrader(100)).toEqual("A+");
    expect(code.letterGrader(69)).toEqual("D+");
  })
  it('takes an array of grades and returns the median value', function () {
    expect(code.medianScore([52,80,80,86,94])).toEqual(80);
    expect(code.medianScore([3, 4, 5, 7,  9, 24, 45, 53])).toEqual(8);
  })
  it('takes an array of grades and returns the mode value', function () {
    expect(code.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
  })
})
