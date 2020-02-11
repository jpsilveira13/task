import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet,FlatList, TouchableOpacity, Platform } from 'react-native'

import commonStyle from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'

import Icon  from 'react-native-vector-icons/FontAwesome';


import 'moment/locale/pt-br';

import Task from '../components/Task';
import AddTask from './AddTask'
export default class TaskList extends Component{
  state = {

    showDoneTask: true,
    visibleTask: [],
    tasks: [{
      id: Math.random(),
      desc: 'Comprar Livro de React Native',
      estimateAt: new Date(),
      doneAt: new Date(),
    },{
      id: Math.random(),
      desc: 'ler Livro de React Native',
      estimateAt: new Date(),
      doneAt: null,
    }
  ]
  }

  componentDidMount = () => {
    this.filterTasks();
  }

  togglefilter = () => {
    this.setState({showDoneTask: !this.state.showDoneTask},this.filterTasks)
  }

  filterTasks = () => {
    let visibleTask = null;
    if(this.state.showDoneTask){
      visibleTask = [...this.state.tasks]
    }else{
      const pending = task => task.doneAt === null 
      visibleTask = this.state.tasks.filter(pending)
    }
    this.setState({ visibleTask })
  }

  toggleTask  = taskId => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if(task.id == taskId){
        task.doneAt = task.doneAt ? null : new Date();
      }
    })
    this.setState({tasks},this.filterTasks)
  }
  render(){
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
    return (
      <View style={styles.container}>
        <AddTask />
        <ImageBackground source={todayImage}
        style={styles.background}>
          <View style={styles.iconbar}>
            <TouchableOpacity onPress={this.togglefilter}>
              <Icon name={this.state.showDoneTask ? 'eye' : "eye-slash"}
               size={35} color={commonStyle.colors.secundary}/>
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <FlatList data={this.state.visibleTask}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask} />}/>
           
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
  },
  iconbar:{
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "flex-end",
    marginTop: 40
  }
})