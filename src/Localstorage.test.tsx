import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('LocalStorage Test', () => {
  test('get localstorage item by click button', async() => {
    const { getByText,findByText } = render(<App />);
    fireEvent.click(getByText('Change LocalStorage Value'));
    await findByText(/Value: [0-9]/);
  });
});
