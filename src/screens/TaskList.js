import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import commonStyle from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br';

import Task from '../components/Task';
export default class TaskList extends Component{
  render(){
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage}
        style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <Task desc="Comprar sua mãe" estimateAt={new Date()}
          doneAt={new Date()}/>
           <Task desc="Comprar seu pai" estimateAt={new Date()} doneAt={null}/>
        </View>
     
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  background:{
    flex:3,
  },
  taskList:{
    flex: 7
  },
  titleBar:{
    flex:1,
    justifyContent: 'flex-end'
  },
  title:{
  
    fontSize:50,
    color:  commonStyle.colors.secundary,
    marginLeft:20,
    marginBottom:20 
  },
  subtitle:{
    color: commonStyle.colors.secundary,
    marginLeft:20,
    marginBottom:20,
    fontSize:20
  }
})