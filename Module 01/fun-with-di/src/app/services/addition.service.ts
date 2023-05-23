export class AdditionService {

    id: number; 

    constructor() {
        this.id = Math.ceil(Math.random() * 1000000);
        console.log('Addition Service is created with id', this.id);
    }

    add(a: number, b: number): number {
        console.log('Calculating the sum of ', a, b);
        return a + b;
    }
}