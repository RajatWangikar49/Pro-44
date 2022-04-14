class alien{

	constructor(x, y, width, height){

		var options = {
			isStatic : false, 
		}

		this.body = Bodies.rectangle(x, y, width, height, options);
		World.add(world, this.body);
		this.width = width;
		this.height = height;

	}

	display(){
        
        fill("white");
		rect(this.body.position.x, this.body.position.y, this.width, this.height);
	}
}