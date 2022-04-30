import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '../../../theme';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0px ${theme.spacing.s(16)}px;
`;

export const ScrollView = styled.ScrollView``;

export const styles = StyleSheet.create({
  inputMargin: {
    marginVertical: theme.spacing.vs(8),
  },
  nextStepButton: {
    marginTop: theme.spacing.vs(40),
  },
});
