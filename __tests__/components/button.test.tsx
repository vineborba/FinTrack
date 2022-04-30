import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import FTButton from '../../src/components/FTButton';

describe('FTbutton', () => {
  it('should render the default button', () => {
    const { getByText } = render(<FTButton />);

    expect(getByText('cta')).not.toBeNull();
  });

  it('should render buttom with custom label', () => {
    const label = 'teste';
    const { getByText } = render(<FTButton label={label} />);

    expect(getByText(label)).not.toBeNull();
  });

  it('should fire onPress function', () => {
    const mockFn = jest.fn();
    const label = 'teste';
    const { getByText } = render(<FTButton label={label} onPress={mockFn} />);

    const element = getByText(label);
    expect(element).not.toBeNull();

    fireEvent.press(element);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
