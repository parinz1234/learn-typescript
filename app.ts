import Bird from './class/Bird';
// example declaration variable
let text: string = 'Hello World';
// example declaration functionn
function calculator (x: number, y: number) : number {
	return x + y;
}

const sparrow = new Bird('Sparrow', 'black');
const dov = new Bird('Dov', 'gray');

sparrow.display();
sparrow.fly();

dov.display();
dov.fly();