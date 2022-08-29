// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class.

class Statistics {
  constructor(ages) {
    this.ages = ages;
  }

  getCount() {
    return this.ages.length;
  }

  getSum() {
    let sum = 0;
    for (let i = 0; i < this.ages.length; i++) {
      sum += ages[i];
    }
    return sum;
  }

  getMin() {
    let min = ages.sort();
    return min[0];
  }

  getMax() {
    let max = ages.sort((a, b) => b - a);
    return max[0];
  }

  getRange() {
    let range = ages.sort();
    return range[range.length - 1] - range[0];
  }

  getMean() {
    let sum = 0;
    for (let i = 0; i < this.ages.length; i++) {
      sum = sum + ages[i];
    }
    let mean = sum / this.ages.length;
    return Math.ceil(mean);
  }

  getMedian() {
    let len = Math.floor(ages.length / 2);
    if (this.ages.length % 2 === 0) return ages[len];
    else return ages[len];
  }

  getMode() {
    let sort = ages.sort();
    let count = 0;
    let first = ages[0];
    for (let i = 1; i < this.ages.length; i++) {
      for (let j = i; j < this.ages.length; j++) {
        if (first == ages[j]) count++;
        else first = ages[count];
      }
    }
    return `(${ages[count]},${count})`;
  }

  getVariance() {
    let sum = 0,
      varSum = 0,
      varArray = [];
    let mean = this.getMean();
    for (let i = 0; i < this.ages.length; i++) {
      sum = (ages[i] - mean) ** 2;
      varArray.push(sum);
    }
    for (let i = 0; i < this.ages.length; i++) {
      varSum += varArray[i];
    }
    let variance = varSum / this.ages.length;
    return variance;
  }

  getStd() {
    let sum = 0,
      varSum = 0,
      varArray = [];
    let mean = this.getMean();
    for (let i = 0; i < this.ages.length; i++) {
      sum = (ages[i] - mean) ** 2;
      varArray.push(sum);
    }
    for (let i = 0; i < this.ages.length; i++) {
      varSum += varArray[i];
    }
    let variance = varSum / this.ages.length;
    return Math.sqrt(variance).toPrecision(2);
  }
}
ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

let obj = new Statistics(ages);
console.log(`Counts: ` + obj.getCount());
console.log(`Sum: ` + obj.getSum());
console.log(`Minimun: ` + obj.getMin());
console.log(`Maximum: ` + obj.getMax());
console.log(`Range: ` + obj.getRange());
console.log(`Median: ` + obj.getMedian());
console.log(`Mean: ` + obj.getMean());
console.log(`Mode: ` + obj.getMode());
console.log(`Variance: ` + obj.getVariance());
console.log(`Standard Deviation: ` + obj.getStd());

// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.expenses = expenses;
    this.incomes = incomes;
  }
  get totalIncome() {}
  get totalExpenses() {}
  get accountInfo() {}
  set addExpense(expenses) {}
  set addIncome(incomes) {}
  get accountBalance() {}
}
