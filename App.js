import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

const App = () => {
  // Estado para armazenar email e senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para validar o formulário
  const validateForm = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return false;
    }
    return true;
  };

  // Função para enviar o formulário
  const handleSubmit = () => {
    if (validateForm()) {
      // Enviar a requisição (simulação)
      Alert.alert('Sucesso', `Email: ${email}\nSenha: ${password}`);
      // Aqui você pode adicionar a lógica para enviar a requisição real
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Confirmar" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: '#f5f5f5', // Cor de fundo
  },
  container: {
    width: '80%', // Define uma largura responsiva
    padding: 20,
    borderRadius: 10, // Bordas arredondadas
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Para o Android, adiciona uma sombra
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center', // Centraliza o texto
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5, // Bordas arredondadas nos campos de texto
    backgroundColor: '#fff',
  },
});

export default App;
