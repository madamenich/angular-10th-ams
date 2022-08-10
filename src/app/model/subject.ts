export class Subject {
  id!:number;
  name!:string;

  constructor(){

  }

  getNameOnly():string{
    return this.name;
  }
}
