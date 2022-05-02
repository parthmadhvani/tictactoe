//var winner = false
var nodeListMain = document.getElementsByClassName("box");
var arrMain = Array.from(nodeListMain);
var arrMain2D = [];
var arrMain2D_2 = [];

//converting 2D array to 3D
arrMain2D.push(arrMain.slice(0, 3));
arrMain2D.push(arrMain.slice(3, 6));
arrMain2D.push(arrMain.slice(6, 9));

arrMain2D_2.push(arrMain.slice(0, 3));
arrMain2D_2.push(arrMain.slice(3, 6));
arrMain2D_2.push(arrMain.slice(6, 9));

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

player1();

function player1() {
    //if (!winner) {
        //clearall();
        //eventlistner
        for (let i = 0; i < arrMain2D.length; i++) {
            for (let j = 0; j < arrMain2D.length; j++) {
                arrMain2D[i][j].addEventListener("click", function () { check(i, j, this) });
            }
        }

        function check(row, col, ele) {
            count++;
            ele.style = "background-color : white";
            var now = parseInt(ele.innerHTML);
            arrRow.push(row);
            arrCol.push(col);
            //console.log("row in check ="+arrRow);

            if (now % 2 == 0) {
                arrDiag.push(now);
            }

            // console.log(count);
            console.log("player1 = "+arrRow);
            if (count > 2) {
                if (now % 2 == 0) {
                    dekhoDiag();
                    dekhoRow(row);
                    dekhoCol(col);
                }
                else{
                    dekhoRow(row);
                    dekhoCol(col);
                }
            }
            else player2()
        }   

        function dekhoRow(temp) {
            
            let cnt = 0;
            for (let i = 0; i < arrRow.length; i++) {
                if (arrRow[i] == temp) {
                    cnt++
                }
            }

            // console.log("row in dekh ="+arrRow);
            // console.log('temp='+temp);
            // console.log("cnt = "+cnt);

            if (cnt == 3) {
                //cnt = 0
                alert("winner player1 row");
                //winner = false;
                //restart();
                location.reload(true)
            }
            else player2()
        }

        function dekhoCol(temp) {
           
            let cnt = 0;
            for (let i = 0; i < arrCol.length; i++) {
                if (arrCol[i] == temp) {
                    cnt++
                }
            }
            if (cnt == 3) {
                //cnt = 0
                alert("winner player1 col");
                //winner = false;
                //restart();
                location.reload(true)
            }
            else player2()
        }

        function dekhoDiag() {

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
                //winner = false;
                //restart();
                location.reload(true)
            }
            else player2()
        }
    //}
}



function player2() {
    //if (!winner) {
        for (let i = 0; i < arrMain2D_2.length; i++) {
            for (let j = 0; j < arrMain2D_2.length; j++) {
                arrMain2D_2[i][j].addEventListener("click", function () { check2(i, j, this) });
            }
        }

        function check2(row, col, ele) {

            var now2 = parseInt(ele.innerHTML)
            arrRow2.push(row);
            arrCol2.push(col);
            // console.log("row in check ="+arrRow);

            if (now2 % 2 == 0) {
                arrDiag2.push(now2);
            }

            count2++;
            ele.style = "background-color : red";

            //console.log(count2);
            console.log("player2 = "+arrRow2);
            if (count2 > 2) {
                if (now2 % 2 == 0) {
                    dekhoDiag2();
                    dekhoRow2(row);
                    dekhoCol2(col);
                }
                else{
                    dekhoRow2(row);
                    dekhoCol2(col);
                }
            }
            else player1()
        }   

        function dekhoRow2(temp) {
            
            let cnt = 0;
            for (let i = 0; i < arrRow2.length; i++) {
                if (arrRow2[i] == temp) {
                    cnt++
                }
            }

            // console.log("row in dekh ="+arrRow2);
            // console.log('temp='+temp);
            // console.log("cnt = "+cnt);

            if (cnt == 3) {

                alert("winner player2 row");
            
                location.reload(true)
            }
            else player1()
        }

        function dekhoCol2(temp) {
            
            let cnt = 0;
            for (let i = 0; i < arrCol2.length; i++) {
                if (arrCol2[i] == temp) {
                    cnt++
                }
            }
            if (cnt == 3) {

                alert("winner player2 col");
         
                location.reload(true)
            }
            else player1()
        }

        function dekhoDiag2() {

            let res1 = accepted1.every(e => arrDiag2.includes(e));
            let res2 = accepted2.every(e => arrDiag2.includes(e));



            if (res1 == true || res2 == true) {
                alert("winner player2 diag");
                
                location.reload(true)
            }
            else player1()
        }

    //}
}