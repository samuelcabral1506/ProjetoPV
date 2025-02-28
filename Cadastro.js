import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, Picker, SafeAreaView } from 'react-native';

const App = () => {
    const [isThirdParty, setIsThirdParty] = useState(false);
    const [selectionMade, setSelectionMade] = useState(false);
    const [responsavel, setResponsavel] = useState({
        nome: '',
        dataNascimento: '',
        estadoCivil: '',
        cpf: '',
        profissao: '',
        igreja: '',
        cep: '',
        logradouro: '',
        numeroResidencia: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
        telefone1: '',
        telefone2: '',
        telefone3: '',
        email1: '',
        email2: ''
    });
    const [terceiro, setTerceiro] = useState({
        nomeCompleto: '',
        sexo: '',
        dataNascimento: '',
        cpf: ''
    });

    const handleSubmit = () => {
        if (!isThirdParty) {
            // Verificar campos do responsável
            for (let key in responsavel) {
                if (!responsavel[key]) {
                    Alert.alert('Erro', `Por favor, preencha o campo: ${key}`);
                    return;
                }
            }
        } else {
            // Verificar campos do terceiro e do responsável
            for (let key in responsavel) {
                if (!responsavel[key]) {
                    Alert.alert('Erro', `Por favor, preencha o campo: ${key}`);
                    return;
                }
            }
            for (let key in terceiro) {
                if (!terceiro[key]) {
                    Alert.alert('Erro', `Por favor, preencha o campo: ${key}`);
                    return;
                }
            }
        }
        // Avançar para a próxima tela ou enviar dados
        Alert.alert('Sucesso', 'Dados enviados com sucesso!');
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text>Cadastro</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Cadastro Próprio" onPress={() => { setIsThirdParty(false); setSelectionMade(true); }} />
                        <Button title="Cadastro para Terceiros" onPress={() => { setIsThirdParty(true); setSelectionMade(true); }} />
                    </View>

                    {selectionMade && (
                        <View style={styles.formContainer}>
                            <Text>Nome</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Nome" onChangeText={(text) => setResponsavel({ ...responsavel, nome: text })} />

                            <Text>Data de Nascimento</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Data de Nascimento" onChangeText={(text) => setResponsavel({ ...responsavel, dataNascimento: text })} type="date" />

                            <Text>Estado Civil</Text>
                            <Picker
                                selectedValue={responsavel.estadoCivil}
                                style={[styles.picker, styles.marginBottom]}
                                onValueChange={(itemValue) => setResponsavel({ ...responsavel, estadoCivil: itemValue })}
                            >
                                <Picker.Item label="Solteiro" value="Solteiro" />
                                <Picker.Item label="Casado" value="Casado" />
                                <Picker.Item label="Separado" value="Separado" />
                                <Picker.Item label="Viuvo" value="Viuvo" />
                            </Picker>

                            <Text>CPF</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="CPF" onChangeText={(text) => setResponsavel({ ...responsavel, cpf: text })} />

                            <Text>Profissão</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Profissão" onChangeText={(text) => setResponsavel({ ...responsavel, profissao: text })} />

                            <Text>Igreja</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Igreja" onChangeText={(text) => setResponsavel({ ...responsavel, igreja: text })} />

                            <Text>CEP</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Cep" onChangeText={(text) => setResponsavel({ ...responsavel, cep: text })} />

                            <Text>Logradouro</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Logradouro" onChangeText={(text) => setResponsavel({ ...responsavel, logradouro: text })} />

                            <Text>Número da Residência</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Número da Residência" onChangeText={(text) => setResponsavel({ ...responsavel, numeroResidencia: text })} />

                            <Text>Complemento</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Complemento" onChangeText={(text) => setResponsavel({ ...responsavel, complemento: text })} />

                            <Text>Bairro</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Bairro" onChangeText={(text) => setResponsavel({ ...responsavel, bairro: text })} />

                            <Text>Cidade</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Cidade" onChangeText={(text) => setResponsavel({ ...responsavel, cidade: text })} />

                            <Text>UF</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="UF" onChangeText={(text) => setResponsavel({ ...responsavel, uf: text })} />

                            <Text>Telefone 1</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Telefone 1" onChangeText={(text) => setResponsavel({ ...responsavel, telefone1: text })} />

                            <Text>Telefone 2</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Telefone 2" onChangeText={(text) => setResponsavel({ ...responsavel, telefone2: text })} />

                            <Text>Telefone 3</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Telefone 3" onChangeText={(text) => setResponsavel({ ...responsavel, telefone3: text })} />

                            <Text>Email 1</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Email 1" onChangeText={(text) => setResponsavel({ ...responsavel, email1: text })} />

                            <Text>Email 2</Text>
                            <TextInput style={[styles.input, styles.marginBottom]} placeholder="Email 2" onChangeText={(text) => setResponsavel({ ...responsavel, email2: text })} />

                            {isThirdParty && (
                                <View style={styles.formContainer}>
                                    <Text>Nome Completo</Text>
                                    <TextInput style={[styles.input, styles.marginBottom]} placeholder="Nome Completo" onChangeText={(text) => setTerceiro({ ...terceiro, nomeCompleto: text })} />

                                    <Text>Sexo</Text>
                                    <Picker
                                        selectedValue={terceiro.sexo}
                                        style={[styles.picker, styles.marginBottom]}
                                        onValueChange={(itemValue) => setTerceiro({ ...terceiro, sexo: itemValue })}
                                    >
                                        <Picker.Item label="Masculino" value="Masculino" />
                                        <Picker.Item label="Feminino" value="Feminino" />
                                    </Picker>

                                    <Text>Data de Nascimento</Text>
                                    <TextInput style={[styles.input, styles.marginBottom]} placeholder="Data de Nascimento" onChangeText={(text) => setTerceiro({ ...terceiro, dataNascimento: text })} type="date" />

                                    <Text>CPF</Text>
                                    <TextInput style={[styles.input, styles.marginBottom]} placeholder="CPF" onChangeText={(text) => setTerceiro({ ...terceiro, cpf: text })} />
                                </View>
                            )}

                            <Button title="Confirmar" onPress={handleSubmit} />
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        width: '60%',
        marginVertical: 16,
        borderWidth: 1,
        borderColor: '#000',
        padding: 16,
        borderRadius: 8,
    },
    formContainer: {
        width: '60%',
        marginVertical: 16,
        borderWidth: 1,
        borderColor: '#000',
        padding: 16,
        borderRadius: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: "#fff",
    }
});