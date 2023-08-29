import { Entity } from "../../core/entities/entity";

interface IQuestionProps {
  title: string;
  content: string;
  authorId: UniqueEntityID;
}

export class Question extends Entity<IQuestionProps> {
  get content() {
    return this.props.content
  }
}
