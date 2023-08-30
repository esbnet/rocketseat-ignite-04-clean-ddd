import { QuestionsRepository } from '@/domain/forum/application/repositories/question-repositories'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  private questions: Question[] = []
  async create(question: Question) {
    this.questions.push(question)
  }
}
