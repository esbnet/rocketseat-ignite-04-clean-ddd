import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Answer } from '../entities/answer'
import { AnsewerRepository } from '../repositories/answer-repositories'

interface IAnswerQuestionUseCase {
  instructorId: string
  questionId: string
  content: string
}

export class AnsewerQuestionUseCase {
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
