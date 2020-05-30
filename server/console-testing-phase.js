console.log(`hi`)

var Increment = team=>{

    for (let i=0;i<vote.length;i++){

        if(team===vote[i].team){
            vote[i].count++;
        }
    }
}

var vote = [
    {team:`red`,count:0},
    {team:`blue`,count:0}
]

console.log(vote)
Increment(`red`)
console.log(vote)
Increment(`blue`)
console.log(vote)
