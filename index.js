const yesBtn= document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Ya sabia que aceptarias UwU. Te amo mucho <3 (Me demore un chingo en hacer esto, literal xd <3)')
})

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100)
    const randomY = parseInt(Math.random()*100)
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
