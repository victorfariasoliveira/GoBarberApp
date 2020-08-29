import React, { useCallback, useRef } from 'react';
import { Image, View, TextInput, Alert } from 'react-native'
import * as Yup from 'yup'
import logoImg from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'
import getValidationErrors from '../../utils/getValidationError'

import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import { 
  Container, 
  Title, 
  ForgotPassword, 
  ForgotPasswordButton, 
  CreateAccountButton, 
  CreateAccountButtonText 
  } from './styles'

interface SignInFormData {
  email: string,
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passswordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });
        /*
        await signIn({
          email: data.email,
          password: data.password,
        });
        */
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um error ao fazer login, cheque as credenciais.',
        );
      }
    },
    [],
  );

  return (
    <>
    <Container>
      <Image source={logoImg} />

      <View>
        <Title>Faça seu logon</Title>
      </View>

      <Form ref={formRef} onSubmit={handleSignIn}>
        <Input
          name="email" 
          icon="mail" 
          placeholder="E-mail" 
          placeholderColor="#666360"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={
            () => { passswordInputRef.current?.focus() }
          }
        />
        <Input 
          ref={passswordInputRef} 
          name="password" 
          icon="lock" 
          placeholder="Senha" 
          placeholderColor="#666360"
          secureTextEntry
          returnKeyType="send"
          onSubmitEditing={ () => {formRef.current?.submitForm()} }
        />
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