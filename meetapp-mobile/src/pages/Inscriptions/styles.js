import styled from 'styled-components/native';

export const Container = styled.View``;
export const DateNavigation = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
export const DateText = styled.Text`
  color: #fff;
  font-size: 22px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
