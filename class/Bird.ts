import Animal from './Animal';
import Flyable from '../interface/Flyable';
class Bird extends Animal implements Flyable {
	private name :string;
	constructor (name, color) {
		super()
		this.name = name;
		this.color = color;
	}
	fly(): void {
		console.log(`I'm flying`)
	}

	display(): void {
		console.log(`Name: ${this.name}, Color: ${this.color}`);
	}
};

export default Bird;