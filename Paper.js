class Paper{

    constructor(x,y,r){
        this.r = r;

        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x, y, this.r, options);

        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r);
    }
}
