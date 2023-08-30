import { Entity } from "../../core/entities/entity";

interface IInstructorProps {
  name: string;
}

export class Instructor extends Entity<IInstructorProps>  {
  get content() {
    return this.props.name
  }
}