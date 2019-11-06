import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    inputA: "",
    inputB: "100",
    inputC: "",
    inputD: "",
    resultado: "",
    mostrarResultado: false,
    mensagem: "",
    corDaBorda: 'red'
  }

  calcula = () => {

    if (!this.state.inputA) {
      //this.stylesTextoEntrada.push(styles.bordaVermelha)
      this.setState({ mensagem: "O primeiro valor não está preenchido" })
    }

    if (this.state.inputA && this.state.inputC && this.state.inputD) {
      this.setState({ mensagem: "Todos os valores estão preenchidos" })
    }

    let resultado = 0
    if (this.state.inputA && this.state.inputC && !this.state.inputD) {
      resultado = parseFloat(this.state.inputC) * 100 / parseFloat(this.state.inputA);
    }

    if (this.state.inputA && this.state.inputD && !this.state.inputC) {
      resultado = parseFloat(this.state.inputD) * parseFloat(this.state.inputA) / 100;
    }

    if (resultado) {
      this.setState({ mensagem: "O resultado é: " + resultado })
    }

    //this.setState({ resultado })
    this.setState({ mostrarResultado: true })
  }



  render = () => {

    const stylesTextoEntrada = [styles.textoentrada]
    //stylesTextoEntrada.push(styles.bordaVermelha)

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.cabecalho}>Regra de 3</Text>
        <View style={styles.container2}>
          <TextInput
            style={stylesTextoEntrada}
            keyboardType='decimal-pad'
            onChangeText={inputA => this.setState({ inputA })}
          >
          </TextInput>
          <TextInput editable={false} value='100%' style={styles.textoentrada} keyboardType='decimal-pad' ></TextInput>
        </View>
        <Text style={styles.x}>X</Text>
        <View style={styles.container2}>
          <TextInput
            style={styles.textoentrada}
            keyboardType='decimal-pad'
            onChangeText={inputC => this.setState({ inputC })}
          >
          </TextInput>
          <TextInput
            style={styles.textoentrada}
            keyboardType='decimal-pad'
            onChangeText={inputD => this.setState({ inputD })}
          >
          </TextInput>
        </View>
        <TouchableOpacity style={styles.botao} onPress={this.calcula}>
          <Text style={styles.botaoTexto}>Calcular</Text>
        </TouchableOpacity>

        <Text>{this.state.mensagem}</Text>
      </KeyboardAvoidingView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#bdf9ed',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  container2: {
    flexDirection: 'row',
    //backgroundColor: '#f2f9bd',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 70,
    //marginBottom: 20,
  },

  textoentrada: {
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
    height: 40,
    textAlign: 'center',
    fontSize: 20,
  },

  cabecalho: {
    //backgroundColor: '#f2a9bd',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  x: {
    fontSize: 40,
    fontWeight: 'bold',
    //marginBottom: 20,
  },

  botao: {
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    marginTop: 20,
  },

  botaoTexto: {
    color: 'white',
    fontSize: 20,
  },

  bordaVermelha: {
    borderColor: 'red'
  }
});
