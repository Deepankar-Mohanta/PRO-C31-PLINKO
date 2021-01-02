class particle{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8  
        }
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.radius=radius
        this.body = Bodies.circle(x, y, radius, options);
        this.x=x;
        this.y=y;
        World.add(world, this.body);
      }
      display(){
       
       
        push()
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse( pos.x, pos.y, this.radius, this.radius);
        pop();
      }
  }