import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Slug } from "./value-objects/slug";

interface IQuestionProps {
  authorId: UniqueEntityID;
  bestAnswerId?: UniqueEntityID;
  title: string;
  content: string;
  slug: Slug;
  createAt: Date
  updateAt?: Date
}

export class Question extends Entity<IQuestionProps> {
  get content() {
    return this.props.content
  }
}
