var debug_mode = true;
var students;
var theTable = "";

function table_gen(ar) {
  console.info('running table_gen()');
  theTable = "";
  if (debug_mode == true) {
    console.log("Starting table_gen()");
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

function load_data() {
  
}

document.onload = $.getJSON("test.json", function(json) {
    console.log(json); // this will show the info it in firebug console
load_data();});


