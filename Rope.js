class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
           pointB:{x:this.offsetX,y:this.offsetY} 
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var ptA = this.rope.bodyA.position;
        var ptB = this.rope.bodyB.position;
        strokeWeight(4);
        var anchorX =ptA.x + this.offsetX;
        var anchorY = ptA.y + this.offsetY;
        line(anchorX, anchorY, this.rope.bodyB.position.x,this.rope.bodyB.position.y);
    }
    }