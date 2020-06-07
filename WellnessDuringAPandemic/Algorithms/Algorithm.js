class Algorithm {
    main() {
        // mainList is the main list of Persons
        const mainList = [new Person("Tom", [5, 6, 7, 8, 3, 4, 3], [23, 22.5, 21, 20, 21.75, 23.5, 24])];

        const mainNames = [];
        const mainScores = [];

        var players = [];

        for (let i = 0; i < mainList.length; i++) {
            players.push({name: mainList[i].name, score:mainList[i].sleepScore});
        }
        // angular.forEach(scope.Algorithm, function (value, key) {
        //         mainScores.push(value);
        //         mainNames.push(key);
        //         players.push({name :key, score:value});
//  })


    }

    main()
}