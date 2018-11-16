/*
	 File: a6/js/mtable.js
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
   var xLow = document.getElementById("lowColVal").value;
   var xHigh = document.getElementById("highColVal").value;
   var yLow = document.getElementById("lowRowVal").value;
   var yHigh = document.getElementById("highRowVal").value;
   var addition = "";
   writeOut(addition);

   /* validation for correct input range */
   if (xLow > xHigh && yLow > yHigh) {
       addition += "Invalid Values: Low Values must be lower than High Values.";
       writeOut(addition);
   }
   else if (xLow > xHigh) {
       addition += "Invalid: Low Column Value is greater than High Column Value.";
       writeOut(addition);
    }
   else if (yLow > yHigh) {
        addition += "Invalid: Low Row Value is greater than High Row Value.";
        writeOut(addition);
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

/* writes to HTML file */
function writeOut(add) {
    document.getElementById("table").innerHTML = add;
}