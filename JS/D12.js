function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


const person01 = document.getElementById('person_01');

person01.addEventListener('click', function(){

    document.querySelector('#playerHP').textContent = getRandomInt(15, 20);
    
    document.querySelector('#playerDMG').textContent = getRandomInt(10, 15);

    document.querySelector('#playerSpeed').textContent = getRandomInt(1, 6);

    document.querySelector('#playerArm').textContent = getRandomInt(10, 15);

    document.querySelector('#playerMana').textContent = getRandomInt(1, 6);

    document.querySelector('#playerCharisma').textContent = getRandomInt(1, 6);

    statColor()
});


const person02 = document.getElementById('person_02');

person02.addEventListener('click', function(){

    document.querySelector('#playerHP').textContent = getRandomInt(10, 15);
    
    document.querySelector('#playerDMG').textContent = getRandomInt(5, 10);

    document.querySelector('#playerSpeed').textContent = getRandomInt(1, 10);

    document.querySelector('#playerArm').textContent = getRandomInt(1, 6);

    document.querySelector('#playerMana').textContent = getRandomInt(10, 20);

    document.querySelector('#playerCharisma').textContent = getRandomInt(5, 10);

    statColor()
});


const person03 = document.getElementById('person_03');

person03.addEventListener('click', function(){

    document.querySelector('#playerHP').textContent = getRandomInt(5, 10);
    
    document.querySelector('#playerDMG').textContent = getRandomInt(5, 10);

    document.querySelector('#playerSpeed').textContent = getRandomInt(10, 20);

    document.querySelector('#playerArm').textContent = getRandomInt(1, 6);

    document.querySelector('#playerMana').textContent = getRandomInt(1, 6);

    document.querySelector('#playerCharisma').textContent = getRandomInt(5, 15);

    statColor()
});



const person04 = document.getElementById('person_04');

person04.addEventListener('click', function(){

    document.querySelector('#playerHP').textContent = getRandomInt(10, 15);
    
    document.querySelector('#playerDMG').textContent = getRandomInt(10, 20);

    document.querySelector('#playerSpeed').textContent = getRandomInt(5, 10);

    document.querySelector('#playerArm').textContent = getRandomInt(1, 10);

    document.querySelector('#playerMana').textContent = getRandomInt(1, 6);

    document.querySelector('#playerCharisma').textContent = getRandomInt(5, 10);

    statColor()
});


const person05 = document.getElementById('person_05');

person05.addEventListener('click', function(){

    document.querySelector('#playerHP').textContent = getRandomInt(5, 10);
    
    document.querySelector('#playerDMG').textContent = getRandomInt(1, 6);

    document.querySelector('#playerSpeed').textContent = getRandomInt(5, 10);

    document.querySelector('#playerArm').textContent = getRandomInt(1, 10);

    document.querySelector('#playerMana').textContent = getRandomInt(1, 6);

    document.querySelector('#playerCharisma').textContent = getRandomInt(15, 25);

    statColor()
});


const person06 = document.getElementById('person_06');

person06.addEventListener('click', function(){

    document.querySelector('#playerHP').textContent = getRandomInt(10, 15);

    document.querySelector('#playerDMG').textContent = getRandomInt(5, 10);

    document.querySelector('#playerSpeed').textContent = getRandomInt(1, 6);

    document.querySelector('#playerArm').textContent = getRandomInt(5, 15);

    document.querySelector('#playerMana').textContent = getRandomInt(10, 20);

    document.querySelector('#playerCharisma').textContent = getRandomInt(1, 6);

    statColor()
});





function statColor (item) {

    const stats = document.querySelectorAll("[data-stats]")


    
    stats.forEach( function(item){
        if (item.innerText < 6) {

            item.classList.remove("title-stat");
            item.classList.remove("stat--yellow");
            item.classList.remove("stat--green");
            item.classList.add("stat--red");

        } else if (6 <= item.innerText && item.innerText < 15) {

            item.classList.remove("title-stat");
            item.classList.remove("stat--red");
            item.classList.remove("stat--green");
            item.classList.add("stat--yellow");

        }  else {

            item.classList.remove("title-stat");
            item.classList.remove("stat--red");
            item.classList.remove("stat--yellow");
            item.classList.add("stat--green");
        };


    });

};



