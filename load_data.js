var debug_mode = true;
var students;
var theTable = "";

function table_gen(ar, headers = null) {
  theTable = "<table class='data-table'>";
  var length = ar.length;
  var width = ar[0].length;
  console.info("running table_gen()");
  console.time("time to load");
  console.log(ar);
  console.info("table width:", width);
  console.info("table height:", length);

  if (headers !== null) {
    theTable += "<tr>";
    for (var j = 0; j < width; j++) {
      theTable += "<th class='tooltip' title='" + headers[1][j] + "'>" + headers[0][j] + "</th>";
    }
    theTable += "</tr>";
  }

  if (headers.length = width) {
    for (var j = 0; j < length; j++) {
      theTable += "<tr>";
      for (var k = 0; k < width; k++) {
        if (headers !== null) {
          theTable += "<td id='" + headers[0][k] + "'>" + ar[j][k] + "</td>";
        } else {
          theTable += "<td>" + ar[j][k] + "</td>";
        }
        console.group();
        console.info("row " + (j + 1) + ", column " + (k + 1));
        console.info(ar[j][k]);
        console.groupEnd();
      }
      theTable += "</tr>";
    }
  } else {
    for (var j = 0; j < width; j++) {
      theTable += "<tr>";
      for (var k = 0; k < length; k++) {
        if (headers !== null) {
          theTable += "<td id='" + headers[0][j] + "'>" + ar[k][j] + "</td>";
        } else {
          theTable += "<td>" + ar[k][j] + "</td>";
        }
        console.group();
        console.info("row " + (k + 1) + ", column " + (j + 1));
        console.info(ar[k][j]);
        console.groupEnd();
      }
      theTable += "</tr>";
    }
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
