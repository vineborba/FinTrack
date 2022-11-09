import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { FTText } from '../../../components/FTText';
import { FTButton } from '../../../components/FTButton';

import { Container, Content, styles } from './styles';

import { MainStackParamList } from '../types';

type Props = NativeStackScreenProps<MainStackParamList, 'Home'>;

function Home({ navigation }: Props) {
  return (
    <Container>
      <FTText
        color="primary"
        weight="700"
        size="hero"
        colorTone="main"
        style={styles.screenTitle}
      >
        Seja bem-vindo ao FinTrack!
      </FTText>
      <Content>
        <FTText>
          O FinTrack é seu app para manter em cheque suas despesas e ajudar você
          a alcançar suas metas financeiras.
        </FTText>
        <FTText
          weight="700"
          color="primary"
          colorTone="medium"
          style={styles.sectionTitle}
          size="title"
        >
          Como o app funciona?
        </FTText>
        <FTText size="description">
          Aqui você poderá anotar todas suas despesas e seus ganhos e nós
          ajudaremos você a manter seu planejamento financeiro dentro da sua
          meta.
        </FTText>
        <FTText
          weight="700"
          color="primary"
          colorTone="medium"
          style={styles.sectionTitle}
          size="title"
        >
          Por que usar o FinTrack?
        </FTText>
        <FTText size="description">
          O FinTrack é desenvolvido com a finalidade de ser simples ao mesmo
          tempo em que entrega uma experiência fluida, facilitando sua jornada
          até alcançar suas metas
        </FTText>
        <FTText
          weight="700"
          color="primary"
          colorTone="medium"
          style={styles.sectionTitle}
          size="title"
        >
          E meus dados? O que acontecem com eles?
        </FTText>
        <FTText>
          Sabemos que na era da informação, muito se fala sobre privacidade e
          como as grandes companhias usam seus dados para lucro. Nossa
          mentalidade é diferente, por isso não salvamos seus dados, eles ficam
          armazenados de forma segura no seu aparelho.
        </FTText>
        <FTButton
          label="Começar agora!"
          style={styles.buttonMargin}
          onPress={() => {
            navigation.navigate('Tutorial');
          }}
        />
      </Content>
    </Container>
  );
}

export default Home;
