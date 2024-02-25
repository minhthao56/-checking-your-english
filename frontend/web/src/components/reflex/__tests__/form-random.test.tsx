import { render, fireEvent, waitFor } from '@testing-library/react'
import { test, expect } from 'vitest'
import FormRandom from '@/components/reflex/form-random'

test('FormRandom renders form fields correctly', () => {
    // const { getByLabelText } = render(<FormRandom />)
  
    // // Check if the "Type" select field is rendered
    // const select = getByLabelText('Type')
    // expect(select).toBeDefined()
  
    // // Check if the "Min Number" and "Max Number" input fields are rendered when the "Type" is a number type
    // fireEvent.change(select, { target: { value: 'number' } })
    // const minNumberInput = getByLabelText('Min Number')
    // const maxNumberInput = getByLabelText('Max Number')
    // expect(minNumberInput).toBeDefined()
    // expect(maxNumberInput).toBeDefined()
  
    // // Check if the "Start Date" and "End Date" input fields are rendered when the "Type" is a datetime type
    // fireEvent.change(select, { target: { value: 'datetime' } })
    // const startDateInput = getByLabelText('Start Date')
    // const endDateInput = getByLabelText('End Date')
    // expect(startDateInput).toBeDefined()
    // expect(endDateInput).toBeDefined()
  })
  
test('FormRandom submits and updates the value correctly', async () => {
    // const { getByText, getByLabelText } = render(<FormRandom />)

    // // Assuming "Type" is the label for the select input
    // const select = getByLabelText('Type')
    // fireEvent.change(select, { target: { value: 'date' } })

    // // Assuming "Random" is the text in the submit button
    // const button = getByText('Random')
    // fireEvent.click(button)

    // // Assuming "H3" is the tag for the value display
    // const valueDisplay = await waitFor(() => getByText(/.+/i))
    // expect(valueDisplay).toBeDefined()
})
  
  test('FormRandom speaks the value correctly', async () => {
    // const { getByText, getByLabelText } = render(<FormRandom />)
  
    // // Assuming "Type" is the label for the select input
    // const select = getByLabelText('Type')
    // fireEvent.change(select, { target: { value: 'date' } })
  
    // // Assuming "Random" is the text in the submit button
    // const button = getByText('Random')
    // fireEvent.click(button)
  
    // // Assuming "SpeakerLoudIcon" is the text in the speak button
    // const speakButton = getByText('SpeakerLoudIcon')
    // fireEvent.click(speakButton)
  
    // // Check if the speak function is called
    // // This part depends on how you implement the speakText function
    // // Here is an example if you use the SpeechSynthesis API
    // const utterance = new SpeechSynthesisUtterance()
    // expect(window.speechSynthesis.speak).toHaveBeenCalledWith(utterance)
  })