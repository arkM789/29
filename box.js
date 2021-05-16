class box{
    constructor(x,y,width,height){

var options={
isStatic:true,
restitution:0.3,
force:2
}

this.visibility=567;

this.width=width;
this.height=height;
this.body=Bodies.rectangle(width,height,x,y,options)

World.add(world,this.body)

    }

     

Display(){

    console.log(this.body.speed)
if(this.body.speed<3){
var angale=this.body.angale;
var pos=this.body.position;

pop()

translate(pos.x,pos.y)
rotate(angale)
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop()

}else{

World.remove(world,this.body)

push()
this.visibility=this.visibility-5
pop()





}





}

}


    





