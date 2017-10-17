export class Example{
  public name: string;
  public age: number;
  public description: string;

  //note that the arguments inside the constructor dont have to match the declared ones above (e.g. desc)
  constructor(name: string, age: number, desc: string){
    this.name = name;
    this.age = age;
    this.description = desc;
  }
}
