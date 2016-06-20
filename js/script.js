// loop
var count = 0;
var list = '';

while (count < 2) {
  list += '<li>current count is: ' + count + '</li>';
  count += 1;
  window.open("http://greenbergz.github.io/loops-arrays");
}

// output results
document.write("<h1>Loops</h1>");
document.write("<ol>" + list + "</ol>");

/*var myItems=[
  ["question one", "answer one"],
  ["question two", "answer two"]
]
var secondList = "<ul>";
var i =0;
while(i<myItems.length){
  document.write("<p>" + myItems[i] + "</p>");

  i++;
}

secondList += "<ul>";
document.write(secondList);
*/
