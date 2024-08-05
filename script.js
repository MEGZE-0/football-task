// 1. Create one player array for each team
const players1 = [
    'Neuer', 'Pavard', 'Boateng', 'Alaba', 'Davies', 
    'Kimmich', 'Goretzka', 'Muller', 'Gnabry', 'Lewandowski', 'Coman'
];
const players2 = [
    'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 
    'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'
];

// 2. Extract goalkeeper and field players for Bayern Munich (team 1)
const gk = players1[0];
const fieldPlayers = players1.slice(1);

// 3. Create an array 'allPlayers' containing all players of both teams
const allPlayers = [...players1, ...players2];

// 4. Loop inside the array and use (for-of) to print player names
const outputDiv = document.getElementById('output');
outputDiv.innerHTML += '<h2>All Players:</h2>';
for (const player of allPlayers) {
    outputDiv.innerHTML += `<p>${player}</p>`;
}

// 5. Create a new array 'players1Final' containing all original team1 players plus substitutes
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 6. Create variables for game odds
const game = {
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5,
    }
};
const { team1, draw, team2 } = game.odds;

// 7. Write a function 'printGoals' that receives an arbitrary number of player names and prints each along with the number of goals
function printGoals(...players) {
    for (const player of players) {
        console.log(`${player} scored`);
    }
    console.log(`Number of goals: ${players.length}`);
}

// Test data for 'printGoals' function
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// Call function with players from game.scored (assuming game.scored is available)
const gameScored = ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'];
printGoals(...gameScored);

// 8. Print which team is more likely to win based on lower odds
const moreLikelyToWin = team1 < team2 && team1 < draw ? 'Team 1 is more likely to win' : 
    team2 < team1 && team2 < draw ? 'Team 2 is more likely to win' : 
    'It\'s likely to be a draw';
console.log(moreLikelyToWin);
