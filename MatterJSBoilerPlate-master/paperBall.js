class paperBall{
    constructor(x,y){
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(x,y,15, options);
        this.radius = 30;
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        fill("pink");
        ellipse(pos.x,pos.y,this.radius);
    }
}