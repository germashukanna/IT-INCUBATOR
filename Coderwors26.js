//he Office I - Outed
function outed(meet, boss){
    const num = Object.values(meet);
    num.push(meet[boss]);
    let amount = Object.keys(meet).length;
    let s = num.reduce((acc, curr) => acc + curr, 0);
    return (s / amount <= 5) ? 'Get Out Now!' : 'Nice Work Champ!';
    }
