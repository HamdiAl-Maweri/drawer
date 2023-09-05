let thiscolor='';

function color(color) {
  thiscolor = color;
}

function colorize(sq) {
    if (thiscolor !== '') {
      console.log(thiscolor)
    sq.style="background-color:"+thiscolor+";";
  }
}

function resetGrid() {
  var gridItems = document.getElementsByClassName('items');
  for (var i = 0; i < gridItems.length; i++) {
    gridItems[i].style="background-color:white;";
  }
}
function riser() {
    thiscolor='white'
  }