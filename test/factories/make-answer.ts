import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Answer, IAnswerProps } from '@/domain/forum/enterprise/entities/answer'
import { faker } from '@faker-js/faker'

export function makeAnswer(
  override: Partial<IAnswerProps> = {},
  id?: UniqueEntityID,
) {
  const answer = Answer.create(
    {
      questionId: new UniqueEntityID(),
      authorId: new UniqueEntityID('1'),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return answer
}
