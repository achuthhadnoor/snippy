import React from 'react'
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

function ThemedWrapper({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default ThemedWrapper;