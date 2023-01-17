const boardSize = localStorage.getItem("boardSize");
const board = document.getElementById('board');
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    var nQueen = new Array(boardSize);
    var counter = 0;
for(var i =0;i<boardSize;i++){
    nQueen[i] = new Array(boardSize);
    for (var j = 0; j < boardSize; j++){
        if(board.children[i].children[j].innerHTML==""){
            nQueen[i][j] = false;
        }
        else{
            nQueen[i][j] = true;
            counter++;
        }
    }
}
if(counter<boardSize){
    alert(`place ${boardSize} Queen in total`);
}
else{
var a = true;
for(var i =0;i<boardSize;i++){
    var y = 0;
    for (var j = 0; j < boardSize; j++){
        if(nQueen[i][j]==true){
            var res = checkNqueen(nQueen,boardSize,i,j);
            if(res==true){
                y=1;
                alert('wrong ans');
                a = false;
                break;
            }
        }
    }
    if(y==1) break;
}

if(a==true) alert('correct ans');

for(var i =0;i<boardSize;i++){
    for (var j = 0; j < boardSize; j++){
        board.children[i].children[j].innerHTML="";
    }
}
}
});

function checkNqueen(nQueen,n,i,j){
    for(var k=0;k<n;k++){
        if(k!=j && nQueen[i][k]==true) return true;
    }
    for(var k=0;k<n;k++){
        if(k!=i && nQueen[k][j]==true) return true;
    }
    var a = i+1;
    var b=j+1;
    while(a<n && b<n) if(nQueen[a++][b++]==true) return true;
    a = i+1,b=j-1;
    while(a<n && b>=0) if(nQueen[a++][b--]==true) return true;
    a = i-1,b=j-1;
    while(a>=0 && b>=0) if(nQueen[a--][b--]==true) return true;
    a = i-1,b=j+1;
    while(a>=0 && b<n) if(nQueen[a--][b++]==true) return true;
    return false;
}

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
