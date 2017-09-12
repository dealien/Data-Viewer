var debug_mode = true;
var students;
var theTable = "";

function load_data() {
  
}

document.onload = $.getJSON("student_data.json", function(json) {
    console.log(json); // this will show the info it in firebug console
load_data();});


