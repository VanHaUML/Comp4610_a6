/*
	 File: https://vanhauml.github.io/Comp4610_a6/js/mtable.js
	 Assignment 6: Creating An Interactive Dynamic Table
	 Course: COMP4610 GUI I
	 Name: Van Ha, Senior UMass Lowell EE/CS Student
	 Email: van_ha@student.uml.edu
	 Copyright 2018 by Van Ha
	 Date Updated: 11/15/2018

    Javascript file for Interactive Dynamic Table page.
*/

/* creates multiplication table */
function makeTable() {
   var xLow = parseInt(document.getElementById("lowColVal").value);
   var xHigh = parseInt(document.getElementById("highColVal").value);
   var yLow = parseInt(document.getElementById("lowRowVal").value);
   var yHigh = parseInt(document.getElementById("highRowVal").value);

   clearAll();
   var addition = "";
   

   /* validates correct input type */
   var isNumbers = Number.isInteger(xLow) && Number.isInteger(xHigh) && Number.isInteger(yLow) && Number.isInteger(yHigh);
   if (isNumbers == false) {
       addition += "Invalid Input: Not a number detected.";
       writeOut(addition);
       return;
    }
    else {
        /* validation for correct input range */
        if (xLow > xHigh && yLow > yHigh) {
            addition += "Invalid Values: Low Values must be lower than High Values.";
            writeOut(addition);
            return;
        }
        else if (xLow > xHigh) {
            addition += "Invalid: Low Column Value is greater than High Column Value.";
            writeOut(addition);
            return;
            }
        else if (yLow > yHigh) {
                addition += "Invalid: Low Row Value is greater than High Row Value.";
                writeOut(addition);
                return;
            }

            addition += "<table>";

            for (var i = yLow - 1; i <= yHigh; i++) {

                addition += "<tr>";

                for (var j = xLow - 1; j <= xHigh; j++) {
                    if (i < yLow && j < xLow) {
                        addition += "<th></th>";
                    }
                    else if (i < yLow) {
                        addition += "<th>" + j + "</th>";
                    }
                    else if (j < xLow) {
                        addition += "<th>" + i + "</th>";
                    }
                    else {
                        addition += "<td>" + (i * j) + "</td>";
                    }
                }

                addition += "</tr>";
            }
            addition += "</table>";
            writeOut(addition);
    }
}

/* writes to HTML file */
function writeOut(add) {
    document.getElementById("table").innerHTML = add;
}

/* clears section of HTML javascript writes to*/
function clearAll() {
    writeOut("");
}