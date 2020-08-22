import React, { useCallback, useRef } from 'react';
import { Image, View } from 'react-native'
import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import { Container, Title, BackToSignIn, BackToSignInText } from './styles'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSignUp = useCallback((data: object) => {
    console.log(data)
  }, [])

  return (
    <>
    <Container>
      <Image source={logoImg} />

      <View>
        <Title>Crie sua conta</Title>
      </View>
      <Form ref={formRef} onSubmit={handleSignUp}>
        <Input name="name" icon="user" placeholder="Nome" placeholderColor="#666360"/>
        <Input name="email" icon="mail" placeholder="E-mail" placeholderColor="#666360"/>
        <Input name="password" icon="lock" placeholder="Senha" placeholderColor="#666360"/>
        <Button onPress={() =>  formRef.current?.submitForm() }>Entrar</Button>
      </Form>

    </Container>

    <BackToSignIn onPress={() => navigation.navigate('SignIn')}>
      <Icon name="arrow-left" size={20} color="#fff"/>
      <BackToSignInText>Voltar para logon</BackToSignInText>
    </BackToSignIn>
    </>
  )
}

export default SignUp;