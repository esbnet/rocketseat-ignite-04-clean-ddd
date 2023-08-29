import { Entity } from "../../core/entities/entity";
import { Slug } from "./value-objects/slug";

interface IAnswerProps {
  title: string
  content: string
  authorId: string
  slug: Slug;

}
export class Answer extends Entity<IAnswerProps> {
  get content() {
    return this.props.content
  }
}
