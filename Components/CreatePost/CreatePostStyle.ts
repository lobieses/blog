import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px 20%;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Textarea = styled.textarea`
    width: 450px;
    height: 100px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 3px;
    margin-top: 30px;
    transition: 0.3s background;
    font-size: 20px;
    resize: none;
    outline: none;
    
    &:focus {
        background: rgba(0,0,0,0.2)
    }
`

export const Input = styled.input`
    display: block;
    width: 300px;
    padding: 7px;
    border: 1px solid black;
    border-radius: 3px;
    font-size: 17px;
    transition: 0.3s background;
    outline: none;
    
    &:focus {
        background: rgba(0,0,0,0.2)
    }
`

export const Button = styled.button`
    margin-top: 80px;
    outline: none;
    background: none;
    border: 2px solid black;
    border-radius: 5px;
    width: 150px;
    height: 50px;
    font-size: 25px;
    cursor: pointer;
    position: relative;
    
    &:before {
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 47px;
        background: rgba(82,209,56,0.4);
        border-radius: 3px;
        transition: all 0.3s ease;
    }
    
    &:hover {
       &:before {
           width: 100%;
       }
    }
`

export const Error = styled.p`
    color: red;
    margin-top: 40px;
    font-size: 25px;
    font-weight: bold;
`