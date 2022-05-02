var winner = false
var nodeListMain = document.getElementsByClassName("box");
var arrMain = Array.from(nodeListMain);
var arrMain2D = [];

//converting 2D array to 3D
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

start();

function start() {
    if (!winner) {
        clearall();
        //eventlistner
        for (let i = 0; i < arrMain2D.length; i++) {
            for (let j = 0; j < arrMain2D.length; j++) {
                arrMain2D[i][j].addEventListener("click", function () { check(i, j, this) });
            }
        }

        function check(row, col, ele) {
            var now = parseInt(ele.innerHTML)
            arrRow.push(row);
            arrCol.push(col);
            if (now % 2 == 0) {
                arrDiag.push(now);
            }

            count++;
            ele.style = "background-color : white";

            if (count > 2) {
                dekhoRow(row);
                dekhoCol(col);
                if (now % 2 == 0) {
                    dekhoDiag();
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
                cnt = 0
                alert("winner player1");
                winner = false;
                start();
            }
        }

        function dekhoCol(temp) {
            let cnt = 0;
            for (let i = 0; i < arrCol.length; i++) {
                if (arrCol[i] == temp) {
                    cnt++
                }
            }
            if (cnt == 3) {
                cnt = 0
                alert("winner player1");
                winner = false;
                start();
            }
        }

        function dekhoDiag() {
            console.log(accepted1);
            console.log(arrDiag);

            let res1 = accepted1.every(e => arrDiag.includes(e));
            let res2 = accepted2.every(e => arrDiag.includes(e));

            //same as above
            // let res = false;
            // for (let i = 0; i < accepted1.length; i++) {
            //     for (let j = 0; j < arrDiag.length; j++) {
            //         if (accepted1[i]==arrDiag[j]) {
            //             res = true;
            //             break;
            //         }
            //         else res = false;
            //     }
            //     if (!res)   break;
            // }

            if (res1 == true || res2 == true) {
                alert("winner player1 diag");
                winner = false;
                start();
            }
        }

        function clearall() {
            //player1
            count = 0;
            arrPlayer = [];
            arrRow = [];
            arrCol = [];
            arrDiag = [];

            //player2
            count2 = 0;
            arrPlayer2 = [];
            arrRow2 = [];
            arrCol2 = [];
            arrDiag2 = [];

            for (let i = 0; i < arrMain.length; i++) {
                arrMain[i].style = "background-color : rgb(58, 58, 58)";
            }
        }
    }
}