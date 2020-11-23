import React from 'react'
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../utils/global'
import theme from '../../utils/theme'
import { LIGHT } from '../../utils/constants';
const ThemeWrapper = ({ children , currentTheme}) => { 
    return (
        <ThemeProvider theme={currentTheme === LIGHT ? theme.light : theme.dark}>
            {children}
            <GlobalStyles />
        </ThemeProvider>
    )
}
const mapStateToProps = ({ user }) => ({
    currentTheme: user.user.theme
})
export default connect(mapStateToProps)(ThemeWrapper);