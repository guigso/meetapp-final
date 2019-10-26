import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  margin-bottom: 15px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Info = styled.View`
  width: 100%;
  flex-direction: row;
  margin-left: 20px;
`;

export const Title = styled.Text`
  width: 100%;
  margin-left: 18px;
  font-size: 22px;
  color: #333333;
`;

export const InfoText = styled.Text`
  padding-left: 10px;
  font-size: 13px;
  text-transform: capitalize;
  color: #999999;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 150px;
  margin-bottom: 5px;
  border-radius: 4px;
`;

export const ActionButton = styled(Button)`
  width: 70%;
  margin: 15px auto 20px;
`;
