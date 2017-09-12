var debug_mode = true;
var students;
var theTable = "";

function load_data(data) {
  console.log("students", students);
  console.log("data", data);
}

document.onload = $.getJSON("student_data.json", function(loaded_data) {
    console.log(loaded_data);
  students = loaded_data;
load_data(loaded_data);});
