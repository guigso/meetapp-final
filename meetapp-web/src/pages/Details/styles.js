import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    width: 70%;
`;

export const Banner = styled.img`
    object-fit: cover;
    max-height: 300px;
    width: 100%;
    margin-bottom: 30px;
    border-radius: 4px;
`;
export const Description = styled.div`
    width: 100%;
    font-size: 18px;
    margin-bottom: 15px;
`;
export const Footer = styled.div`
    display: flex;
    width: 100%;
`;
export const FooterItem = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: center;
    color: #999;
    span {
        margin-left: 5px;
    }
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: bold;
    align-self: flex-end;
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 40px;
`;
export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const EditButton = styled.button`
    align-self: flex-end;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 42px;
    width: 138px;
    background: #4dbaf9;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

    &:hover {
        background-color: ${props =>
            props.disabled ? '' : darken(0.08, '#4DBAF9')};
    }
`;
export const CancelButton = styled.button`
    align-self: flex-end;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 42px;
    margin-left: 15px;
    width: 138px;
    background: #d44059;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

    &:hover {
        background-color: ${props =>
            props.disabled ? '' : darken(0.08, '#D44059')};
    }
`;
