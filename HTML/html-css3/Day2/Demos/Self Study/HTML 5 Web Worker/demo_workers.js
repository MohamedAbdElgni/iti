var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount(); 

//the postMessage() method - which is used to post a message back to the HTML page.
//https://www.w3schools.com/html/html5_webworkers.asp