import { Either, left, rigth } from '@/core/either'
import { QuestionCommentsRepository } from '../repositories/question-comments-repository'

interface IDeleteQuestionCommentUseCaseRequest {
  authorId: string
  questionCommentId: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
type DeleteAnswerCommentUseCaseResponse = Either<string, {}>

export class DeleteQuestionCommentUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    authorId,
    questionCommentId,
  }: IDeleteQuestionCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentsRepository.findById(questionCommentId)

    if (!questionComment) {
      return left('Question comment not found.')
    }

    if (authorId !== questionComment.authorId.toString()) {
      return left('Not allowed.')
    }

    await this.questionCommentsRepository.delete(questionComment)

    return rigth({})
  }
}
