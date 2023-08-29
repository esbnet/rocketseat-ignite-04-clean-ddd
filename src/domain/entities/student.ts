import { Entity } from "../../core/entities/entity";

interface IStudentProps {
  name: string;
  email: string;
  birthDate: Date;
}

export class Student extends Entity<IStudentProps>  {
  get content() {
    return this.props.birthDate
  }
}