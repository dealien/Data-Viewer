var debug_mode = true;
var students;
var theTable = "";

function table_gen(ar, headers = null) {
  theTable = "<table class='data-table'>";
  if (debug_mode == true) {
    console.info("running table_gen()");
    console.time("time to load");
    console.log(ar);
    console.log("table width:", ar[0].length);
    console.log("table length:", ar.length);
  }
  for (var j = 0; j < ar.length; j++) {
    if (headers !== null) {
      theTable += "<tr class='tooltip' title='" + headers[1][j] + "'>" + headers[0][j] + "</tr><tr>";
    } else {
      theTable += "<tr>";
    }
    for (var k = 0; k < ar[0].length; k++) {
      if (headers !== null) {
        theTable += "<td id='" + headers[1][j] + "'>" + ar[j][k] + "</td>";
      } else {
        theTable += "<td>" + ar[j][k] + "</td>";
      }
      if (debug_mode == true) {
        console.info("row " + (j + 1) + ", column " + (k + 1))
        // console.log(theTable);
      }
      theTable += "</tr>";
    }
    if (debug_mode == true) {
      // console.log("theTable", theTable);
    }
  }
  theTable += "</table>"
  console.timeEnd("time to load");
  return theTable;
}

function load_data() {
  console.log("students", students);
  $(".output-box").html(table_gen(students.age, students.headers))
}

document.onload = $.getJSON("student_data.json", function(loaded_data) {
  console.log(loaded_data);
  students = loaded_data;
  load_data();
});
