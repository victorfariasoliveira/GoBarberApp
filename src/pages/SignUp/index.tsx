import React from 'react';
import { Image, View } from 'react-native'
import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { Container, Title, BackToSignIn, BackToSignInText } from './styles'

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
    <Container>
      <Image source={logoImg} />

      <View>
        <Title>Crie sua conta</Title>
      </View>
      
      <Input name="name" icon="user" placeholder="Nome" placeholderColor="#666360"/>
      <Input name="email" icon="mail" placeholder="E-mail" placeholderColor="#666360"/>
      <Input name="password" icon="lock" placeholder="Senha" placeholderColor="#666360"/>
      <Button onPress={() => { console.log('funfou') }}>Entrar</Button>

    </Container>

    <BackToSignIn onPress={() => navigation.navigate('SignIn')}>
      <Icon name="arrow-left" size={20} color="#fff"/>
      <BackToSignInText>Voltar para logon</BackToSignInText>
    </BackToSignIn>
    </>
  )
}

export default SignUp;