const hex = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const colorText = document.querySelector('.color');
const btn = document.getElementById('btn');



btn.addEventListener('click', function(){
    let colorHex = '#';

    for(i = 0; i < 6; i++){
        colorHex += hex[randomHexGenerator()];
    };
    document.body.style.backgroundColor = colorHex;
    colorText.innerHTML = colorHex;
});

function randomHexGenerator(){
    return Math.floor(Math.random() * hex.length);
};