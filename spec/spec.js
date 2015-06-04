var code = require('./../grader.js')

describe('Grading Exercise', function() {
  it('takes a number grade and returns the equivalent letter value.', function () {
    expect(code.letterGrader(78)).toEqual("C");
    expect(code.letterGrader(84)).toEqual("B");
    expect(code.letterGrader(30)).toEqual("F");
    expect(code.letterGrader(93)).toEqual("A");
    expect(code.letterGrader(60)).toEqual("D");
  })
})
