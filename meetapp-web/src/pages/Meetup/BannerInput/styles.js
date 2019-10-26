import styled from 'styled-components';

export const Container = styled.div`
    label {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        img {
            object-fit: cover;
            max-height: 300px;
            width: 100%;
        }

        p {
            font-size: 24px;
        }
        border-radius: 4px;
    }
    height: 300px;
    background: #19161f;
    color: #5e5c62;
`;
