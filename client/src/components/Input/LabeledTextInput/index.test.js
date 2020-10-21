import React from 'react';
import { render } from '@testing-library/react';

import LabeledTextInput from './index';

const props = {
    empty: {
        id: 'test-labeled-text-input',
        label: 'This is a label',
        value: '',
        placeholder: 'This is a placeholder',
        onChange: () => {},
    },
    common: {
        id: 'test-labeled-text-input',
        label: 'This is a label',
        value: 'This is a value',
        placeholder: 'This is a placeholder',
        onChange: () => {},
    },
};

describe('Testing LabeledTextInput component', () => {
    test('Render component correctly', () => {
        const { container, getByText, getByPlaceholderText } = render(
            <LabeledTextInput {...props.empty} />
        );

        const labeledTextInput = container.querySelector('.labeled-text-input');
        expect(labeledTextInput).toBeInTheDocument;

        const label = getByText('This is a label');
        expect(label).toBeInTheDocument;

        const placeholder = getByPlaceholderText('This is a placeholder');
        expect(placeholder).toBeInTheDocument;
    });

    test('Use input value from props', () => {
        const { getByDisplayValue } = render(
            <LabeledTextInput {...props.common} />
        );

        const inputValue = getByDisplayValue('This is a value');
        expect(inputValue).toBeInTheDocument;
    });
});
