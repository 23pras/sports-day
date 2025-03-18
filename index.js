const scores = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0
};

function OpeningCeremony(scores, nextEvent) {
    console.log("Starting the Sports Day!");
    console.log("Initial Scores:", scores);
    setTimeout(() => {
        console.log("Opening Ceremony Complete!");
        nextEvent(scores, LongJump); 
    }, 1000);
}

function Race100M(scores, nextEvent) {
    setTimeout(() => {
        console.log("100m Race Started...");
        let times = {
            red: Math.random() * 5 + 10, 
            blue: Math.random() * 5 + 10,
            green: Math.random() * 5 + 10,
            yellow: Math.random() * 5 + 10
        };

        let sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);
        console.log("Race Results:", sorted);

        scores[sorted[0][0]] += 50; 
        scores[sorted[1][0]] += 25; 

        console.log("Updated Scores after 100m Race:", scores);

        nextEvent(scores, HighJump);
    }, 3000);
}

function LongJump(scores, nextEvent) {
    setTimeout(() => {
        console.log("Long Jump Started...");
        let colors = ["red", "blue", "green", "yellow"];
        let selectedColor = colors[Math.floor(Math.random() * colors.length)];

        console.log(`${selectedColor} wins the Long Jump!`);
        scores[selectedColor] += 150;

        console.log("Updated Scores after Long Jump:", scores);

        nextEvent(scores, AwardCeremony);
    }, 2000);
}

function HighJump(scores, nextEvent) {
    setTimeout(() => {
        console.log("High Jump Started...");
        let color = prompt("Which color secured the highest jump? (red, blue, green, yellow)");

        if (color && scores.hasOwnProperty(color)) {
            scores[color] += 100;
            console.log(`${color} awarded 100 points for High Jump!`);
        } else {
            console.log("No points awarded for High Jump.");
        }

        console.log("Updated Scores after High Jump:", scores);

        nextEvent(scores,LongJump);
    }, 1000);
}

function AwardCeremony(scores) {
    console.log("Award Ceremony Started...");
    let sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);

    console.log(`🥇 First place: ${sortedScores[0][0]} with ${sortedScores[0][1]} points`);
    console.log(`🥈 Second place: ${sortedScores[1][0]} with ${sortedScores[1][1]} points`);
    console.log(`🥉 Third place: ${sortedScores[2][0]} with ${sortedScores[2][1]} points`);
}

OpeningCeremony(scores, Race100M);
