import React from 'react';
import { render, within } from '@testing-library/react-native';

import { FTText } from '../../src/components/FTText';

describe('FTText', () => {
  it('should render a <Text /> with content', () => {
    const text = 'test text';
    const { getByText } = render(<FTText>{text}</FTText>);

    expect(getByText(text)).not.toBeNull();
  });

  it('should render a <Text /> within a <Text />', () => {
    const first = 'eu sou o inicio';
    const middle = 'eu sou o meio diferente';
    const final = 'eu sou o fim';
    const { getByText } = render(
      <FTText>
        {first}
        <FTText>{middle}</FTText>
        {final}
      </FTText>,
    );

    const FullText = within(getByText(`${first}${final}`, { exact: false }));
    const NestedText = getByText(middle);
    expect(FullText).not.toBeNull();
    expect(NestedText).not.toBeNull();
  });
});
