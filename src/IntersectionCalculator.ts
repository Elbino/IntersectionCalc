export class IntersectionCalculator {

  public findIntersection(input: string[]): string {
    let concatArr: number[] = [];
    for (let string of input) {
      let numbers: number[] = string.split(",").map(Number);
      concatArr = concatArr.concat(numbers);
    }
    return this.getNonUniqueNumbers(concatArr).toString();
  }

  private sortArray(input: number[]): number[] {
    return input.sort((a, b) => {return a - b});
  }

  private getNonUniqueNumbers(input: number[]): number[] {
    let sortedInput: number[] = this.sortArray(input);
    let result: number[] = [];
    for (let i = 0; i < sortedInput.length; i++) {
        if (sortedInput[i + 1] === sortedInput[i]){
          result.push(sortedInput[i]);
        }
    }
    return result;
  }
}
