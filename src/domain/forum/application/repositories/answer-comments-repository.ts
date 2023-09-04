import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommentsRepository {
  // findById(id: string): Promise<Answer | null>
  // findManyByAnswerId(
  //   answerId: string,
  //   params: PaginationParams,
  // ): Promise<Answer[]>
  create(answerComment: AnswerComment): Promise<void>
  // delete(answer: Answer): Promise<void>
  // update(answer: Answer): Promise<void>
}
