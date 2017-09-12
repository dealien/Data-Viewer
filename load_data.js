var debug_mode = true;
var students;
var theTable = "";

function table_gen(ar) {
  theTable = "";
  if (debug_mode == true) {
    console.info('running table_gen()');
    console.log(ar);
    console.log("table width:", ar[0].length);
    console.log("table length:", ar.length);
  }
  for (var j = 0; j < ar[0].length; j++) {
    theTable += "<tr>";
    for (var k = 0; k < ar.length; k++) {
      theTable += "<td>" + ar[j][k] + "</td>";
      if (debug_mode == true) {
        console.info("row " + j + ", column " + k)
        // console.log(theTable);}
      }
      theTable += "</tr>";
    }
    if (debug_mode == true) {
      // console.log("theTable", theTable);
    }
  }
  return theTable;
}

function load_data(data) {
  console.log("students", students);
  console.log("data", data);
}

document.onload = $.getJSON("student_data.json", function(loaded_data) {
  console.log(loaded_data);
  students = loaded_data;
  load_data(loaded_data);
});
