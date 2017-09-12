var debug_mode = true;
var students;
var theTable = "";

function table_gen(ar, headers = null) {
  theTable = "<table class='data-table'>";
  console.info("running table_gen()");
  console.time("time to load");
  console.log(ar);
  console.info("table width:", ar[0].length);
  console.info("table length:", ar.length);

  if (headers !== null) {
    theTable += "<tr>";
    for (var j = 0; j < ar.length; j++) {
      theTable += "<th class='tooltip' title='" + headers[1][j] + "'>" + headers[0][j] + "</th>";
    }
    theTable += "</tr>";
  }

  for (var j = 0; j < ar.length; j++) {
    theTable += "<tr>";
    for (var k = 0; k < ar[0].length; k++) {
      if (headers !== null) {
        theTable += "<td id='" + headers[1][j] + "'>" + ar[j][k] + "</td>";
      } else {
        theTable += "<td>" + ar[j][k] + "</td>";
      }
      console.info("row " + j + ", column " + k);
    }
    theTable += "</tr>";
  }

  theTable += "</table>";
  console.timeEnd("time to load");
  console.log(theTable);
  return theTable;
}

function load_data() {
  console.log("students", students);
  $(".output-box").html(table_gen(students.data, students.headers));
}

document.onload = $.getJSON("student_data.json", function(loaded_data) {
  console.log(loaded_data);
  students = loaded_data;
  load_data();
});
