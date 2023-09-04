import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommentsRepository {
  findById(id: string): Promise<AnswerComment | null>
  // findManyByAnswerId(
  //   answerId: string,
  //   params: PaginationParams,
  // ): Promise<Answer[]>
  create(answerComment: AnswerComment): Promise<void>
  delete(answerComment: AnswerComment): Promise<void>
  // update(answer: Answer): Promise<void>
}
