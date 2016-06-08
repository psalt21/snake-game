$(document).ready(function(){
  // Canvas stuff
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var w = $('#canvas').width();
  var h = $('#canvas').height();

  // Lets save the cell width in a variable for easy control
  var cw = 10;

  // Lets paint the canvas now
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, w, h);

  var square_array;

  create_square();
  function create_square(){
    var length = 5;
    var row = 20;
    var col = 20;
    square_array = [];

    for(var i = col; i < (col + length); i++){
      square_array.push({x: i, y: row});
    }
    while(row < col + length - 1){
      row++;
      square_array.push({x: col, y: row});
      square_array.push({x: col + length - 1, y: row});
    }
    for(var i = col; i < (col + length); i++){
      square_array.push({x: i, y: row});
    }
  }

  function paint(){
    for(var i = 0; i < square_array.length; i++){
      var c = square_array[i];
      ctx.fillStyle = 'blue';
      ctx.fillRect(c.x*cw, c.y*cw, cw, cw);
      ctx.strokeStyle = 'white';
      ctx.strokeRect(c.x*cw, c.y*cw, cw, cw);
    }
  }
  paint();

});
