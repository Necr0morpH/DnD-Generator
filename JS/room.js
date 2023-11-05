
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


    // Получение случайного объекта массива


function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
};
    
    
const roomBtmSmall = document.querySelector('[data-btn="small"]');
const roomBtmStandard = document.querySelector('[data-btn="standard"]');
const roomBtmBig = document.querySelector('[data-btn="big"]');


roomBtmSmall.addEventListener('click', function(){

    removeDangeon();
    roomGeneratorSmall(700);
    startPosition();
    lootRoomGenerator();
    bossRoomGenerator();
    mobGenerator();
    // fogOfWar();

});

roomBtmStandard.addEventListener('click', function(){

    removeDangeon();
    roomGenerator(400);
    startPosition();
    lootRoomGenerator(2);
    bossRoomGenerator();
    mobGenerator();

});

roomBtmBig.addEventListener('click', function(){

    removeDangeon();
    roomGenerator(10);
    startPosition();
    lootRoomGenerator(getRandomIntWithPercent(2, 4, 100));
    bossRoomGenerator();
    mobGenerator();

});







// function startDangeon() {

//     const Xstart = getRandomIntWithPercent(2, 12, 100);
//     const Ystart = getRandomIntWithPercent(2, 12, 100);



//     const startPosition = document.querySelector(`[data-Xpos="${Xstart}"][data-Ypos="${Ystart}"]`);

//     startPosition.classList.toggle('room-block--notactive');
//     startPosition.classList.toggle('room-block--start');

//     return startPosition;
// };

function midRoomGenerator() {

    let midRoom = document.querySelectorAll('[data-mid]');

    midRoom.forEach(element => {
        element.classList.add('room-block--start');
        let XstartRoom = element.getAttribute('data-Xpos');
        let YstartRoom = element.getAttribute('data-Ypos');

        for (exit = 0; exit < 4; exit++) {
            let exit = getRandomIntWithPercent(0, 4, 100);
            if (exit == 1) {
                let newRoom = document.querySelector(`[data-Xpos="${XstartRoom}"][data-Ypos="${Number(YstartRoom) + 1}"]`);
                newRoom.classList.add('room-block--normal');
                // console.log('top')
            } else if (exit == 2) {
                let newRoom = document.querySelector(`[data-Xpos="${Number(XstartRoom) + 1}"][data-Ypos="${YstartRoom}"]`);
                newRoom.classList.add('room-block--normal');
                // console.log('right')
            } else if (exit == 3) {
                let newRoom = document.querySelector(`[data-Xpos="${XstartRoom}"][data-Ypos="${YstartRoom - 1}"]`);
                newRoom.classList.add('room-block--normal');
                // console.log('bottom')
            } else if (exit == 4) {
                let newRoom = document.querySelector(`[data-Xpos="${XstartRoom - 1}"][data-Ypos="${YstartRoom}"]`);
                newRoom.classList.add('room-block--normal');
                // console.log('left')
            };
            
        };
    });

};


    // Я ЭТУ ХЕРНЮ КОММЕНТИРОВАТЬ НЕ БУДУ.

function roomGenerator(roomsize) {



    for (i = 0; i <= 16; i++) {
        midRoomGenerator();
        if (getRandomIntWithPercent(0, 1000, 100) >= roomsize) {
            mainRoom = document.querySelectorAll(`[data-main="${i}"]`);
            mainRoom.forEach(element => {
                element.classList.add('room-block--start');
                let XstartRoom = element.getAttribute('data-Xpos');
                let YstartRoom = element.getAttribute('data-Ypos');
                // console.log(XstartRoom)
    
                for (exit = 0; exit < 4; exit++) {
                    let exit = getRandomIntWithPercent(0, 4, 100);
                    if (exit == 1) {
                        let newRoom = document.querySelector(`[data-Xpos="${XstartRoom}"][data-Ypos="${Number(YstartRoom) + 1}"]`);
                        newRoom.classList.add('room-block--normal');
                        // console.log('top')
                    } else if (exit == 2) {
                        var newRoom = document.querySelector(`[data-Xpos="${Number(XstartRoom) + 1}"][data-Ypos="${YstartRoom}"]`);
                        newRoom.classList.add('room-block--normal');
                        // console.log('right')
                    } else if (exit == 3) {
                        let newRoom = document.querySelector(`[data-Xpos="${XstartRoom}"][data-Ypos="${YstartRoom - 1}"]`);
                        newRoom.classList.add('room-block--normal');
                        // console.log('bottom')
                    } else if (exit == 4) {
                        let newRoom = document.querySelector(`[data-Xpos="${XstartRoom - 1}"][data-Ypos="${YstartRoom}"]`);
                        newRoom.classList.add('room-block--normal');
                        // console.log('left')
                    };
                    
                };



                let AllleftRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom - 3}"][data-Ypos="${Number(YstartRoom)}"]`);
                let AllbottomhRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom}"][data-Ypos="${Number(YstartRoom - 3)}"]`);

                AllleftRoom.forEach(element => {

                    if (element.classList.contains('room-block--start') == true && getRandomIntWithPercent(0, 1000, 100) > 5) {

                        let i = 1;

                        while(i < 3) {

                            let leftRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom - i}"][data-Ypos="${Number(YstartRoom)}"]`);
                            leftRoom.forEach(element => {
                            element.classList.add('room-block--normal');
                            i++

                        });

                        };  

                        } else if (!(element.classList.contains('room-block--start'))){

                            if (getRandomIntWithPercent(0, 100, 100) >= 50) {

                                let leftRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom - 1}"][data-Ypos="${Number(YstartRoom)}"]`);
                                leftRoom.forEach(element => {
                                element.classList.add('room-block--normal');
                                });

                            } else if (getRandomIntWithPercent(0, 100, 100) >= 50) {

                                let i = 1;
                                while (i <= 2) {

                                    let leftRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom - i}"][data-Ypos="${Number(YstartRoom)}"]`);

                                    leftRoom.forEach(element => {
                                        element.classList.add('room-block--normal');
                                        i++;
                                    });
                                };
                            };
                        };
                });


                AllbottomhRoom.forEach(element => {

                    if (element.classList.contains('room-block--start') == true) {

                        let i = 1;

                        while(i < 3) {

                            let bottomRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom}"][data-Ypos="${Number(YstartRoom - i)}"]`);
                            bottomRoom.forEach(element => {
                                element.classList.add('room-block--normal');
                                i++

                            });

                        };  



                    } else if (!(element.classList.contains('room-block--start') == true)) {

                        if (getRandomIntWithPercent(0, 100, 100) >= 6) {

                            let bottomRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom}"][data-Ypos="${Number(YstartRoom - 1)}"]`);
                            bottomRoom.forEach(element => {

                                element.classList.add('room-block--normal');

                            });

                        };

                    };
                    
                });

            });

        };

    };
};

    
function roomGeneratorSmall(roomsize) {



    for (i = 0; i <= 14; i++) {
        midRoomGenerator();
        if (getRandomIntWithPercent(0, 1000, 100) >= roomsize) {
            mainRoom = document.querySelectorAll(`[data-cross="${i}"]`);
            mainRoom.forEach(element => {
                element.classList.add('room-block--start');
                element.classList.add('room-block--normal');
                let XstartRoom = element.getAttribute('data-Xpos');
                let YstartRoom = element.getAttribute('data-Ypos');
                // console.log(XstartRoom)



                document.querySelector(`[data-Xpos="${XstartRoom}"][data-Ypos="${Number(YstartRoom) + 1}"]`).classList.add('room-block--normal');
                document.querySelector(`[data-Xpos="${Number(XstartRoom) + 1}"][data-Ypos="${YstartRoom}"]`).classList.add('room-block--normal');
                document.querySelector(`[data-Xpos="${XstartRoom}"][data-Ypos="${YstartRoom - 1}"]`).classList.add('room-block--normal');
                document.querySelector(`[data-Xpos="${XstartRoom - 1}"][data-Ypos="${YstartRoom}"]`).classList.add('room-block--normal');






                let AllleftRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom - 3}"][data-Ypos="${Number(YstartRoom)}"]`);
                let AllbottomhRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom}"][data-Ypos="${Number(YstartRoom - 3)}"]`);

                AllleftRoom.forEach(element => {

                    if (element.classList.contains('room-block--start') == true && getRandomIntWithPercent(0, 1000, 100) > 5) {

                        let i = 1;

                        while(i < 3) {

                            let leftRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom - i}"][data-Ypos="${Number(YstartRoom)}"]`);
                            leftRoom.forEach(element => {
                            element.classList.add('room-block--normal');
                            i++

                        });

                        };  

                        } else if (!(element.classList.contains('room-block--start') == true)){

                            if (getRandomIntWithPercent(0, 100, 100) >= 50) {

                                let leftRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom - 1}"][data-Ypos="${Number(YstartRoom)}"]`);
                                leftRoom.forEach(element => {
                                element.classList.add('room-block--normal');
                                });

                            } else if (getRandomIntWithPercent(0, 100, 100) >= 50) {

                                let i = 1;
                                while (i <= 2) {

                                    let leftRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom - i}"][data-Ypos="${Number(YstartRoom)}"]`);

                                    leftRoom.forEach(element => {
                                        element.classList.add('room-block--normal');
                                        i++;
                                    });
                                };
                            };
                        };
                });


                AllbottomhRoom.forEach(element => {

                    if (element.classList.contains('room-block--start') == true && getRandomIntWithPercent(0, 100, 100) > 5) {

                        let i = 1;

                        while(i < 3) {

                            let bottomRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom}"][data-Ypos="${Number(YstartRoom - i)}"]`);
                            bottomRoom.forEach(element => {
                                element.classList.add('room-block--normal');
                                i++

                            });

                        };  



                    } else if (!(element.classList.contains('room-block--start') == true)) {

                        if (getRandomIntWithPercent(0, 100, 100) >= 6) {

                            let bottomRoom = document.querySelectorAll(`[data-Xpos="${XstartRoom}"][data-Ypos="${Number(YstartRoom - 1)}"]`);
                            bottomRoom.forEach(element => {

                                element.classList.add('room-block--normal');

                            });

                        };

                    };
                    
                });

            });

        };

    };
};

    // for (i = 0; i < getRandomIntWithPercent(1, 4, 100); i++) {
    //     var startRoom = document.querySelector('.room-block--start');
    //     var XstartRoom = startRoom.getAttribute('data-Xpos');
    //     var YstartRoom = startRoom.getAttribute('data-Ypos');
    //     var exit = getRandomIntWithPercent(0, 4, 100);

    //     if (exit == 1) {
    //         var newRoom = document.querySelector(`[data-Xpos="${XstartRoom}"][data-Ypos="${Number(YstartRoom) + 1}"]`);
    //         newRoom.classList.add('room-block--normal');
    //         console.log('top')
    //     } else if (exit == 2) {
    //         var newRoom = document.querySelector(`[data-Xpos="${Number(XstartRoom) + 1}"][data-Ypos="${YstartRoom}"]`);
    //         newRoom.classList.add('room-block--normal');
    //         console.log('right')
    //     } else if (exit == 3) {
    //         var newRoom = document.querySelector(`[data-Xpos="${XstartRoom}"][data-Ypos="${YstartRoom - 1}"]`);
    //         newRoom.classList.add('room-block--normal');
    //         console.log('bottom')
    //     } else if (exit == 4) {
    //         var newRoom = document.querySelector(`[data-Xpos="${XstartRoom - 1}"][data-Ypos="${YstartRoom}"]`);
    //         newRoom.classList.add('room-block--normal');
    //         console.log('left')
    //     }



    //     // if (exit == 1) {
    //     //     var exit = getRandomIntWithPercent(2, 4, 100);
    //     // } else if (exit == 2) {
    //     //     var exit = 4;
    //     // } else if (exit == 3) {
    //     //     var exit = 1;
    //     // } else if (exit == 4) {
    //     //     var exit = getRandomIntWithPercent(1, 3, 100);
    //     // };
    //     // if (exit == 1) {
    //     //     var newRoom = document.querySelector(`[data-Xpos="${XnewRoom}"][data-Ypos="${Number(YnewRoom) + 1}"]`);
    //     //     newRoom.classList.toggle('room-block--normal');
    //     // } else if (exit == 2) {
    //     //     var newRoom = document.querySelector(`[data-Xpos="${Number(XnewRoom) + 1}"][data-Ypos="${YnewRoom}"]`);
    //     //     newRoom.classList.toggle('room-block--normal');
    //     // } else if (exit == 3) {
    //     //     var newRoom = document.querySelector(`[data-Xpos="${XnewRoom}"][data-Ypos="${YnewRoom - 1}"]`);
    //     //     newRoom.classList.toggle('room-block--normal');
    //     // } else if (exit == 4) {
    //     //     var newRoom = document.querySelector(`[data-Xpos="${XnewRoom - 1}"][data-Ypos="${YnewRoom}"]`);
    //     //     newRoom.classList.toggle('room-block--normal');
    //     // }
    

    // };


function removeDangeon() {
    document.querySelectorAll('.room-block--notactive').forEach(item => {
        item.innerHTML = '';
        item.classList.remove('room-block--start');
        item.classList.remove('room-block--normal');
        item.classList.remove('room-block-startPos');
        item.classList.remove('room-block--boss');
        item.classList.remove('room-block--treasure-room');
        item.classList.remove('room-block--shop');
        item.classList.remove('room-block--arena');
        item.classList.remove('player-place');
    });
};

function startPosition() {

        let newRoom = document.querySelector(`[data-mid="${getRandomIntWithPercent(1, 4, 100)}"]`);
        newRoom.classList.remove('room-block--normal');
        newRoom.classList.add('player-place');
        newRoom.classList.add('room-block-startPos');
        newRoom.innerHTML = '<img src="IMG/ladder.svg" alt=""></img>';
    
    };

   
    // Генератор комнаты с боссом

function bossRoomGenerator() {
    
     let bossRoomAll = [];

    for (i = 1; i <= 16; i++) {

        if (document.querySelector(`[data-boss="${i}"]`).classList.contains('room-block--normal')) {
            bossRoomAll.push(document.querySelector(`[data-boss="${i}"]`));
        };

    };

    let allrooms = arrayRandElement(bossRoomAll);
    allrooms.classList.remove('room-block--normal');
    allrooms.classList.add('room-block--boss');
    allrooms.innerHTML = '<img src="IMG/skull.svg" alt=""></img>';

    eventRoom = arrayRandElement(bossRoomAll)
    if (!(eventRoom.classList.contains('room-block--boss'))) {

        switch ( getRandomIntWithPercent(0,3, 100)) {
            case 1:
                eventRoom.classList.remove('room-block--normal');
                eventRoom.classList.add('room-block--shop');
                eventRoom.innerHTML = '<img src="IMG/coin.svg" alt=""></img>';
            break;
            case 2:
                eventRoom.classList.remove('room-block--normal');
                eventRoom.classList.add('room-block--arena');
                eventRoom.innerHTML = '<img src="IMG/sword.svg" alt=""></img>';
            default:
            break;

        };
            

    };

};



// Генератор комнаты с сокровищами

function lootRoomGenerator(trasureNum = 1) {

    let allrooms = document.querySelectorAll('.room-block--normal');
    
    let i = 0;
    while (i < trasureNum) {
        let trasureRoom = arrayRandElement(allrooms);

        if (!(trasureRoom.classList.contains('room-block--boss'))) {
            trasureRoom.classList.remove('room-block--normal');
            trasureRoom.classList.add('room-block--treasure-room');
            trasureRoom.innerHTML = '<img src="IMG/star.svg" alt=""></img>';
            i++;
    
        }
    };

};

function mobGenerator() {
    let allRooms = [];
    let elements = document.getElementsByClassName('room-block--normal');

    for (let i = 0; i < elements.length; i++) {
        allRooms.push(elements[i]);
    };
    allRooms.forEach(elemen => {
        
        if (getRandomIntWithPercent(0, 100, 100) <= 20) {
            elemen.innerHTML = `<p class="text hidden">the room is empty</p>`;
            elemen.addEventListener('click', function(){

                const roomInfo = document.querySelector('.room-info');
                let mobInThisRoom = elemen.querySelectorAll('.text');
                let thisRoomID = elemen.id;
    
                roomInfo.innerHTML = '';
                roomInfo.innerHTML = `<p class="text">This ${thisRoomID} room</p>`;
    
                mobInThisRoom.forEach(element => {
    
                    let i = 0;
                    while (i <= element.children.length) {
    
                        roomInfo.innerHTML += `
                        <div class="flex" style="justify-content: space-between; margin-top:5px">
                        <p class="text" id="${element.id}">${element.innerText}</p>
                        </div>
                        `
                        i++;
    
                    };
                   
                });
                
                
            });
        } else {
            let mobNum = getRandomIntWithPercent(1, 3, 100);
            let i = 1;
            while (i <= mobNum) {
                let mob = getRandomIntWithPercent(1, 7, 100);
                let html;
                switch (mob) {
                    case 1:
                        html = `<p class="text hidden" id="Zombie">Zombie</p>`;
                        elemen.insertAdjacentHTML('beforeend', html);
                    break;
                    case 2:
                        html = `<p class="text hidden" id="Skeleton">Skeleton</p>`;
                        elemen.insertAdjacentHTML('beforeend', html);
                    break;
                    case 3:
                        html = `<p class="text hidden" id="Bat">Bat</p>`;
                        elemen.insertAdjacentHTML('beforeend', html);
                    break;
                    case 4:
                        html = `<p class="text hidden" id="Slime">Slime</p>`;
                        elemen.insertAdjacentHTML('beforeend', html);
                    break;
                    case 5:
                        html = `<p class="text hidden" id="Ghost">Ghost</p>`;
                        elemen.insertAdjacentHTML('beforeend', html);
                    break;
                    case 6:
                        html = `<p class="text hidden" id="Spider">Spider</p>`;
                        elemen.insertAdjacentHTML('beforeend', html);
                    break;
                    case 7:
                        html = `<p class="text hidden" id="Dead_Magician">Dead Magician</p>`;
                        elemen.insertAdjacentHTML('beforeend', html);
                    break;

                   
                };
                elemen.addEventListener('click', function(){

                    const roomInfo = document.querySelector('.room-info');
                    let mobInThisRoom = elemen.querySelectorAll('.text');
                    let thisRoomID = elemen.id;
        
                    roomInfo.innerHTML = '';
                    roomInfo.innerHTML = `<p class="text">This ${thisRoomID} room</p>`;
        
                    mobInThisRoom.forEach(element => {
        
                        let i = 0;
                        while (i <= element.children.length) {
        
                            roomInfo.innerHTML += `
                            <div class="flex" style="justify-content: space-between; margin-top:5px">
                            <p class="text" id="${element.id}">${element.innerText}</p>
                            <button class="kill-btn" id="${element.id}">Kill Him</button>
                            </div>
                            `
                            i++;
        
                        };

                    });
                    

                    const killBtn = document.querySelectorAll('.kill-btn');
                    killBtn.forEach(i => {
                        i.addEventListener('click', function(){
                            console.log(i.parentNode)
                            i.parentNode.innerHTML = '';
                        });
                    })

                });
                
                i++;
            };
    
        };
    
    });
    
};



// function fogOfWar() {
//     let i = 1;
//     document.querySelectorAll('.room-block--notactive').forEach(element => {
//         console.log(element.children)
//         if (element.childNodes.length) {
//             console.log(element.children)
//             element.firstChild.classList.add('hidden')
//             element.classList.add('fog');
//         } else {
//             element.classList.add('fog');
//         }
//         // element.children.classList.add('hidden')
//     })
//     // while (i <= 146) {
//     //     document.querySelectorAll
//     // }
// }


function playerMove() {

    const startPosition = document.querySelector('.room-block-startPos');
    console.log(startPosition)
    
}

document.onkeydown = checkKey;

function checkKey(e) {

    
    let playerPlace = document.querySelector('.player-place');

    let XstartRoom = Number(playerPlace.getAttribute('data-Xpos'));
    let YstartRoom = Number(playerPlace.getAttribute('data-Ypos'));



   

    e = e || window.event;

    if (e.keyCode == '38') {

        let YstartRoom = Number(playerPlace.getAttribute('data-Ypos'));
        let upRoom = document.querySelector(`[data-Xpos="${XstartRoom}"][data-Ypos="${YstartRoom}"]`);

        console.log(upRoom)
        if (upRoom.classList.contains('room-block--normal') || upRoom.classList.contains('room-block--start')) {
            let newRoom = document.querySelector(`[data-Xpos="${XstartRoom}"][data-Ypos="${YstartRoom + 1}"]`);
            newRoom.classList.add('player-place');
        }
        
            // newRoom.classList.add('player-place');
    }
    else if (e.keyCode == '40') {
        
        let YstartRoom = Number(playerPlace.getAttribute('data-Ypos')) + 1;
        let downRoom = document.querySelector(`[data-Xpos="${XstartRoom}"][data-Ypos="${YstartRoom}"]`);

        console.log(downRoom)
        if (downRoom.classList.contains('room-block--normal') || downRoom.classList.contains('room-block--start')) {
            let newRoom = document.querySelector(`[data-Xpos="${XstartRoom}"][data-Ypos="${YstartRoom - 1}"]`);
            
            newRoom.classList.add('player-place');
        }

    }
    else if (e.keyCode == '37') {
       // left arrow
       console.log('left')
    }
    else if (e.keyCode == '39') {
       // right arrow
       console.log('right')
    };

};