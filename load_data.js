var debug_mode = true;
var students;
var theTable = "";

function table_gen(ar, headers = null) {
  theTable = "<table class='data-table'>";
  var height = ar.length;
  var width = ar[0].length;
  console.info("running table_gen()");
  console.time("time to load");
  console.log(ar);
  console.info("table width:", width);
  console.info("table height:", height);
  console.info("header count:", headers.length);

  if (headers !== null) {
    if (headers.length == width) {
      console.info("horizontal data format");

      theTable += "<tr>";
      for (var j = 0; j < width; j++) {
        theTable += "<th class='tooltip' title='" + headers[1][j] + "'>" + headers[0][j] + "</th>";
      }
      theTable += "</tr>";

      for (var j = 0; j < height; j++) {
        theTable += "<tr>";
        for (var k = 0; k < width; k++) {
          theTable += "<td id='" + headers[0][k] + "'>" + ar[j][k] + "</td>";
          console.group();
          console.info("row " + (j + 1) + ", column " + (k + 1));
          console.info(ar[j][k]);
          console.groupEnd();
        }
        theTable += "</tr>";
      }
    } else {
      console.info("vertical data format");

      theTable += "<tr>";
      for (var j = 0; j < height; j++) {
        theTable += "<th class='tooltip' title='" + headers[1][j] + "'>" + headers[0][j] + "</th>";
      }
      theTable += "</tr>";

      for (var j = 0; j < width; j++) {
        theTable += "<tr>";
        for (var k = 0; k < height; k++) {
          theTable += "<td id='" + headers[0][j] + "'>" + ar[k][j] + "</td>";
          console.group();
          console.info("row " + (k + 1) + ", column " + (j + 1));
          console.info(ar[k][j]);
          console.groupEnd();
        }
        theTable += "</tr>";
      }
    }
  } else {
    for (var j = 0; j < height; j++) {
      theTable += "<tr>";
      for (var k = 0; k < width; k++) {
        theTable += "<td>" + ar[j][k] + "</td>";
        console.group();
        console.info("row " + (j + 1) + ", column " + (k + 1));
        console.info(ar[j][k]);
        console.groupEnd();
      }
      theTable += "</tr>";
    }
  }

  theTable += "</table>";
  console.timeEnd("time to load");
  console.groupCollapsed();
  console.log("theTable", theTable);
  console.groupEnd();
  return theTable;
}

function load_data() {
  console.log("students", students);
  $(".output-box").html(table_gen(students.data, students.headers));
}

document.onload = $.getJSON("student_data_v.json", function(loaded_data) {
  console.log(loaded_data);
  students = loaded_data;
  load_data();
});
