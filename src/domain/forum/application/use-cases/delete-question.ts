import { QuestionsRepository } from '../repositories/questions-repository'

interface IDeleteQuestionUseCaseRequest {
  authorId: string
  questionId: string
}

export class DeleteQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({ authorId, questionId }: IDeleteQuestionUseCaseRequest) {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found')
    }

    if (question.authorId.toString() !== authorId) {
      throw new Error('Unauthorized')
    }

    await this.questionsRepository.delete(question)

    return {}
  }
}
