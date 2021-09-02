
function draw() {
    var canvas = document.getElementById('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas.getContext) {
      var c = canvas.getContext('2d');

    // for (let i = 0; i < 10; i++) {

    //   let x = Math.random() * window.innerWidth;
    //   let y = Math.random() * window.innerHeight;

    //   c.beginPath();
    //   c.arc(x, y, 100, Math.PI / 180 * Math.random(), Math.PI / 180 * Math.random(), false);
    //   c.closePath();
    //   // c.fillStyle='cyan';
    //   // c.fill();
    //   c.strokeStyle = "red"
    //   c.stroke();
    //   }

    for (let i = 0; i < 50; i++) {

      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;

      c.beginPath();
      c.quadraticCurveTo(x, y, 50, x);
      c.quadraticCurveTo(x, 100, x, 20);
      c.quadraticCurveTo(x, 80, x, x);
      // c.closePath();
      // c.fillStyle='black';
      // c.fill();
      c.strokeStyle = 'black'
      c.stroke();

      }  
     
    }
  }

  window.setInterval(draw, 240)

 

  