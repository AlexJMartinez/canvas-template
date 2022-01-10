window.addEventListener('load', function() {


        let canvas = document.getElementById('canvas');
        let c = canvas.getContext('2d');
        
        
        
                
        canvas.addEventListener('click', function(e) {
            
                let target = e.target;

                let rect = target.getBoundingClientRect();

                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;

                function getColor(){ 
                  return "hsl(" + 360 * Math.random() + ',' +
                             (25 + 70 * Math.random()) + '%,' + 
                             (85 + 15 * Math.random()) + '%)'
                }

                function draw() {

                
                  let radius = Math.random() * 100
                  // Math.floor(Math.random() * 180) 

                  let circle = new Path2D();
                  circle.arc(x, y, radius, 0, 2 * Math.PI);
                
                  c.fillStyle = getColor();
                  c.fill(circle)
                 
                                
                }

                draw();

                // function repeat(func, times) {
                //   func();
                //   times && --times && repeat(func, times);
                // }

                // repeat(draw, 4);

                // let intervalId;
              
                // intervalId = setInterval(draw, 1000);
                


                let img = canvas.toDataURL("image/png", 1);

                // fix this so that the download comes out correctly
                // currently png only shows first draw instance rather than
                // the entire contents/state of the canvas.

                let download = document.getElementById('download')

                download.addEventListener('click', function() {
                document.write('<img src="'+img+'"/>')
            })

                
        })
     
        function clear() {
          c.clearRect(0, 0, canvas.width, canvas.height)
          c.clearInterval()
        }

        let button = document.getElementById('button')
        button.addEventListener('click', clear)

        



});
        
    


  

 

 

  