import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../../theme';
import { ScrollView } from '../Tutorial/styles';

export const Container = styled(ScrollView)`
  flex: 1;
  padding: ${theme.spacing.vs(16)}px ${theme.spacing.s(16)}px;
`;

export const Content = styled.View`
  margin-top: ${theme.spacing.vs(16)}px;
  flex: 1;
  padding: ${theme.spacing.vs(16)}px ${theme.spacing.s(8)}px;
`;

export const styles = StyleSheet.create({
  screenTitle: {
    textAlign: 'center',
  },
  sectionTitle: {
    marginTop: theme.spacing.vs(8),
    marginBottom: theme.spacing.vs(4),
  },
  buttonMargin: {
    marginTop: theme.spacing.vs(16),
  },
});
