import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Aleatorio from './components/Aleatorio';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Exemplo de uso: gera valor entre 1 e 10 */}
      <Aleatorio min={1} max={10} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;