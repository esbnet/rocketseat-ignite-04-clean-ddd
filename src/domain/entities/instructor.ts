import { Entity } from "../../core/entities/entity";

interface IInstructorProps {
  name: string;
  email: string;
  birthDate: Date;
}

export class Instructor extends Entity<IInstructorProps>  {
  get content() {
    return this.props.birthDate
  }
}