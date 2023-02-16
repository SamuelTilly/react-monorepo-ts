import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';

import App from './App';

describe("App test", () => {
    test("should show styled component", () => {
        
        render(<App/>);

        expect(screen.getByText(/Hello/i)).toBeDefined()
    })
})