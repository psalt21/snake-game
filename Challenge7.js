$(document).ready(function(){
  // Canvas stuff
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var w = $('#canvas').width();
  var h = $('#canvas').height();

  var cw = 50;

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, w, h);

  function create_food(){
    // add the functionality that makes the food and puts it in a random spot
    var square = {
      x: Math.round(Math.random() * (w-cw)/cw),
      y: Math.round(Math.random() * (h-cw)/cw),
      color: getRandomColor()
    };

    paint_cell(square);
  }
  // var colors = ['green', 'yellow', 'red'];
  // var d = '';

  function getRandomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for(var i = 0; i < 6; i++){
      color == letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function paint_cell(obj){
    ctx.fillStyle = obj.color;
    ctx.fillRect(obj.x*cw, obj.y*cw, cw, cw);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(obj.x*cw, obj.y*cw, cw, cw);
  }

  paintloop = setInterval(create_food, 1);

})
