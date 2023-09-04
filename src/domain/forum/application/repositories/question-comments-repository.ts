import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionCommentsRepository {
  // findById(id: string): Promise<Answer | null>
  // findManyByQuestionId(
  //   questionId: string,
  //   params: PaginationParams,
  // ): Promise<Answer[]>
  create(questionComment: QuestionComment): Promise<void>
  // delete(question: Answer): Promise<void>
  // update(question: Answer): Promise<void>
}
