import React, { useRef, useEffect, useState } from 'react';
import { parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useField } from '@rocketseat/unform';
import { CustomDatePicker } from './styles';

export default function DatePickerInput({ name, selectedDate }) {
    const ref = useRef();
    const { fieldName, registerField } = useField(name);
    const [date, setDate] = useState(
        selectedDate ? parseISO(selectedDate) : new Date()
    );

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: fieldName,
                ref: ref.current,
                path: 'props.selected',
            });
        }
        // eslint-disable-next-line
    }, [ref, fieldName]);

    return (
        <CustomDatePicker
            locale={ptBR}
            name={fieldName}
            selected={date}
            onChange={data => setDate(data)}
            placeholderText="Data e hora do evento"
            showTimeSelect
            autoComplete="off"
            ref={ref}
            dateFormat="dd 'de' MMMM 'de' yyyy 'às' HH:mm"
        />
    );
}
