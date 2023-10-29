
    // Функция генерации цифр. Минимальное значение, Максимальное значение, шанс запуска генерации


function getRandomIntWithPercent(min, max, percent) {

    final = Math.floor(Math.random() * 101);

    if (final <= percent) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return 0;
    };
};






    // Удаление предыдущих значений

function resetLoot(){
    const allLoot = document.querySelectorAll('[data-stats]');
    allLoot.forEach(function(item){
        item.textContent = "NONE";
    })
};



    // Нахождение маленького сундука + генерация лута маленького сундука


const chestSmall = document.querySelector('[data-chest-00]');

chestSmall.addEventListener('click', function(){
    resetLoot();
    mainGeneratorLvl1();
});



    // Нахождение среднего сундука + генерация лута среднего сундука

const chestStandart = document.querySelector('[data-chest-01]');

chestStandart.addEventListener('click', function(){
    resetLoot();
    mainGeneratorLvl2();
});



    // Нахождение большого сундука + генерация лута большого сундука

const chestBig = document.querySelector('[data-chest-02]');

chestBig.addEventListener('click', function(){
    resetLoot();

    mainGeneratorLvl3();
});





    // Генерация сида.

function seedGenerator(){
    var date = new Date(); 
    var dt = date.getTime();
    
    const dateBin = dt.toString(2);
    var Dataresult = dateBin;
    var i = 0;

    while (i < getRandomIntWithPercent(2, 3, 100)){ 

        var dataBinStart = dateBin.substr(0,  getRandomIntWithPercent(1, 3, 100))

        var dataBinEnd = dateBin.substr(dateBin.length - getRandomIntWithPercent(1, 3, 100))

        if (i < 1){
            var Dataresult = dataBinStart + dateBin + dataBinEnd;
            i++;
        } else {
            var Dataresult = dataBinStart + Dataresult + dataBinEnd;
            i++;
        };


    
};
return parseInt(Dataresult, 2);
};


var digit = parseInt(seedGenerator(), 2);
var digit = String(digit);



    // Функция генерации лута первого тира 

function coinGenerator(thisSeed) {

    const minMainNumb = String(thisSeed);
    var numGroup = minMainNumb[0] + minMainNumb[1] + minMainNumb[2];

    var minNum = Math.min([numGroup[0]], [numGroup[1]], [numGroup[2]]);
    numGroup = numGroup.split(minNum).join('');


    var maxNum = Math.max([numGroup[0]], [numGroup[1]], [numGroup[2]]);
    numGroup = numGroup.split(maxNum).join('');


    if (minNum % 2 === 0) {

        document.querySelector('#gold').textContent = minNum / 2;

    } else {

        document.querySelector('#gold').textContent = (minNum - 1 ) / 2;

    };

    console.log(numGroup);

    if (numGroup == "") {
        numGroup = 0;
    };

    document.querySelector('#copper').textContent = maxNum;

    document.querySelector('#iron').textContent = numGroup;
    
};





    // Функция генерации лута второго тира


function resourceGenerator(thisSeed) {


    var thisSeed = String(thisSeed);
    console.log(thisSeed); 
    var thisSeed = thisSeed.split('').reverse().join('');
    const potionNum = thisSeed[1];
    const consumablesNum = thisSeed[5];
    const materialsNum = thisSeed[8];



    switch (parseInt(potionNum)) {
        case 1:
            document.querySelector('#potions').textContent = 'healing LVL1 (3)';
            break;
        case 2:
            document.querySelector('#potions').textContent = 'none';
            break;
        case 3:
            document.querySelector('#potions').textContent = 'armor LVL1 (3)';
            break;
        case 4:
            document.querySelector('#potions').textContent = 'speed LVL1 (1)';
            break;
        case 5:
            document.querySelector('#potions').textContent = 'mana LVL1 (1)';
            break;
        case 6:
            document.querySelector('#potions').textContent = 'DMG LVL1 (3)';
            break;
        case 7:
            document.querySelector('#potions').textContent = 'antidote';
            break;
        case 8:
            document.querySelector('#potions').textContent = 'rage (-2HP)';
            break;
        case 9:
            document.querySelector('#potions').textContent = 'healing LVL2 (5)';
            break;
        case 0:
            document.querySelector('#potions').textContent = 'none';
            break;
    };

    switch (parseInt(consumablesNum)) {
        case 1:
            document.querySelector('#consumables').textContent = 'skeleton key LVL1 (2/10)';
            break;
        case 2:
            document.querySelector('#consumables').textContent = 'skeleton key Lvl2 (5/10)';
            break;
        case 3:
            document.querySelector('#consumables').textContent = 'skeleton key LVL1 (2/10)';
            break;
        case 4:
            document.querySelector('#consumables').textContent = 'bomb (5 DMG)';
            break;
        case 5:
            document.querySelector('#consumables').textContent = 'mouse poison';
            break;
        case 6:
            document.querySelector('#consumables').textContent = 'hypnotic';
            break;
        case 7:
            document.querySelector('#consumables').textContent = 'none';
            break;
        case 8:
            document.querySelector('#consumables').textContent = 'none';
            break;
        case 9:
            document.querySelector('#consumables').textContent = 'none';
            break;
        case 0:
            document.querySelector('#consumables').textContent = 'none';
            break;
    };

    switch (parseInt(materialsNum)) {
        case 1:
            document.querySelector('#materials').textContent = 'textile x5';
            break;
        case 2:
            document.querySelector('#materials').textContent = 'metal element X3';
            break;
        case 3:
            document.querySelector('#materials').textContent = 'leather x3';
            break;
        case 4:
            document.querySelector('#materials').textContent = 'flowers x5';
            break;
        case 5:
            document.querySelector('#materials').textContent = 'bone x3';
            break;
        case 6:
            document.querySelector('#materials').textContent = 'scull x1';
            break;
        case 7:
            document.querySelector('#materials').textContent = 'magic powder x5';
            break;
        case 8:
            document.querySelector('#materials').textContent = 'magic crystal x1';
            break;
        case 9:
            document.querySelector('#materials').textContent = 'none';
            break;
        case 0:
            document.querySelector('#materials').textContent = 'none';
            break;
    };

};





function artifactsGenerator(thisSeed) {


    var thisSeed = String(thisSeed);

    var art1 = parseInt(thisSeed[0]) + parseInt(thisSeed[1]) + parseInt(thisSeed[2]) + parseInt(thisSeed[3]) + parseInt(thisSeed[4]);

    art1 = (art1 / 5) / 2;
    console.log(Math.floor(art1))

    var art2 = parseInt(thisSeed[5]) + parseInt(thisSeed[6]) + parseInt(thisSeed[7]) + parseInt(thisSeed[8]) + parseInt(thisSeed[9]);

    art2 = (art2 / 5) / 2;
    console.log(Math.floor(art2))

    var art3 = parseInt(thisSeed[10]) + parseInt(thisSeed[11]) + parseInt(thisSeed[12]) + parseInt(thisSeed[13]) + parseInt(thisSeed[14]);
    art3 = (art3 / 5) / 2;
    console.log(Math.floor(art3))



    if (Math.floor(art1) >= 3){
        document.querySelector('#artifact_1').textContent = 'artifact';
    };

    if (Math.floor(art2) >= 3){
        document.querySelector('#artifact_2').textContent = 'artifact';
    };

    if (Math.floor(art3) >= 3){
        document.querySelector('#artifact_3').textContent = 'artifact';
    };


};




function mainGeneratorLvl1(customSeed = 0) {



    if (customSeed == 0) {
        const thisSeed = seedGenerator() + '1';
        console.log(thisSeed);
        document.querySelector('#chestNumber').textContent = thisSeed;
        coinGenerator(thisSeed);
    } else {
        const thisSeed = customSeed;
        console.log(thisSeed);
        document.querySelector('#chestNumber').textContent = thisSeed;
        coinGenerator(thisSeed);
    };
};



function mainGeneratorLvl2(customSeed = 0) {



    if (customSeed == 0) {
        const thisSeed = seedGenerator() + '2';
        console.log(thisSeed)
        document.querySelector('#chestNumber').textContent = thisSeed;
        coinGenerator(thisSeed);
        resourceGenerator(thisSeed);
    } else {
        const thisSeed = customSeed;
        console.log(thisSeed)
        document.querySelector('#chestNumber').textContent = thisSeed;
        coinGenerator(thisSeed);
        resourceGenerator(thisSeed);
    };


};

function mainGeneratorLvl3(customSeed = 0) {

    
    if (customSeed == 0) {
        const thisSeed = seedGenerator() + '3';
        console.log(thisSeed)
        document.querySelector('#chestNumber').textContent = thisSeed;
        coinGenerator(thisSeed);
        resourceGenerator(thisSeed);
        artifactsGenerator(thisSeed);
    } else {
        const thisSeed = customSeed;
        console.log(thisSeed)
        document.querySelector('#chestNumber').textContent = thisSeed;
        coinGenerator(thisSeed);
        resourceGenerator(thisSeed);
        artifactsGenerator(thisSeed);
    };


};




function warningMessage(warningStatus = false) {
    if (warningStatus) {
        document.querySelector("#warning").textContent = '';
    } else {
        document.querySelector("#warning").textContent = 'The seed must be at least 15 characters long';
    };
};



//  Функция, отвечающая за распознование сида, введёного пользователем.


const seedButton = document.querySelector('#seedButton');


seedButton.onclick = function onclick() {
    var userSeed = document.querySelector('#seedInput').value;

    if (userSeed.length > 15) {
        warningMessage(true);
        switch (Number(userSeed[userSeed.length-1])) {
            case 1:
                resetLoot();
                mainGeneratorLvl1(userSeed);
            break;
            case 2:
                resetLoot();
                mainGeneratorLvl2(userSeed);
            break;
            case 3:
                resetLoot();
                mainGeneratorLvl3(userSeed);
            break;
            case 4:
                resetLoot();
                mainGeneratorLvl1(userSeed);
            break;
            case 5:
                resetLoot();
                mainGeneratorLvl2(userSeed);
            break;
            case 6:
                resetLoot();
                mainGeneratorLvl3(userSeed);
            break;
            case 7:
                resetLoot();
                mainGeneratorLvl1(userSeed);
            break;
            case 8:
                resetLoot();
                mainGeneratorLvl2(userSeed);
            break;
            case 9:
                resetLoot();
                mainGeneratorLvl3(userSeed);
            break;
        };
    } else {
        warningMessage();
    }



       
};



// 1 2 3 4 5 6 7 8 9
// 1 0 0 1 0 0 1 0 0
// 0 1 0 0 1 0 0 1 0
// 0 0 1 0 0 1 0 0 1