class rope{
    constructor(bodyA, pointB)
    {
       var options={
        bodyA: bodyA,
        pointB: pointB,    
        stiffness: 0.08,
        length: 10
            }

        this.pointB = pointB    
        this.rope = Constraint.create(options)
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null
    }
    
display(){

    //if(null){} --> if(false){} --> if block won't execute
    if(this.rope.bodyA){
    
    var pointA = this.rope.bodyA.position
    var pointB = this.pointB

    strokeWeight(4)
    line(pointA.x,pointA.y,pointB.x,pointB.y);

    //line(x1,y1,x2,y2)

    }

}

}
