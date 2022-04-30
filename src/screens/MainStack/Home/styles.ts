import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '../../../theme';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 0px ${theme.spacing.s(16)}px;
`;

export const Content = styled.View`
  margin-top: ${theme.spacing.vs(16)}px;
  padding: 0px ${theme.spacing.s(8)}px;
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
