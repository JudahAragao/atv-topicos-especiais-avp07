import React from "react";
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import * as Animatable from 'react-native-animatable'

export default Register = () => {

    const navigation = useNavigation()

    return <KeyboardAvoidingView style={styles.container}>
        <Animatable.View
            animation="fadeInLeft"
            delay={500}
            style={styles.containerHeader}
        >
            <Text style={styles.message}>Cadastro</Text>
        </Animatable.View>

        <Animatable.View
            animation="fadeInUp"
            style={styles.containerForm}
        >
            <Text style={styles.label}>E-mail</Text>
            <TextInput
                placeholder="Digite seu E-mail..."
                style={styles.input}
            />

            <Text style={styles.label}>Nome</Text>
            <TextInput
                placeholder="Digite seu Nome..."
                style={styles.input}
            />

            <Text style={styles.label}>Telefone</Text>
            <TextInput
                placeholder="Digite seu Telefone..."
                style={styles.input}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
                placeholder="Digite sua senha..."
                style={styles.input}
            />

            <Text style={styles.label}>Confirmar Senha</Text>
            <TextInput
                placeholder="Confirme sua senha..."
                style={styles.input}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonLogin}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonLoginText}>Já tenho uma conta!</Text>
            </TouchableOpacity>

        </Animatable.View>
    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00455F'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    label: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#00455F',
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#00455F',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonLogin: {
        marginTop: 14,
        alignSelf: 'center'
    },
    buttonLoginText: {
        color: '#A1A1A1'
    }
})