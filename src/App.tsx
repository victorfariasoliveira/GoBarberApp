import React from 'react';
import { View, StatusBar } from 'react-native';

/**
 * backgroundColor= "#312e38" => Serve apenas para o Android
 * style={{ flex: 1, backgroundColor: '#312e38' }} => toda a estilização se dar por meio dessa propriedade
 */


const App: React.FC = () => (
  <>
  <StatusBar 
    barStyle="light-content"
    backgroundColor= "#312e38"
  />
  <View style={{ flex: 1, backgroundColor: '#312e38' }} />
  </>
)

export default App;