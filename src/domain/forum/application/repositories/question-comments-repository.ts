import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionCommentsRepository {
  findById(id: string): Promise<QuestionComment | null>
  // findManyByQuestionId(
  //   questionId: string,
  //   params: PaginationParams,
  // ): Promise<Answer[]>
  create(questionComment: QuestionComment): Promise<void>
  delete(questionComment: QuestionComment): Promise<void>
  // update(question: Answer): Promise<void>
}
