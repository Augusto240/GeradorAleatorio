import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
  Keyboard,
} from 'react-native';
import Aleatorio from './components/Aleatorio';

const App: React.FC = () => {
  const [minText, setMinText] = useState<string>('1');
  const [maxText, setMaxText] = useState<string>('10');
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(10);

  const atualizarIntervalo = () => {
    const parsedMin = parseInt(minText, 10);
    const parsedMax = parseInt(maxText, 10);
    setMin(isNaN(parsedMin) ? 0 : parsedMin);
    setMax(isNaN(parsedMax) ? 0 : parsedMax);
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Valor mínimo"
          value={minText}
          onChangeText={setMinText}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Valor máximo"
          value={maxText}
          onChangeText={setMaxText}
        />
        <Button title="Gerar" onPress={atualizarIntervalo} />
      </View>
      <Aleatorio min={min} max={max} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
  },
  inputsContainer: {
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    fontSize: 16,
  },
});

export default App;