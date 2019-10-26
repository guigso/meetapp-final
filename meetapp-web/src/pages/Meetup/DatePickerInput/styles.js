import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const CustomDatePicker = styled(DatePicker)`
    border: none;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin: 5px 0;
    color: rgba(255, 255, 255, 0.5);
    padding: 0 25px;
`;
