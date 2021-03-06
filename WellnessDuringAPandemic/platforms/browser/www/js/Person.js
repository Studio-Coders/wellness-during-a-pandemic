class Person {
    constructor(namex, sleepStart, sleepEnd) {
        let name = namex;

        // sleepHours is an array holding the number of hours of sleep each day in one week
        let sleepHours = this.calculateSleepHours(sleepStart, sleepEnd);

        // sleepHoursAverage is the average number of hours of sleep in the past week
        let sleepHoursAverage = this.calculateAverage(sleepHours);

        let sleepScore = this.calculateSleepScore(sleepHours, sleepHoursAverage, sleepStart, sleepEnd);
    }

    // Returns the average hours of sleep with int[] as input
    calculateAverage(sleepHoursInput) {
        let total = 0;
        let listLength = sleepHoursInput.length;

        for (let i = 0; i < listLength; i++) {
            if (sleepHoursInput[i] != 0) {
                total += sleepHoursInput[i];
            }
        }

        return Math.floor(total / listLength);
    }

    // Returns the number of hours of sleep as an int[]. Takes 2 int[] as input.
    calculateSleepHours(sleepStart, sleepEnd) {
        let sleepHours = []
        for (let i = 0; i < sleepStart.length; i++) {
            let beforeMidnightStart = false;
            if (sleepStart[i] <= 24.00) {
                beforeMidnightStart = true;
            }
            if (!(sleepStart[i] > sleepEnd[i])) {
                if (beforeMidnightStart) {
                    sleepStart[i] -= 24.00;
                }
                sleepHours.push(sleepEnd[i] - sleepStart[i]);
            }
        }
        return sleepHours;
    }


    calculateSleepScore(sleepHours, sleepHoursAverage, sleepStart, sleepEnd) {
        let consistencyDown = this.standardDeviation(sleepStart);
        let consistencyUp = this.standardDeviation(sleepEnd);
        consistencyDown = 1 / consistencyDown;
        consistencyUp = 1 / consistencyUp;

        let averageSleepScore = 0;
        if (sleepHoursAverage >= 8) {
            averageSleepScore = sleepHoursAverage + ((sleepHoursAverage - 8) * 1.25);
        } else {
            averageSleepScore = sleepHoursAverage;
        }

        let consistencyHours = this.standardDeviation(sleepHours);
        consistencyHours = 1 / consistencyHours;

        return averageSleepScore * consistencyHours * consistencyUp * consistencyDown * 100;
    }

    standardDeviation(values) {
        var avg = this.average(values);

        var squareDiffs = values.map(function (value) {
            var diff = value - avg;
            var sqrDiff = diff * diff;
            return sqrDiff;
        });

        var avgSquareDiff = this.average(squareDiffs);

        var stdDev = Math.sqrt(avgSquareDiff);
        return stdDev;
    }

    average(data) {
        var sum = data.reduce(function (sum, value) {
            return sum + value;
        }, 0);

        var avg = sum / data.length;
        return avg;
    }


}
console.log("Hello");

let algo = new Algorithm();
console.log(algo.mainNames);

