import { render, screen } from '@testing-library/react';
import App from './App';
import Bloadcastpage from './Pages/Bloadcastpage';

test('renders learn react link', () => {
  render(<App />);
  render(<Bloadcastpage/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
