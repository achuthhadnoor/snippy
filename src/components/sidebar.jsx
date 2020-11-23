import React from 'react'
import styled from 'styled-components'

import Icon from 'react-icons-kit'
import { plus, command, sun, star, calendar, edit3, atSign, x } from 'react-icons-kit/feather'
import { connect } from 'react-redux';


function TaskSidebar({ active, setActive }) {
    const [open, setOpen] = React.useState(false);
    {/*<SidebarWrapper>
    <Logo ontitle/>*/}
    return (
        <>
            <SidebarTitle>Categories</SidebarTitle>
            <SideBarList>
                <SideBarListItem
                    active={true}
                    onClick={() => { setActive('TODAY'); setOpen(!open) }}
                >
                    <IconView icon={sun} style={{ padding: '5px' }} />
                    <span>Today</span>
                </SideBarListItem>
                <SideBarListItem
                    active={active === 'STARRED' ? true : false}
                    onClick={() => { setActive('STARRED'); setOpen(!open) }}
                >
                    <IconView icon={star} />
                    <span>important</span>
                </SideBarListItem>
                <SideBarListItem
                    active={active === 'SCHEDULED' ? true : false}
                    onClick={() => { setActive('SCHEDULED'); setOpen(!open) }}
                >
                    <IconView icon={calendar} />
                    <span>Scheduled</span>
                </SideBarListItem>
                <SideBarListItem
                    active={active === 'ASSIGNED' ? true : false}
                    onClick={() => { setActive('ASSIGNED'); setOpen(!open) }}
                >
                    <IconView icon={atSign} />
                    <span>Assigned to me</span>
                </SideBarListItem>
                <SideBarListItem
                    active={active === 'TASKS' ? true : false}
                    onClick={() => { setActive('TASKS'); setOpen(!open) }}
                >
                    <IconView icon={edit3} />
                    <span>Tasks</span>
                </SideBarListItem>
            </SideBarList>

            <SidebarTitle>Collections</SidebarTitle>

            <SideBarList>
            <SideBarListItem >
                <IconView icon={plus} style={{ padding: '5px' }} />
                <span>Create Collection   Alt + <Icon icon={command} /> + T </span>
            </SideBarListItem>
                <SideBarListItem
                    active={active === 'TODAY' ? true : false}
                    onClick={() => { setActive('TODAY'); setOpen(!open) }}
                >
                    <IconView icon={sun} style={{ padding: '5px' }} />
                    <span>Create React </span>
                </SideBarListItem>
            </SideBarList>

        </>
    )
    {/* </SidebarWrapper> */ }
}

const IconView = styled(Icon)`
    padding:5px; 
}
`;


const SidebarTitle = styled.div`
    font-size: .9em;
    font-weight:600;
    color:${props=>props.theme.text1};
    padding-top:0px;    
    margin-top: 20px;
    margin-left: 20px;
    @media only screen and (max-width: 500px) {
    & {
           padding-top:30px;  
    }
    `;

const SideBarList = styled.div`
    list-style: none; 
    margin: 10px 0px ; 
    background:${({theme})=>theme.ternary};
    backdrop-filter: blur(9px);
    padding: 15px 10px;;
    border-radius: 10px;
    align-items: center;
    font-size:.9em;
    transition:all .4s ease-in-out;
    .active{
        background:${({theme})=>theme.qudraple}; 
    }
    
}
`;

const SideBarListItem = styled.button`
    display: flex;
    width:100%;
    border-radius: 5px; 
    align-items:center;
    margin-bottom:7px; 
    color:${props => props.theme.secondary};
    background:${props => props.active ? props.theme.qudraple : 'transparent'};
    transition:all .04s ease-in-out;
    &:hover{
        background:${props => props.theme.qudraple }; 
    }
    &:active{
      transform: scale(0.96) !important;
    }
    span{
        padding:0px 15px;
    }

    `;
    // background:rgb(255 255 255 / 5%);
    const mapStateToProps = ({tasks})=>({
        tasks
    })
export default connect(mapStateToProps)(TaskSidebar);