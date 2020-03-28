export class IntersectionCalculator {

  public findIntersection(input: string[]): string {
    let concatArr: number[] = [];
    for (let string of input) {
      let numbers: number[] = string.split(",").map(Number);
      concatArr = concatArr.concat(numbers);
    }
    return this.getNonUniqueNumbers(this.sortArray(concatArr)).toString();
  }

  private sortArray(input: number[]): number[] {
    return input.sort((a, b) => {return a - b});
  }

  private getNonUniqueNumbers(input: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i + 1] == input[i]){
          result.push(input[i]);
        }
    }
    return result;
  }
}
