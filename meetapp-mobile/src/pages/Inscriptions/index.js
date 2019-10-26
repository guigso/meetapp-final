import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, subDays, addDays } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Background from '~/components/Background';
import MeetupCard from '~/components/MeetupCard';
import api from '~/services/api';

import { List, DateNavigation, DateText } from './styles';
import Header from '~/components/Header';

export default function Inscriptions() {
  const [inscriptions, setInscriptions] = useState([]);

  useEffect(() => {
    async function loadInscriptions() {
      const response = await api.get('inscriptions');
      setInscriptions(response.data);
    }
    loadInscriptions();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`inscriptions/${id}`);

    if (response.status === 200) {
      setInscriptions(inscriptions.filter(meetup => meetup.id !== id));
    }
  }

  return (
    <Background>
      <Header />

      <List
        data={inscriptions}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <MeetupCard
            onCancel={() => handleCancel(item.Meetup.id)}
            data={item.Meetup}
          />
        )}
      />
    </Background>
  );
}

Inscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
