import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { AnswerCommentsRepository } from '../repositories/answer-comments-repository'

interface FetchAnswerCommentsRequest {
  answerId: string
  page: number
}

interface FetchAnswerAnswersResponse {
  answerComments: AnswerComment[]
}

export class FetchAnswerCommentsUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    answerId,
    page,
  }: FetchAnswerCommentsRequest): Promise<FetchAnswerAnswersResponse> {
    const answerComments =
      await this.answerCommentsRepository.findManyByAnswerId(answerId, {
        page,
      })

    return {
      answerComments,
    }
  }
}
