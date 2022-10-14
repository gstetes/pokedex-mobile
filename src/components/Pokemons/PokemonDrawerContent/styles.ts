import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #EEE;
`;

export const PokemonId = styled.Text`
  font-size: 16px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const PokemonName = styled.Text`
  margin-left: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
`;

export const Informations = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 20px;
`;

export const Status = styled.View`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;