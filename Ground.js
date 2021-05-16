class Ground{
constructor(x,y,width,hight){

var clo={
isStatic:true

}

//this.x=x;
//this.y=y;
this.width=width;
this.hight=hight;
this.body=Bodies.rectangle(x,y,width,hight,clo)
World.add(world,this.body)


}


display(){

var pos= this.body.position


rectMode(CENTER)

fill("yellow")

rect(pos.x,pos.y,this.width,this.hight)

}












}