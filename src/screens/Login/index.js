import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import * as Animatable from 'react-native-animatable'

export default Login = () => {

    const navigation = useNavigation()

    const [inputUser, setInputUser] = React.useState({
        email: '',
        password: '',
    });

    const [passwordSecured, setPasswordSecured] = React.useState(true);
    const [statusLoginError, setStatusLoginError] = React.useState(false);
    const [messageLoginError, setMessageLoginError] = React.useState('');

    const handleChangeText = (key, value) => {
        if (statusLoginError) {
            setStatusLoginError(false);
        }
        setState({ ...state, [key]: value });
    }

    function handleRegister() {
        setState({ email: '', senha: '' });
        navigation.navigate('Register'); //Navega em pilha para tela Register
    }

    function requiredFields() {
        if (!state.email || !state.password) {
            return false;
        }
        else
            return true;
    }

    

    return <View style={styles.container}>
        <Animatable.View
            animation="fadeInLeft"
            delay={500}
            style={styles.containerHeader}
        >
            <Text style={styles.message}>Login</Text>
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

            <Text style={styles.label}>Senha</Text>
            <TextInput
                placeholder="Digite sua senha..."
                style={styles.input}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonRegister}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.buttonRegisterText}>Não tenho uma conta!</Text>
            </TouchableOpacity>

        </Animatable.View>
    </View>
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
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    buttonRegisterText: {
        color: '#A1A1A1'
    }
})