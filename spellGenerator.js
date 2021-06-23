const spells  = ['FireBolt', 'Chromatic orb', 'Dragons Breath', 'FireBall', 'Acid Splash'];
const damage = [8, 10, 12, 14, 16, 18, 20];
const outcome = ['You have missed', 'You have hit', 'Your spell has been successful', 'You have hit and defeated the enemy.', ];

//generates random numbers based on array length 
const genRanNum = num =>{
    let ranNum = Math.floor(Math.random() * num);
    return ranNum;
}
//generates a spell
const getSpell = () =>{
    let randomNum = genRanNum(spells.length);
    let chosenSpell = spells[randomNum];
    console.log (chosenSpell);
    return chosenSpell;

}
// genterates damage
const getDamage = () =>{
    const ranDamage = damage [genRanNum(damage.length)];
    console.log (ranDamage);
    return ranDamage;
}
//geterates a random outcome
const getOutcome = () =>{

    const ranOutcome = outcome [genRanNum(outcome.length)];
    console.log (ranOutcome);
    return ranOutcome
}

function createMessage () {
    let chosenSpell = getSpell();
    let spellMod = 1;
    switch (chosenSpell){
        case 'FireBolt':
            spellMod = 1.25;
            break;

        case 'Chromatic orb':
            spellMod = 1.5;
            break;
        case 'Dragons Breath':
            spellMod = 2;
            break;
        case 'FireBall':
            spellMod = 3;
            break; 
        case 'Acid Splash':
            spellMod = 1.25;
            break;
        default:
            spellMod = 1;

    }
    let damageDone = getDamage()* spellMod;
    let theOutCome = getOutcome();
    if (theOutCome === 'You have missed'){
        console.log (`${theOutCome}. The spell ${chosenSpell} did 0 damage to your enemy`)
        document.getElementById("spell").innerHTML =`${theOutCome}. The spell ${chosenSpell} did 0 damage to your enemy`;
    }
    else {
        console.log (`${theOutCome}. The spell ${chosenSpell} did ${damageDone} damage.`)
        document.getElementById("spell").innerHTML = `${theOutCome}. The spell ${chosenSpell} did ${damageDone} damage.`

    }
    
}
createMessage();