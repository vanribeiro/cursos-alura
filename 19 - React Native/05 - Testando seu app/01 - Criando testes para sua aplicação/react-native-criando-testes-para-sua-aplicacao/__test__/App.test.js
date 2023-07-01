import React from 'react';
import App from '../App';
import { act, render } from '@testing-library/react-native';

jest.mock('react-native/Libraries/Utilities/Platform.android', () => ({
    OS: 'android',
    select: jest.fn()
}));

jest.mock('react-native/Libraries/Utilities/Platform.ios', () => ({
    OS: 'ios',
    select: jest.fn()
}));

jest.useFakeTimers();

describe('../App', () => {
    
    test('deve renderizar componente sem erros', () => {
        const { toJSON } = render( <App />);

        act(() => { jest.useFakeTimers(); })

        expect(toJSON()).toMatchSnapshot();
    });

});