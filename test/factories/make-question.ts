import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  IQuestionProps,
  Question,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(override: Partial<IQuestionProps> = {}) {
  const question = Question.create({
    title: 'Example Question',
    slug: Slug.create('example-question'),
    authorId: new UniqueEntityID('1'),
    content: 'Example content',
    ...override,
  })

  return question
}
