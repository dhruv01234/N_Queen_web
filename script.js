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
    var img = document.createElement('img');
    img.src = "images/nqueen.png";
    img.width = "10%";
for(var i =0;i<boardSize;i++){
    board.appendChild(document.createElement('div'));
    var w = board.offsetWidth/boardSize;
    for (var j = 0; j < boardSize; j++) {
        var color = (i+j)%2==1?"teal":"white";
        var box = document.createElement('div');
        box.id = i*boardSize+j;
        board.children[i].appendChild(box);
        // board.children[i].children[j].appendChild(img);
        board.children[i].children[j].setAttribute(`style`,
        `
        width:${w}px;
        background-color:${color};
        `
        );
    }
    board.children[i].setAttribute('style',
    `display:flex;
    `
    );
}

} catch (error) {
    
}

var nQueen = new Array(boardSize);
for(var i =0;i<boardSize;i++){
    nQueen[i] = new Array(boardSize);
    for (var j = 0; j < boardSize; j++){
        nQueen[i][j] = false;
    }
}
try {
    board.addEventListener('click',(e)=>{
        var id = e.target.id;
        var box = document.getElementById(id);
        if(id[0]=='i'){
            id = id.slice(3,id.length);
        }
        var i = Math.floor(id/boardSize);
        var j = id-(i)*boardSize;
        var img = `<img src=images/nqueen.png width=1% id=img${id}>`;

        for(var k =0;k<boardSize;k++){
            if(j!=k)
            if(board.children[i].children[k].innerHTML!="") board.children[i].children[k].innerHTML="";
        }
        if(board.children[i].children[j].innerHTML==""){
            board.children[i].children[j].innerHTML=img;
        }
        else{
            board.children[i].children[j].innerHTML="";
    }
    });
    
} catch (error) {
    
}
