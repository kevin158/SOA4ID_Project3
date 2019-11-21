import React, { Component } from 'react';
import { Button, StyleSheet, FlatList, Text, View, Platform } from 'react-native';

export default class Size extends Component {
    constructor(props)
    {
      super(props);
    
      this.state = { GridViewItems: [
        {code: '2', key: 'Lotto'},
        {code: '0', key: 'Lotería'},
        {code: '1', key: 'Chances'}
      ]}
    }

    _play(){
      let board = [
        {text: '', key: '00'},
        {text: '', key: '01'},
        {text: '', key: '02'},
        {text: '', key: '10'},
        {text: '', key: '11'},
        {text: '', key: '12'},
        {text: '', key: '20'},
        {text: '', key: '21'},
        {text: '', key: '22'}
      ]
      this.props.navigation.navigate('Play', {shapeCode: this.props.navigation.getParam('shapeCode', 'defaultValue'), 
      opCode: this.props.navigation.getParam('opCode', 'defaultValue'), 
      gameBoard: board})
    }

    GetGridViewItem (code) {
  
      this.props.navigation.navigate('Play')
    }

    render() {
        return (
      
     <View style={styles.MainContainer}>
      
           <FlatList
           
              data={ this.state.GridViewItems }
      
              renderItem={({item}) =><View style={styles.GridViewBlockStyle}>
      
                 <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.code)} > {item.key} </Text>
                 
                 </View>}
      
              numColumns={1}
      
             />
        
        <View style={styles.buttonContainer}>
        
          <Button
            title="Atrás"
          />
        </View>
     </View>
                
        );
      }
  
}

const styles = StyleSheet.create({
 
    MainContainer :{
     
    justifyContent: 'center',
    flex:1,
    margin: 10,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 70
     
    },
     
    GridViewBlockStyle: {
     
      justifyContent: 'center',
      flex:1,
      alignItems: 'center',
      height: 100,
      margin: 5,
      backgroundColor: '#00BCD4'
     
    }
    ,
     
    GridViewInsideTextItemStyle: {
     
       color: '#fff',
       padding: 10,
       fontSize: 18,
       justifyContent: 'center',
       
     },
     
    });
