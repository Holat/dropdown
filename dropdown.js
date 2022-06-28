const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.list');
const down = document.querySelectorAll('.down');
const up = document.querySelectorAll('.up');



open.addEventListener('click', function(){
    nav.classList.add('show-nav');
});
close.addEventListener('click', function(){
    nav.classList.remove('show-nav');
    removeLinks()
});

down.forEach(function(item){
    item.addEventListener('click',function(e){
        removeLinks()
        const link = e.currentTarget.parentElement.parentElement.parentElement;
        link.classList.add('show-links');
    });
});
up.forEach(function(item){
    item.addEventListener('click',function(e){
        const link = e.currentTarget.parentElement.parentElement.parentElement;
        link.classList.remove('show-links')
    });
});
function removeLinks(){
    links.forEach(function(link){
        link.classList.remove('show-links');
    });
};
