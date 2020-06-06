var rnd1 = Math.floor(Math.random() * 6) + 1;
var rnd2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('.img1').setAttribute('src','images/dice'+String(rnd1)+'.png');
document.querySelector('.img2').setAttribute('src','images/dice'+String(rnd2)+'.png');

if (rnd1 > rnd2){
    document.querySelector('div.container h1').textContent = 'Player 1 Wins';
}

else if (rnd1 < rnd2) {
    document.querySelector('div.container h1').textContent = 'Player 2 Wins'
}

else {
    document.querySelector('div.container h1').textContent = 'Draw'
}

