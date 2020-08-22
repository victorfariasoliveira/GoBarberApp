import React, { useCallback, useRef } from 'react';
import { Image, View } from 'react-native'
import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import { Container, Title, ForgotPassword, ForgotPasswordButton, CreateAccountButton, CreateAccountButtonText } from './styles'

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback((data: object) => {
    console.log(data)
  }, [])
  return (
    <>
    <Container>
      <Image source={logoImg} />

      <View>
        <Title>Faça seu logon</Title>
      </View>

      <Form ref={formRef} onSubmit={handleSignIn}>
        <Input name="email" icon="mail" placeholder="E-mail" placeholderColor="#666360"/>
        <Input name="password" icon="lock" placeholder="Senha" placeholderColor="#666360"/>
        <Button onPress={() => { formRef.current?.submitForm() }}>Entrar</Button>
      </Form>

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