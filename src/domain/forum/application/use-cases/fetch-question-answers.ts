import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

interface FetchRecentAnswersUseCaseRequest {
  questionId: string
  page: number
}

interface FetchRecentAnswersUseCaseResponse {
  answers: Answer[]
}

export class FetchQuestionAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: FetchRecentAnswersUseCaseRequest): Promise<FetchRecentAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    return {
      answers,
    }
  }
}
