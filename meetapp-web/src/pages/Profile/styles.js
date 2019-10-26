import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 50px auto;
    
    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    input {
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #fff;
        margin: 0 0 10px;

        &::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
    }

    span {
        color: #f12333;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
    }
    hr {
        border: 0;
        height: 1px;
        background: #333;
        margin: 10px 0 20px;
    }
    button {
        align-self: flex-end;
        margin: 5px 0 0;
        height: 44px;
        width: 128px;
        background: #f94d6a;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
            background-color: ${darken(0.08, '#F94D6A')};
        }
    }

    a {
        color: #fff;
        margin-top: 15px;
        font-size: 16px;
        opacity: 0.8;

        &:hover {
            opacity: 1;
        }
    }
`;
