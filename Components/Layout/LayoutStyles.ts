import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px 80px;
    background-color: #4a4a4a;
`

export const LinkA = styled.a`
    color: #c4c4c4;
    cursor: pointer;
    font-size: 50px;
    transition: 0.3s all;
    position: relative;
    &:hover {
        color: #ffffff;
       
        
        &:after {
            width: 100%;
        }
    }
    
    &:after {
        position: absolute;
        display: block;
        content: '';
        width: 0;
        height: 4px;
        background-color: #52d138;
        border-radius: 20px;
        bottom: 0;
        left: 0;
        transition: 0.3s all
    }
   
`

export const Menu = styled.div`
    display: flex;
    gap: 100px
`
