import React from 'react'
import styled from 'styled-components'

export default function Logo({ ontitle, ...props }) {
    return (
        <LogoWrapper>
            <SVG  {...props} width="508" height="500" viewBox="0 0 508 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="60" y="119.766" width="67.7646" height="384" rx="33.8823" transform="rotate(-90 60 119.766)" fill="url(#paint0_linear)" />
                <rect x="60" y="436" width="67.7646" height="384" rx="33.8823" transform="rotate(-90 60 436)" fill="url(#paint1_linear)" />
                <rect x="444" y="436" width="64" height="383.999" rx="32" transform="rotate(180 444 436)" fill="url(#paint2_linear)" />
                <rect x="124" y="436" width="64" height="383.999" rx="32" transform="rotate(180 124 436)" fill="url(#paint3_linear)" />
                <defs>
                    <linearGradient id="paint0_linear" x1="67.7005" y1="137.22" x2="187.006" y2="160.613" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ACE38A" />
                        <stop offset="1" stopColor="#4ADEFF" stopOpacity="0.63" />
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="67.7005" y1="453.454" x2="187.007" y2="476.848" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ACE38A" />
                        <stop offset="1" stopColor="#4ADEFF" stopOpacity="0.63" />
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="451.273" y1="453.454" x2="564.403" y2="474.404" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ACE38A" />
                        <stop offset="1" stopColor="#4ADEFF" stopOpacity="0.63" />
                    </linearGradient>
                    <linearGradient id="paint3_linear" x1="131.273" y1="453.454" x2="244.403" y2="474.404" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ACE38A" />
                        <stop offset="1" stopColor="#4ADEFF" stopOpacity="0.63" />
                    </linearGradient>
                </defs>
            </SVG>
            {ontitle && <span className="title">Snippy</span>}
        </LogoWrapper>

    )
}

const LogoWrapper = styled.div`
    display:flex;
    align-items:center;
    .title{
        padding:0px 10px;
        font-size:1.5em;
        user-select:none;
    }
`;

const SVG = styled.svg`
    height:2em;
    width:2em;
`