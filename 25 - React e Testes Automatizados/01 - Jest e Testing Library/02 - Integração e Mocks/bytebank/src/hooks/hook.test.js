import { renderHook } from '@testing-library/react';
import { useState, useEffect } from 'react';

describe('Hooks React', () => {
    test('should test react hook (example)', () => {
        const { result } = renderHook(() => {
            const [nome, setNome] = useState('');
            useEffect(() => {
                setNome('Joana');
            }, []);

            return nome;
        });

        expect(result.current).toBe('Joana');
    });
});