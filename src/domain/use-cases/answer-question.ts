import { Answer } from "../entities/answer"
import { AnsewerRepository } from "../repositories/answer-repositories"

interface IAnswerQuestionUseCase {
  instructorId: string 
  questionId: string
  content: string
}

export class AnsewerQuestionUseCase {
  constructor(
    private answersRepository: AnsewerRepository
  ){}
 
  async execute({ instructorId, questionId, content }: IAnswerQuestionUseCase) {
    const answer = new Answer({
      content, 
      authorId: instructorId, 
      questionId
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
