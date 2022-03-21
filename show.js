const open = document.querySelector('.brands__list--expand');
const close = document.querySelector('.brands__list--hidden');
let slider = document.querySelectorAll('.brands__list--slider:nth-child(n+7)');

    close.addEventListener('click', () => {
        console.log('click');
        for(let i = 0; i < slider.length; i++){
            slider[i].style.display='none'; 
            open.style.display='block'
            close.style.display='none'
        }
    });

    open.addEventListener('click', function () {
        console.log('click');
        for(let i = 0; i < slider.length; i++){
            slider[i].style.display='flex';
            close.style.display='block'
            open.style.display='none'
        }
    });
