import React from 'react'
import styled from 'styled-components'
import { LIGHT } from '../utils/constants'
import { connect } from 'react-redux';

function Logo({ ontitle, ...props }) {
    return (
        <LogoWrapper>
            {props.theme === LIGHT ? <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5982 8.75006C10.6835 8.75006 10.547 7.43208 11.4424 7.24468C12.2489 7.07587 12.2489 5.92425 11.4424 5.75544C10.547 5.56805 10.6835 4.25007 11.5982 4.25007L27.5 4.25007C28.7426 4.25007 29.75 5.25743 29.75 6.50006C29.75 7.7427 28.7426 8.75006 27.5 8.75006L11.5982 8.75006Z" fill="#0A0A0A" />
                <path d="M6.5 29.7499C5.25736 29.7499 4.25 28.7425 4.25 27.4999C4.25 26.2572 5.25736 25.2499 6.5 25.2499L23.0503 25.2499C23.9584 25.2499 24.1066 26.5523 23.2217 26.7565C22.4332 26.9385 22.4331 28.0615 23.2217 28.2434C24.1065 28.4476 23.9582 29.7499 23.0501 29.7499L6.5 29.7499Z" fill="#0A0A0A" />
                <path d="M29.75 27.6249C29.75 28.7985 28.7986 29.7499 27.625 29.7499C26.4514 29.7499 25.5 28.7985 25.5 27.6249L25.5 10.7086C25.5 9.88136 26.6901 9.75417 26.8649 10.5627C27.0198 11.2791 28.037 11.2921 28.2103 10.58L28.2716 10.3279C28.4812 9.46597 29.75 9.61806 29.75 10.5051L29.75 27.6249Z" fill="#0A0A0A" />
                <path d="M8.5 22.9599C8.5 23.7903 7.30244 23.9119 7.13557 23.0984C6.98681 22.3732 5.95525 22.3605 5.78879 23.0819L5.72771 23.3466C5.52742 24.2145 4.25 24.069 4.25 23.1783L4.25 6.37493C4.25 5.20132 5.20139 4.24992 6.375 4.24992C7.5486 4.24992 8.5 5.20132 8.5 6.37492L8.5 22.9599Z" fill="#0A0A0A" />
            </svg>
                :
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5982 8.75C10.6835 8.75 10.547 7.43202 11.4424 7.24462V7.24462C12.2489 7.07581 12.2489 5.92419 11.4424 5.75538V5.75538C10.547 5.56799 10.6835 4.25001 11.5982 4.25001L27.5 4.25001C28.7426 4.25001 29.75 5.25737 29.75 6.5V6.5C29.75 7.74264 28.7426 8.75 27.5 8.75L11.5982 8.75Z" fill="url(#paint0_linear)" />
                    <path d="M6.5 29.7499C5.25736 29.7499 4.25 28.7425 4.25 27.4999V27.4999C4.25 26.2572 5.25736 25.2499 6.5 25.2499L23.0503 25.2499C23.9584 25.2499 24.1066 26.5523 23.2217 26.7565V26.7565C22.4332 26.9385 22.4331 28.0615 23.2217 28.2434V28.2434C24.1065 28.4476 23.9582 29.7499 23.0501 29.7499L6.5 29.7499Z" fill="url(#paint1_linear)" />
                    <path d="M29.75 27.6249C29.75 28.7985 28.7986 29.7499 27.625 29.7499V29.7499C26.4514 29.7499 25.5 28.7985 25.5 27.6249L25.5 10.7086C25.5 9.88136 26.6901 9.75417 26.8649 10.5627V10.5627C27.0198 11.2791 28.037 11.2921 28.2103 10.58L28.2716 10.3279C28.4812 9.46597 29.75 9.61806 29.75 10.5051L29.75 27.6249Z" fill="url(#paint2_linear)" />
                    <path d="M8.5 22.9599C8.5 23.7903 7.30244 23.9119 7.13557 23.0984V23.0984C6.98681 22.3732 5.95525 22.3605 5.78879 23.0819L5.72771 23.3466C5.52742 24.2145 4.25 24.069 4.25 23.1783L4.25 6.37493C4.25 5.20132 5.20139 4.24992 6.375 4.24992V4.24992C7.5486 4.24992 8.5 5.20132 8.5 6.37492L8.5 22.9599Z" fill="url(#paint3_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="5.40909" y1="8.23864" x2="6.96255" y2="0.315981" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4EBFFF" />
                            <stop offset="1" stopColor="#79FF4A" stopOpacity="0.63" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="5.40909" y1="29.2385" x2="6.96255" y2="21.3159" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4EBFFF" />
                            <stop offset="1" stopColor="#79FF4A" stopOpacity="0.63" />
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="29.267" y1="28.5908" x2="21.7545" y2="27.1996" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4EBFFF" />
                            <stop offset="1" stopColor="#79FF4A" stopOpacity="0.63" />
                        </linearGradient>
                        <linearGradient id="paint3_linear" x1="8.01705" y1="28.5908" x2="0.504478" y2="27.1996" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4EBFFF" />
                            <stop offset="1" stopColor="#79FF4A" stopOpacity="0.63" />
                        </linearGradient>
                    </defs>
                </svg>
            }
            {ontitle && <span className="title">Snippy</span>}
        </LogoWrapper>

    )
}

const LogoWrapper = styled.div`
    display:flex;
    align-items:center;
    padding:10px;
    color:${({theme})=> theme.secondary};
    .title{
        padding:0px 10px;
        font-size:1.5em;
        font-weight:600;
        user-select:none;
    }
`;
const mapStateToProps = state=>({
    theme : state.user.user.theme
})
 export default connect(mapStateToProps)(Logo)