import styled from "styled-components";

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 500;
    transition: 0.3s color;
`

export const Body = styled.p`
    font-size: 20px;
    color: rgb(115 138 148);
    transition: 0.3s color;
`

export const PostWrapper = styled.div`
    border-top: 1px solid #868686;
    border-bottom: 1px solid #868686;
    padding: 30px;
    cursor: pointer;
    transition: 0.3s all;
    &:hover ${Title} {
        color: #52d138;
    }
    
    &:hover ${Body} {
        color: #303030;
    }
    
    &:hover {
        border-top: 1px solid #38DF79;
        border-bottom: 1px solid #38DF79;
        background-color: rgba(0,0,0,0.5);
    }
`

