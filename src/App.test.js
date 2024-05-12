import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ReserveForm from './components/ReserveForm';
import Reservations from './components/Reservations';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the ReserveForm heading', () => {
  render(<ReserveForm />);
  const headingElement = screen.getByText('Reserve a Table');
  expect(headingElement).toBeInTheDocument();
})

describe('initializeTimes function', () => {
  test('sets initial times for select element', () => {
    render(<Reservations />);

    const selectElement = screen.getByLabelText('Time:');

    const options = Array.from(selectElement.childNodes)
      .filter(node => node.tagName === 'OPTION');

    const actualTimes = options.map(option => option.textContent);

    const expectedTimes = ['13:00', '14:00', '15:00', '16:00', '17:00'];

    expect(actualTimes).toEqual(expectedTimes);
  });
});

describe('updateTimes function', () => {
  test('updates available times when a time is selected', () => {
    render(<Reservations />);

    const selectElement = screen.getByLabelText('Time:');

    fireEvent.change(selectElement, { target: { value: '13:00' } });

    const updatedSelectElement = screen.getByLabelText('Time:');

    const options = Array.from(updatedSelectElement.childNodes)
      .filter(node => node.tagName === 'OPTION');

    const updatedTimes = options.map(option => option.textContent);

    expect(updatedTimes).not.toContain('13:00');
  });
});