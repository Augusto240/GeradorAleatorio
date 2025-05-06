import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AleatorioProps {
  min: number;
  max: number;
}

const Aleatorio: React.FC<AleatorioProps> = ({ min, max }) => {
  const [numero, setNumero] = useState<number>(0);

  useEffect(() => {
    const gerarNumero = () => {
      const valor = Math.floor(Math.random() * (max - min + 1)) + min;
      setNumero(valor);
    };
    gerarNumero();
  }, [min, max]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Número aleatório entre {min} e {max}: {numero}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default Aleatorio;