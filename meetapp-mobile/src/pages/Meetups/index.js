import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, subDays, addDays } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Background from '~/components/Background';
import MeetupCard from '~/components/MeetupCard';
import Header from '~/components/Header';
import api from '~/services/api';

import { List, DateNavigation, DateText } from './styles';

export default function Meetups() {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: { date },
      });
      setMeetups(response.data);
    }
    loadMeetups();
  }, [date]);

  function handlePreviousDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }
  async function handleInscription(item) {
    try {
      const response = await api.post(`meetups/${item.id}/inscription`);

      if (response.status === 200) {
        setMeetups(meetups.filter(meetup => meetup.id !== item.id));
      }
    } catch (err) {
      if (item.past) {
        Alert.alert(
          'Erro',
          'Não é possível se inscrever em Meetups passados'
        );
      } else {
        Alert.alert(
          'Erro',
          'Não é possível se inscrever em 2 Meetups na mesma hora'
        );
      }
    }
  }

  return (
    <Background>
      <Header />
      <DateNavigation>
        <Icon
          name="chevron-left"
          size={44}
          color="#fff"
          onPress={() => handlePreviousDay()}
        />
        <DateText>{format(date, "dd 'de' MMMM", { locale: ptBR })}</DateText>
        <Icon
          name="chevron-right"
          size={44}
          color="#fff"
          onPress={() => handleNextDay()}
        />
      </DateNavigation>

      <List
        data={meetups}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <MeetupCard
            onInscription={() => handleInscription(item)}
            data={item}
          />
        )}
      />
    </Background>
  );
}

Meetups.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={20} color={tintColor} />
  ),
};
