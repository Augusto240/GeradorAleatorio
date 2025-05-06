import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AleatorioProps {
  min: number;
  max: number;
}

const Aleatorio: React.FC<AleatorioProps> = ({ min, max }) => {
  const [numero, setNumero] = useState<number>(0);

  useEffect(() => {
    if (max >= min) {
      const valor = Math.floor(Math.random() * (max - min + 1)) + min;
      setNumero(valor);
    }
  }, [min, max]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {max >= min
          ? `Número aleatório entre ${min} e ${max}: ${numero}`
          : 'Intervalo inválido'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default Aleatorio;