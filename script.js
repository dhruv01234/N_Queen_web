const boardSize = localStorage.getItem("boardSize");
const board = document.getElementById('board');

try {
    const lvl = document.body.getElementsByClassName('levels')[0].children;
    var c1 = lvl[0];
    var c2 = lvl[1];
    var c3 = lvl[2];
    var c4 = lvl[3];
    var c5 = lvl[4];
    var c6 = lvl[5];
    var c7 = lvl[6];
    c1.addEventListener('click',()=>{
        setboardsize(c1.id);
    })
    c2.addEventListener('click',()=>{
        setboardsize(c2.id);
    })
    c3.addEventListener('click',()=>{
        setboardsize(c3.id);
    })
    c4.addEventListener('click',()=>{
        setboardsize(c4.id);
    })
    c5.addEventListener('click',()=>{
        setboardsize(c5.id);
    })
    c6.addEventListener('click',()=>{
        setboardsize(c6.id);
    })
    c7.addEventListener('click',()=>{
        setboardsize(c7.id);
    })    
} 
catch (error) {

}
function play(){
    window.location.href=('levels.html');
}

function setboardsize(i){
    window.location.href = 'play.html';
    localStorage.setItem('boardSize',i);
}
try {
    
for(var i =0;i<boardSize;i++){
    board.appendChild(document.createElement('div'));
    var w = board.offsetWidth/boardSize;
    for (var j = 0; j < boardSize; j++) {
        var color = (i+j)%2==1?"teal":"white";
        board.children[i].appendChild(document.createElement('div'));
        board.children[i].children[j].innerHTML = i+","+j;
        board.children[i].children[j].setAttribute(`style`,
        `
        width:${w}px;
        background-color:${color};
        `
        );
    }
    console.log(board.children[i].children)
    board.children[i].setAttribute('style',
    `display:flex;
    `
    );
}

} catch (error) {
    
}

