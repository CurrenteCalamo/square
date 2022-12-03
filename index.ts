interface ComponentDecorator {
	type: string
	templete: Function
	date: stirng
	vim:number
}
function Component(config: ComponentDecorator) {
	return function <T extends { new (...args: any): object }>(Constructor: T) {
		return class extends Constructor {
			square: any
			constructor(...args: any[]) {
				super(...args)
				this.square = config.templete(this.options)
			}
			options(options: any): any {
				throw new Error('Method not implemented.')
			}
		}
	}
}
//Rectangle
interface RectangleCreation {
	width: number
	height: number
}
@Component({
	type: 'Rectangle',
	templete: (obj: RectangleCreation): number => obj.width * obj.height,
})
class Rectangle {
	public square: number | undefined
	constructor(public options: RectangleCreation) {}
}

//Circle
interface CircleCreation {
	radius: number
}
@Component({
	type: 'Circle',
	templete: (obj: CircleCreation): number => Math.PI * obj.radius,
})
class Circle {
	public square: number | undefined
	constructor(public options: CircleCreation) {}
}

//Triangle
interface TriangleCreation {
	width: number
	height: number
}
@Component({
	type: 'Triangle',
	templete: (obj: TriangleCreation): number => 0.5 * obj.width * obj.height,
})
class Triangle {
	public square: number | undefined
	constructor(public options: TriangleCreation) {}
}

const rectangle = new Rectangle({ width: 32, height: 32 })
console.log(rectangle.square)
const circle = new Circle({ radius: 32 })
console.log(circle.square)
const triangle = new Triangle({ width: 32, height: 32 })
console.log(triangle.square)
