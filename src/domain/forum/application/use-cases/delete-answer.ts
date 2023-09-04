import { AnswersRepository } from '../repositories/answers-repository'

interface IDeleteAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

export class DeleteAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({ authorId, answerId }: IDeleteAnswerUseCaseRequest) {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found')
    }

    if (answer.authorId.toString() !== authorId) {
      throw new Error('Unauthorized')
    }

    await this.answersRepository.delete(answer)

    return {}
  }
}
