import { expect, test, vi } from 'vitest'
import { 
    randomDate, 
    randomTime, 
    randomNumber, 
    randomLetter, 
    randomNumberPhone, 
    randomValue, 
    speakText 
} from '../reflex'

test('randomDate', () => {
    const start = new Date(2022, 0, 1)
    const end = new Date(2022, 11, 31)
    const result = randomDate(start, end)
    expect(result).toBeInstanceOf(Date)
    expect(result.getTime()).toBeGreaterThanOrEqual(start.getTime())
    expect(result.getTime()).toBeLessThanOrEqual(end.getTime())
})

test('randomTime', () => {
    const result = randomTime()
    expect(result).toBeInstanceOf(Date)
})

test('randomNumber', () => {
    const min = 1
    const max = 100
    const result = randomNumber(min, max)
    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThanOrEqual(max)
})

test('randomLetter', () => {
    const result = randomLetter()
    expect(result).toHaveLength(1)
    expect(result).toMatch(/[a-z]/)
})

test('randomNumberPhone', () => {
    const result = randomNumberPhone()
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(10000000000)
})

test('randomValue', () => {
    const options = {
        startDate: new Date(2022, 0, 1),
        endDate: new Date(2022, 11, 31),
        minNumber: '1',
        maxNumber: '100',
    }
    const result = randomValue('date', options)
    expect(result).toMatch(/\w+ \d{2}/)
})

// test('speakText', () => {
//     const text = 'Hello, world!'
//     const speakMock = vi.spyOn(window.speechSynthesis, 'speak')
//     speakText(text)
//     expect(speakMock).toHaveBeenCalled()
//     speakMock.mockRestore()
// })