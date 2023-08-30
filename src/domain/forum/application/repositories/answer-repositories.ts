import { Answer } from '../../enterprise/entities/answer'

export interface AnsewerRepository {
  create(answer: Answer): Promise<void>
}
