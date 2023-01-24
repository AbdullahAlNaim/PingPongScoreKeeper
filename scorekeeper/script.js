const leftScore = document.querySelector('#leftScore');
const rightScore = document.querySelector('#rightScore');
const score = document.querySelector('#gamescore')
const oneplayer = document.querySelector('#playerone');
const twoplayer = document.querySelector('#playertwo');
const reset = document.querySelector('#resetter');

oneplayer.addEventListener('click', () => {
    leftScore.innerText++;
    let goal = parseInt(score.value);
    let L = parseInt(leftScore.innerText);
    if (L === goal) {
        leftScore.style.color = 'green';
        rightScore.style.color = 'red';
        console.log('left won');
        oneplayer.disabled = true;
        twoplayer.disabled = true;
    }
})

twoplayer.addEventListener('click', () => {
    rightScore.innerText++;
    let goal = parseInt(score.value);
    let R = parseInt(rightScore.innerText);
    if (R === goal) {
        rightScore.style.color = 'green';
        leftScore.style.color = 'red';
        console.log('right won');
        oneplayer.disabled = true;
        twoplayer.disabled = true;
    }
})

reset.addEventListener('click', () => {
    leftScore.innerText = 0;
    rightScore.innerText = 0;
    rightScore.style.color = 'black';
    leftScore.style.color = 'black';
    oneplayer.disabled = false;
    twoplayer.disabled = false;
})


score.addEventListener('change', () => {
    let goal = parseInt(score.value);
})

