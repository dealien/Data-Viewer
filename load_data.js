var debug_mode = true;
var students;
var theTable = "";

function load_data() {
  
}

document.onload = $.getJSON("student_data.json", function(loaded_data) {
    console.log(loaded_data); 
load_data();});


