import React, { useMemo } from 'react';
import { parseISO, formatDistance, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Banner,
  Title,
  InfoText,
  Info,
  ActionButton,
} from './styles';

export default function MeetupCard({ data, onInscription, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: ptBR,
      addSuffix: true,
    });
  }, [data.date]);
  return (
    <Container past={data.past}>
      <Banner
        source={{
          uri: data.File
            ? data.File.url
            : `https://api.adorable.io/avatar/50/${data.id}.png`,
        }}
      />
      <Title>{data.title}</Title>
      <Info>
        <Icon name="date-range" size={22} color={999999} />
        <InfoText>{dateParsed}</InfoText>
      </Info>
      <Info>
        <Icon name="location-on" size={22} color={999999} />
        <InfoText>{data.location}</InfoText>
      </Info>
      <Info>
        <Icon name="person" size={22} color={999999} />
        <InfoText>{data.User.name}</InfoText>
      </Info>
      {onInscription && (
        <ActionButton onPress={onInscription}>Realizar Inscrição</ActionButton>
      )}
      {onCancel && (
        <ActionButton onPress={onCancel}>Cancelar Inscrição</ActionButton>
      )}
    </Container>
  );
}
