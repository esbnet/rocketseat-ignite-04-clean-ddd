import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export class InMemoryQuestionCommentsRepository
  implements QuestionCommentsRepository
{
  public items: QuestionComment[] = []

  async create(questionComment: QuestionComment) {
    this.items.push(questionComment)
  }

  // async findById(id: string) {
  //   const question = this.items.find(
  //     (question) => question.id.toString() === id,
  //   )

  //   if (!question) {
  //     return null
  //   }

  //   return question
  // }

  // async findManyByQuestionId(questionId: string, { page }: PaginationParams) {
  //   const answers = this.items
  //     .filter((item) => item.questionId.toString() === questionId)
  //     .slice((page - 1) * 20, page * 20)

  //   return answers
  // }

  // async delete(answer: Answer) {
  //   this.items = this.items.filter((q) => q.id !== answer.id)
  // }

  // async update(answer: Answer) {
  //   const itemIndex = this.items.findIndex((item) => item.id === answer.id)

  //   this.items[itemIndex] = answer
  // }
}
