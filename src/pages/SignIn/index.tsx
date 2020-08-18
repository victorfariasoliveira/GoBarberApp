import React from 'react';
import { Image, View } from 'react-native'
import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { Container, Title, ForgotPassword, ForgotPasswordButton, CreateAccountButton, CreateAccountButtonText } from './styles'

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
    <Container>
      <Image source={logoImg} />

      <View>
        <Title>Faça seu logon</Title>
      </View>

      <Input name="email" icon="mail" placeholder="E-mail" placeholderColor="#666360"/>
      <Input name="password" icon="lock" placeholder="Senha" placeholderColor="#666360"/>
      <Button onPress={() => { console.log('funfou') }}>Entrar</Button>

      <ForgotPassword onPress={() => {}}>
        <ForgotPasswordButton>Esqueci minha senha</ForgotPasswordButton>
      </ForgotPassword>
    </Container>

    <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
      <Icon name="log-in" size={20} color="#ff9000"/>
      <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
    </CreateAccountButton>
    </>
  )
}

export default SignIn;