class plinko{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.2,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius=radius
        this.x=x;
        this.y=y;
        World.add(world, this.body);
      }
      display(){
       
       
        push()
        var pos=this.body.position;
        ellipse(RADIUS);
        ellipse( pos.x, pos.y, this.radius, this.radius);
        pop();
      }
  }