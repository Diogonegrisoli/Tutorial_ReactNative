import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

// Componente de editor de código estilizado
export default function CodeEditor({ value, onChangeText, placeholder }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>💻 Editor de Código</Text>
      <TextInput
        style={styles.editor}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder || "Digite seu código aqui..."}
        placeholderTextColor="#888"
        multiline
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        textAlignVertical="top"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
    paddingLeft: 5,
  },
  editor: {
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    fontFamily: 'monospace',
    fontSize: 14,
    padding: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#3c3349ff',
    minHeight: 200,
    maxHeight: 400,
  },
});
