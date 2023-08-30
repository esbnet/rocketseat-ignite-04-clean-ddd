import { Answer } from '../entities/answer'

export interface AnsewerRepository {
  create(answer: Answer): Promise<void>
}
