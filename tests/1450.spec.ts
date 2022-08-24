import busyStudent from '../每日一题/easy/1450. 在既定时间做作业的学生人数'
import { expect, test } from 'vitest'

test('test cases', () => {
  const cases = [
    { startTime: [1, 2, 3], endTime: [3, 2, 7], queryTime: 4 },
    { startTime: [4], endTime: [4], queryTime: 4 },
    { startTime: [4], endTime: [4], queryTime: 5 },
    { startTime: [1, 1, 1, 1], endTime: [1, 3, 2, 4], queryTime: 7 },
    {
      startTime: [9, 8, 7, 6, 5, 4, 3, 2, 1],
      endTime: [10, 10, 10, 10, 10, 10, 10, 10, 10],
      queryTime: 5
    }
  ]
  const resluts = cases.map(({ startTime, endTime, queryTime }) =>
    busyStudent(startTime, endTime, queryTime)
  )
  expect(resluts).toEqual([1, 1, 0, 0, 5])
})
