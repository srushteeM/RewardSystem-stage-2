class Badges{
    constructor(){
this.points=createElement("h1")
this.getPoints=getPoints

    }
    display(){
       
        console.log(getPoints)
        this.points.html("Total Points Gained-"+this.getPoints)
        this.points.position(width/2-100,height/2-100)
    }
}