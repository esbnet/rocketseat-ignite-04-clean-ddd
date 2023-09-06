import { Either, left, right } from '@/core/either'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { ResourceNotAllowedError } from './errors/resource-not-allowed'
import { ResourceNotFoundError } from './errors/resource-not-found'

interface IChooseQuestionBestAnswerUseCaseRequest {
  answerId: string
  authorId: string
}

type IChooseQuestionBestAnswerUseCaseResponse = Either<
  ResourceNotFoundError | ResourceNotAllowedError,
  { question: Question }
>

export class ChooseQuestionBestAnswerUseCase {
  constructor(
    private questionRepository: QuestionsRepository,
    private answersRepository: AnswersRepository,
  ) {}

  async execute({
    answerId,
    authorId,
  }: IChooseQuestionBestAnswerUseCaseRequest): Promise<IChooseQuestionBestAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    const question = await this.questionRepository.findById(
      answer.questionId.toString(),
    )

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== question.authorId.toString()) {
      return left(new ResourceNotAllowedError())
    }

    question.bestAnswerId = answer.id

    await this.questionRepository.update(question)

    return right({ question })
  }
}
