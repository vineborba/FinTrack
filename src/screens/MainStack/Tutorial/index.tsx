import { useReducer, useRef } from 'react';
import { Animated } from 'react-native';

import { useEntries } from '../../../providers/EntriesProvider';

import { FTInput } from '../../../components/FTInput';
import { FTCurrencyInput } from '../../../components/FTCurrencyInput';
import { FTText } from '../../../components/FTText';
import { FTButton } from '../../../components/FTButton';
import { Container, ScrollView, styles } from './styles';

import { ActionType, initialState, reducer } from './reducer';
import { removeCurrencyMask } from '../../../utils/currencyFormatter';

function Tutorial() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { createEntry } = useEntries();

  const fadeInValue = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeInValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const createInput = () => {
    createEntry({
      name: state.inName,
      type: 'in',
      value: removeCurrencyMask(state.inValue, true) as number,
    });
    dispatch({ type: ActionType.SetInCreated, payload: true });
    fadeIn();
  };

  return (
    <Container>
      <ScrollView keyboardShouldPersistTaps="handled">
        <FTText>
          Primeiro, você registra suas entradas, isso é o dinheiro que você
          recebe.
        </FTText>
        <FTText>Vamos começar com um exemplo simples:</FTText>
        <FTInput
          onChangeText={(text) =>
            dispatch({ type: ActionType.SetInName, payload: text })
          }
          value={state.inName}
          disabled={state.inCreated}
          width="large"
          label="Nome"
          placeholder="Ex: Salário"
          contentContainerStyle={styles.inputMargin}
        />
        <FTCurrencyInput
          onChangeText={(text) =>
            dispatch({
              type: ActionType.SetInValue,
              payload: text,
            })
          }
          value={state.inValue}
          disabled={state.inCreated}
          width="large"
          label="Valor (R$)"
          placeholder="Ex: 1200,00"
          contentContainerStyle={styles.inputMargin}
          keyboardType="numeric"
        />
        {!state.inCreated && (
          <FTButton
            label="e agora?"
            style={styles.nextStepButton}
            onPress={createInput}
            disabled={!state.inName || !state.inValue}
          />
        )}
        <Animated.View style={{ marginTop: 24, opacity: fadeInValue }}>
          <FTText>
            Agora, você registra suas saidas, isso é o dinheiro que você gasta.
          </FTText>
          <FTText>Vamos começar com um exemplo simples:</FTText>
          <FTInput
            onChangeText={(text) =>
              dispatch({ type: ActionType.SetOutName, payload: text })
            }
            value={state.outName}
            disabled={false}
            width="large"
            label="Nome"
            placeholder="Ex: Despesas do mercado"
            contentContainerStyle={styles.inputMargin}
          />
          <FTCurrencyInput
            onChangeText={(text) =>
              dispatch({
                type: ActionType.SetOutValue,
                payload: text,
              })
            }
            value={state.outValue}
            disabled={false}
            width="large"
            label="Valor (R$)"
            placeholder="Ex: 500,00"
            contentContainerStyle={styles.inputMargin}
            keyboardType="numeric"
          />
        </Animated.View>
      </ScrollView>
    </Container>
  );
}

export default Tutorial;
