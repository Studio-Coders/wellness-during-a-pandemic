document.addEventListener('DOMContentLoaded', () => {
    let players = [
        {name:  "molly", score: 49}, 
        {name:  "rex", score: 3},
        {name:  "anunay", score: 1}, 
        {name:  "ethan", score: 2}];
    
    let container = document.querySelector('#container')
    // let name = document.querySelector(".name")
    // let score = document.querySelector(".score")

    // // Add each row to the array
    // players.forEach(pl => container.querySelectorAll('.row'))
    // container.querySelectorAll('.row').forEach(el => elements.push(el))
    
    // Clear the container
    container.innerHTML = ''

    // Sort the array from highest to lowest
    players.sort(function(a,b){
        if (a.score<b.score) return 1;
        if (a.score>b.score) return -1;
        return 0;
    });
    // Put the elements back into the container
    players.forEach(e => container.quereSelectorAll('.row').appendChild(e.name))
    // players.forEach(e => container.append(e.score))
  })



