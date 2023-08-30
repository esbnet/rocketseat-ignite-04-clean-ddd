import { expect, test } from 'vitest'
import { Answer } from '../../enterprise/entities/answer'
import { AnsewerRepository } from '../repositories/answer-repositories'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswerRepository: AnsewerRepository = {
  create: async (answer: Answer) => {
    console.log(answer)
  },
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})
