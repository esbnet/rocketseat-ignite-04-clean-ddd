import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export class InMemoryAnswerCommentsRepository
  implements AnswerCommentsRepository
{
  public items: AnswerComment[] = []

  async create(answerComment: AnswerComment) {
    this.items.push(answerComment)
  }

  // async findById(id: string) {
  //   const answer = this.items.find(
  //     (answer) => answer.id.toString() === id,
  //   )

  //   if (!answer) {
  //     return null
  //   }

  //   return answer
  // }

  // async findManyByAnswerId(answerId: string, { page }: PaginationParams) {
  //   const answers = this.items
  //     .filter((item) => item.answerId.toString() === answerId)
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
