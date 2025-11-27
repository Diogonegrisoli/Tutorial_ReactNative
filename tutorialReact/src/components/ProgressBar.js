import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente de barra de progresso visual
export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Seu Progresso</Text>
        <Text style={styles.percentage}>{current}/{total} lições</Text>
      </View>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  percentage: {
    fontSize: 14,
    color: '#cccbcbff',
  },
  progressBarBackground: {
    height: 12,
    backgroundColor: '#3c3349ff',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#fff',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 10,
  },
});
