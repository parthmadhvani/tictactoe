var nodeListMain = document.getElementsByClassName("box");
var arrMain = Array.from(nodeListMain);
var arrMain2D = [];
var player = 1;
var rowName;
var selected = [];

//converting 1D array to 2D
arrMain2D.push(arrMain.slice(0, 3));
arrMain2D.push(arrMain.slice(3, 6));
arrMain2D.push(arrMain.slice(6, 9));

//player1
var count = 0;
var arrPlayer = [];
var arrRow = [];
var arrCol = [];
var arrDiag = [];

//player2
var count2 = 0;
var arrPlayer2 = [];
var arrRow2 = [];
var arrCol2 = [];
var arrDiag2 = [];

//accepted diagonal array for check
const accepted1 = [0, 4, 8]
const accepted2 = [2, 4, 6]
// document.querySelector("p").innerHTML = "Player 1";

for (let i = 0; i < arrMain2D.length; i++) {
    for (let j = 0; j < arrMain2D.length; j++) {
        arrMain2D[i][j].addEventListener("click", function () { check(i, j, this) });
    }
}

function check(row, col, ele) {
    if (!selected.includes(ele.innerHTML)) {
        selected.push(ele.innerHTML)
        count++;
        console.log(count);
        if (count >= 9) {
            location.reload(true);
        }
        if (player == 1) {
            //count++;
            let para = document.querySelector("p");
            para.innerHTML = "Player 2";
            para.style = "color: #F30A49"
            ele.style = "background-color : #04879C";
            //ele.innerHTML = "0";
            var now = parseInt(ele.innerHTML);

            arrRow.push(row);
            arrCol.push(col);

            if (now % 2 == 0) {
                arrDiag.push(now);
                dekhoDiag();
                dekhoRow(row);
                dekhoCol(col);
            }
            else {
                dekhoRow(row);
                dekhoCol(col);
            }
        }

        else {
            //count++;
            let para = document.querySelector("p")
            para.innerHTML = "Player 1";
            para.style = "color: #04879C"
            ele.style = "background-color : #F30A49";
            var now2 = parseInt(ele.innerHTML);

            arrRow2.push(row);
            arrCol2.push(col);

            if (now2 % 2 == 0) {
                arrDiag2.push(now2);
                dekhoDiag2();
                dekhoRow2(row);
                dekhoCol2(col);
            }
            else {
                dekhoRow2(row);
                dekhoCol2(col);
            }
        }
    }

}


function dekhoRow(temp) {

    let cnt = 0;
    for (let i = 0; i < arrRow.length; i++) {
        if (arrRow[i] == temp) {
            cnt++
        }
    }
    if (cnt == 3) {
        winner("Player 1")
    }
    else player = 2
}

function dekhoCol(temp) {

    let cnt = 0;
    for (let i = 0; i < arrCol.length; i++) {
        if (arrCol[i] == temp) {
            cnt++
        }
    }
    if (cnt == 3) {
        winner("Player 1")
    }
    else player = 2
}

function dekhoDiag() {

    let res1 = accepted1.every(e => arrDiag.includes(e));
    let res2 = accepted2.every(e => arrDiag.includes(e))
    console.log(arrDiag);
    if (res1 == true || res2 == true) {
        winner("Player 1")
    }
    else player = 2
}


function dekhoRow2(temp) {

    let cnt = 0;
    for (let i = 0; i < arrRow2.length; i++) {
        if (arrRow2[i] == temp) {
            cnt++
        }
    }
    if (cnt == 3) {
        winner("Player 2")
    }
    else player = 1
}

function dekhoCol2(temp) {

    let cnt = 0;
    for (let i = 0; i < arrCol2.length; i++) {
        if (arrCol2[i] == temp) {
            cnt++
        }
    }
    if (cnt == 3) {
        winner("Player 2")
    }
    else player = 1
}

function dekhoDiag2() {
    //console.log(arrDiag2);
    let res1 = accepted1.every(e => arrDiag2.includes(e));
    let res2 = accepted2.every(e => arrDiag2.includes(e));

    if (res1 == true || res2 == true) {
        winner("Player 2")
    }
    else player = 1
}

function winner(player) {
    setTimeout(doThis, 0)
    function doThis() {
        document.querySelector("p").innerHTML = player + " wins";
        document.querySelector("p").style = "color : #EAEA7F";
        document.querySelector("body").style = "background-color : #142F43";
    }
    setTimeout(function () {
        location.reload(true);
    }, 2000)
    //location.reload(true)
}