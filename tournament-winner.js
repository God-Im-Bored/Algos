/* 
 -- Tournament Winner --
 
 Given an array of pairs representing te teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tounrament. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a stirng of at most 30 characters representing the name of the team. the results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], were a 1 in the results array means tat the home team in the corresponding competition won and a 0 means that the away team won.

*/

const comp = [
    ["AlgoMasters", "FrontPage Freebirds"],
    ["Runtime Terror", "Static Startup"],
    ["WeC#", "Hypertext Assassins"],
    ["AlgoMasters", "WeC#"],
    ["Static Startup", "Hypertext Assassins"],
    ["Runtime Terror", "FrontPage Freebirds"],
    ["AlgoMasters", "Runtime Terror"],
    ["Hypertext Assassins", "FrontPage Freebirds"],
    ["Static Startup", "WeC#"],
    ["AlgoMasters", "Static Startup"],
    ["FrontPage Freebirds", "WeC#"],
    ["Hypertext Assassins", "Runtime Terror"],
    ["AlgoMasters", "Hypertext Assassins"],
    ["WeC#", "Runtime Terror"],
    ["FrontPage Freebirds", "Static Startup"]
]

const results = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]

const Home_Team_Won = 1

function tournamentWinner(comp, results) {
    let currentTeam = ''
    let scores = {[currentTeam]: 0}

    for (let i = 0; i < comp.length; i++) {
        const result = results[i]
        const [homeTeam, awayTeam] = comp[i]

        const winner = result === Home_Team_Won ? homeTeam : awayTeam
        updateScores(winner, 3, scores)

        if (scores[winner] > scores[currentTeam]) {
            currentTeam = winner
        }
    }

    return currentTeam
}

function updateScores(team, points, scores) {
    if (!(team in scores)) scores[team] = 0

    scores[team] += points
}

console.log(tournamentWinner(comp, results))