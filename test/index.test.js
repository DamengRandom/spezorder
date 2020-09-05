import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../pages/index';
import Field from '../components/atoms/Field';

describe("<App />", () => {
  it("Test Navbar component", () => {
    // to be continued
  });

  it("Test Field Component", () => {
    const mockProps = {
      field: {
        label: 'Product Name',
        name: 'name',
        register: {
          required: `Name is required`,
          maxLength: {
            value: 30,
            message: 'This input max length is 30 characters.',
          },
        },
      },
      register: jest.fn(),
      errors: {
        name: 'name'
      }
    }
    const { getByText } = render(<Field {...mockProps} />);
    expect(getByText('Product Name')).toBeInTheDocument();
  });

  it("renders 'EZ Order' as title for index Page", async () => {
    const { getByText } = render(<App />);
    const title = getByText(/EZ Order/i);
    await waitFor(() => expect(title).toBeInTheDocument());
  });
});
