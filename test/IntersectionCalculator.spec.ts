import { IntersectionCalculator } from '../src/IntersectionCalculator';


describe("IntersectionCalculator, when given a string array with comma seperated numbers ", () => {
  let instance: IntersectionCalculator;

  beforeEach(() => {
    instance = new IntersectionCalculator();
  });

  test("1: should return a comma seperated string with the overlapping numbers for each index position.", () => {
    const input: string[] = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
    const expectedResult: string = "1,4,13";
    expect(instance).toBeInstanceOf(IntersectionCalculator);
    expect(instance.findIntersection(input)).toEqual(expectedResult);
  });

test("2: should return a comma seperated string with the overlapping numbers for each index position.", () => {
    const input: string[] = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];
    const expectedResult: string = "1,9,10";
    expect(instance).toBeInstanceOf(IntersectionCalculator);
    expect(instance.findIntersection(input)).toEqual(expectedResult);
  });
});
