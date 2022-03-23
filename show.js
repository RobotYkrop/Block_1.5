const open = document.querySelector('.brands__list--expand');
const close = document.querySelector('.brands__list--hidden');
const slider = [...document.querySelectorAll('.brands__list--slider:nth-child(n+7)')];
    
            function toggleModal() {
                slider.forEach(slider => {
                    open.addEventListener('click', () => {
                        slider.style.display = 'flex';
                        open.style.display = 'none';
                        close.style.display='block';
                    })
                    close.addEventListener('click', () => {
                        slider.style.display = 'none';
                        open.style.display = 'block';
                        close.style.display = 'none';
                    })
                })
            }
