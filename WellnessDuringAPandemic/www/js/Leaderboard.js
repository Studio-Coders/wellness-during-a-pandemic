let players = [
    { name: "molly", score: 49 },
    { name: "rex", score: 3 },
    { name: "anunay", score: 1 },
    { name: "ethan", score: 2 },
    { name: "sample", score: 10 }];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}
function sort(array) {
    array.sort(function (a, b) {
        if (a.score < b.score) return 1;
        if (a.score > b.score) return -1;
        return 0;
    });
}

let table = document.querySelector("table");
let data = Object.keys(players[0]);
sort(players);
generateTable(table, players); 