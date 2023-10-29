

const personBtn = document.querySelectorAll('[data-person-btn]');

const infoBlock = document.querySelector('.class-info__content');


personBtn.forEach( function(item){
    item.addEventListener('mouseover', function(){
        const personId = item.id;
        document.querySelector("." + personId).classList.toggle('hidden')
    });
    item.addEventListener('mouseout', function(){
        const personId = item.id;
        document.querySelector("." + personId).classList.toggle('hidden')
    });
});