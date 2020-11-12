class MyStudent{
    constructor(public name:string,
        public mobile: number,
        public city?: string,
        public company: string="ABc",
        public age?: number){
        }
    printDetails = (...hobbies: string[]) => {
        console.log(`${this.name} is from ${this.city}`);
        console.log(`${this.name}`);
        console.log(hobbies);
    }
}
const stud: MyStudent = new MyStudent('Raju', 1290, 'Bengaluru', 'ABC', 28);
stud.printDetails('Sports','Music');
const stud1: MyStudent = new MyStudent('Raju', 1290, '','', 23);
stud1.printDetails();