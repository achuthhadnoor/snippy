// Any component that wants auth state
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components"; 
import Icon from 'react-icons-kit'
import { cloud,power, command} from 'react-icons-kit/feather'

// import IconTooltip from "./Icon"; 
import {logOut} from '../store/actions/userActions'

function Navbar(props) {
    if(!props.user){
        return <div>loading </div>
    }
    return (
        <NavbarContainer> 
            <span style={{ flex: 1 }} />
            <Icon icon={power} onClick={() => { props.signOut() }} style={{padding:'10px'}}/>
            <Icon icon={cloud}  style={{padding:'10px'}}/>
            <Icon icon={command}  style={{padding:'10px'}}/>
            <ProfileImg src={props.user.photo} />
        </NavbarContainer>
    );
}

const NavbarContainer = styled.nav`
    display:flex;
    flex:1;
    align-items:center;
    padding: 15px 25px; 
    color:inherit;
`;

const ProfileImg = styled.img`
    height:30px;
    width:30px;
    border-radius:25px;
    border:1px solid indigo;
`;

const mapStateToProps = state=>({
    user:state.user.user
})

const mapDispatchToProps = (dispatch)=>({
    signOut : ()=>{dispatch(logOut())}
})
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)