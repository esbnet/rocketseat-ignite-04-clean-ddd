import { expect, test } from 'vitest'
import { Answer } from '../../enterprise/entities/answer'
import { AnsewerRepository } from '../repositories/answer-repositories'
import { AnsewerQuestionUseCase } from './answer-question'

const fakeAnswerRepository: AnsewerRepository = {
  create: async (answer: Answer) => {
    console.log(answer.exerpt)
  },
}

test('create an answer', async () => {
  const answerQuestion = new AnsewerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})