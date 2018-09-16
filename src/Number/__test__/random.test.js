import random from '../random'

test('should return integer less than 5', () => {
  console.log(random(5))
})

test('should return float number less than 5', () => {
  console.log(random(5, true))
})

test('should return float number between 1.2 and 5.2', () => {
  console.log(random(1.2, 5.2))
})
