var debug_mode = true;
var students;
var theTable = "";

function table_gen(ar) {
  theTable = "<table class='data-table'>";
  if (debug_mode == true) {
    console.info("running table_gen()");
    console.time("time to load");
    console.log(ar);
    console.log("table width:", ar[0].length);
    console.log("table length:", ar.length);
  }
  for (var j = 0; j < ar.length; j++) {
    theTable += "<tr>";
    for (var k = 0; k < ar[0].length; k++) {
      theTable += "<td>" + ar[j][k] + "</td>";
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
  $("output-box").html(table_gen(students.age))
}

document.onload = $.getJSON("student_data.json", function(loaded_data) {
  console.log(loaded_data);
  students = loaded_data;
  load_data();
});
