// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


tableData.forEach(function(UFOReport) {
   //console.log(UFOReport);
   var row = tbody.append("tr"); 
   Object.entries(UFOReport).forEach(function([key, value]) {
     //console.log(key, value);
     var cell = row.append("td");
     cell.text(value);
    });
});

var button = d3.select("#filter-btn");
button.on("click", runEnter);
var form = d3.select("#form");
form.on("submit",runEnter);

function runEnter() {

    d3.event.preventDefault();
    
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
  
    //console.log(inputValue);
  
    var filteredData = tableData.filter(UFO => UFO.datetime === inputValue);
  
    console.log(filteredData);

    tbody.html("");

    filteredData.forEach(function(UFOtime) {
        //console.log(UFOReport);
        var row = tbody.append("tr"); 
        Object.entries(UFOtime).forEach(function([key, value]) {
          //console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
         });
    });
};