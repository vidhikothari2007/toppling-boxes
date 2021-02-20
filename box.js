class Box{ 
    constructor(x,y,width,height){
        var box_options={
            'restitution':1.5,
            'friction':0.1,
            'density':1.0,
        }
        this.body=Bodies.rectangle(x,y,width,height,box_options);
        this.width=60
        this.height=60
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle= this.body.angle;
        push()
        rotate(angle)
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill('brown')
        rect(0,0,this.width,this.height)
        pop()
    }
}