import React,{ Component } from 'react'
import { Modal, View, StyleSheet, TouchableWithoutFeedback,Text, TouchableOpacity, TextInput } from 'react-native'
import commonStyle from '../commonStyles';

import DateTimePicker from '@react-native-community/datetimepicker'

const initialStates = { desc: '' }
export default class AddTask extends Component{
  state = {
    ...initialStates
  }
  render(){
    
    return(
      <Modal transparent={true} visible={this.props.isVisible}
       onRequestClose={this.props.onCancel}
        animationType='slide'>
          <TouchableWithoutFeedback
          onPress={this.props.onCancel}>
            <View style={styles.background}></View>
          </TouchableWithoutFeedback>
            <View style={styles.container}>

              <Text style={styles.header}>Nova Tarefa</Text>
              <TextInput  style={styles.input}
              placeholder="Informe a descrição..." 
              onChangeText={desc => this.setState({ desc })}
              value={this.state.desc}/>

              <View style={styles.buttons}> 
                <TouchableOpacity
                onPress={this.props.onCancel}>
                  <Text style={styles.button}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                   <Text style={styles.button}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>
          <TouchableWithoutFeedback
          onPress={this.props.onCancel}>
            <View style={styles.background}></View>
          </TouchableWithoutFeedback>

      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  container:{
   
    backgroundColor: '#fff'
  },
  header:{
    backgroundColor: commonStyle.colors.today,
    color: commonStyle.colors.secundary,
    textAlign: 'center',
    padding:15,
    fontWeight: "bold",
    fontSize:18
  },
  input:{
    
    height:40,
    margin:15,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#E3E3E3',
    borderRadius:6,
    padding: 10,
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button:{
    margin:20,
    
    color:commonStyle.colors.today,
    backgroundColor:'#fafafa',
    padding:10,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})