class Canvas{
	constructor(context){
		this.context=context;
		this.lineWidth=3
		this.strokeColor='red'
		this.fillColor='blue'
		this.delWidth=5
		this.n=3
		this.way="fill"
		this.colorArr=["red","yellow"]
	    this.radialR=30	
	}
	paintLine(x,y,x1,y1){
		this.context.beginPath()
		this.context.strokeStyle=this.strokeColor
		this.context.moveTo(x,y)
		this.context.lineTo(x1,y1)
		this.context.lineWidth=this.lineWidth
	    this.context.stroke()
	    this.context.closePath()
	}
	paintRect(x,y,x1,y1){
		this.context.beginPath()
		if(this.way=="fill"){
			this.context.fillRect(x,y,x1-x,y1-y)
			this.context.fillStyle=this.fillColor
			this.context.fill()
		}
		if(this.way=="stroke"){
			this.context.strokeRect(x,y,x1-x,y1-y)
			this.context.strokeStyle=this.strokeColor
			this.context.stroke()
			this.context.lineWidth=this.lineWidth
		}
		this.context.closePath()
	}
	paintLinearRect(x,y,x1,y1){
		let linear=this.context.createLinearGradient(x,y,x1,y1)
		linear.addColorStop(0,this.colorArr[0])
		linear.addColorStop(1,this.colorArr[1])
		this.context.beginPath()
		this.context.fillStyle=linear
		this.context.fillRect(x,y,x1-x,y1-y)
		this.context.fill()
		this.context.closePath()
	}
	paintCircle(x,y,x1,y1){
		this.context.beginPath()
		let r=Math.sqrt(Math.pow(x1-x,2)+Math.pow(y1-y,2))
		this.context.arc(x,y,r,0,Math.PI*2)
		if(this.way=="fill"){
			this.context.fillStyle=this.fillColor
			this.context.fill()
		}
		if(this.way=="stroke"){
			this.context.strokeStyle=this.strokeColor
			this.context.stroke()
			this.context.lineWidth=this.lineWidth
		}
		this.context.closePath()
	}
	paintRadialCircle(x,y,x1,y1){
		let r=Math.sqrt(Math.pow(x1-x,2)+Math.pow(y1-y,2))
		let radial=this.context.createRadialGradient(x,y,0,x,y,r)
		this.context.fillStyle=radial
		radial.addColorStop(0,this.colorArr[0])
		radial.addColorStop(1,this.colorArr[1])
		this.context.beginPath()
		this.context.arc(x,y,r,0,Math.PI*2)
		this.context.fill()
		this.context.closePath()
	}
	paintPoly(x,y,x1,y1){
		let r=Math.sqrt(Math.pow(x1-x,2)+Math.pow(y1-y,2))
		let ran=360/this.n;
		this.context.beginPath()
		for(let i=0;i<this.n;i++){
			    this.context.lineTo((x+Math.sin((i*ran+45)*Math.PI/180)*r),
			    (y+Math.cos((i*ran+45)*Math.PI/180)*r))
			
		}
		if(this.way=="fill"){
			this.context.fillStyle=this.fillColor
			this.context.closePath()
			this.context.fill()
		}
		if(this.way=="stroke"){
			this.context.strokeStyle=this.strokeColor
			this.context.closePath()
			this.context.stroke()
			this.context.lineWidth=this.lineWidth
		}
		 
	}
	paintRadialRect(x,y,x1,y1){
		this.context.beginPath()
		this.context.moveTo(x+this.radialR,y)
		this.context.arcTo(x1,y,x1,y+this.radialR,this.radialR)
		this.context.arcTo(x1,y1,x1-this.radialR,y1,this.radialR)
		this.context.arcTo(x,y1,x,y1-this.radialR,this.radialR)
		this.context.arcTo(x,y,x+this.radialR,y,this.radialR)
		this.context.closePath()
		if(this.way=="fill"){
			this.context.fillStyle=this.fillColor
			this.context.fill()
		}
		if(this.way=="stroke"){
			this.context.strokeStyle=this.strokeColor
			this.context.stroke()
			this.context.lineWidth=this.lineWidth
		}
	}
	paintDel(x1,y1){
		this.context.clearRect(x1-this.delWidth/2,y1-this.delWidth/2,this.delWidth,this.delWidth)
	}
}


