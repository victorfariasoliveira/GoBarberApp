import React from 'react';
import { TextInputProps } from 'react-native'

import { Container, TextInput, Icon } from './styles'

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  placeholderColor: string;
}

/**
 * keyboardAppearance="dark" => Apenas para IOS
 */

const Input: React.FC<InputProps> = ({ name, icon, placeholderColor, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360"/>
      <TextInput 
        keyboardAppearance="dark"
        placeholderTextColor={placeholderColor} 
        {...rest}
        />
    </Container>
  )
};

export default Input;