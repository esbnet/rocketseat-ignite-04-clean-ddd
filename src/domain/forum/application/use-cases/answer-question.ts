import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { AnsewerRepository } from '@/domain/forum/application/repositories/answer-repositories'
import { Answer } from '../../enterprise/entities/answer'

interface IAnswerQuestionUseCase {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnsewerRepository) {}

  async execute({ instructorId, questionId, content }: IAnswerQuestionUseCase) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
