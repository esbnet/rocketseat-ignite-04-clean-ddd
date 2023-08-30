import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

interface IAnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createAt: Date
  updateAt?: Date

}
export class Answer extends Entity<IAnswerProps> {
  get content() {
    return this.props.content
  }
}
