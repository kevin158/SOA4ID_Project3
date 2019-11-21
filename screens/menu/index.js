import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Platform } from 'react-native';
import * as firebase from "firebase";

export default class Size extends Component {
    constructor(props)
    {
      super(props);
    
      this.state = { GridViewItems: [
        {key: 'Perfil'},
        {key: 'Agregar\n Puesto'},
        {key: 'Jugar'},
        {key: 'Historial'}
      ]}
    }

    GetGridViewItem (code) {
        if(code == 'Perfil'){
          firebase
                      .database()
                      .ref("users/")
                      .orderByChild('email')
                      .equalTo(this.props.navigation.getParam('email', 'defaultValue'))
                      .on("value", data => {
                        console.log(data.toJSON());
                        this.props.navigation.navigate('Profile', {profileData: data.toJSON()})
                      });
            
        } else if(code == 'Agregar\n Puesto'){
            this.props.navigation.navigate('AddLocal')
        } else if(code == 'Jugar'){
            this.props.navigation.navigate('SelectLocal')
        }
    }

    render() {
        return (
      
     <View style={styles.MainContainer}>
      
           <FlatList
           
              data={ this.state.GridViewItems }
      
              renderItem={({item}) =><View style={styles.GridViewBlockStyle}>
      
                 <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                 
                 </View>}
      
              numColumns={2}
      
             />
        
        
     </View>
                
        );
      }
  
}

const styles = StyleSheet.create({
 
    MainContainer :{
     
    justifyContent: 'center',
    flex:1,
    margin: 10,
    paddingTop: 20
     
    },
     
    GridViewBlockStyle: {
     
      justifyContent: 'center',
      flex:1,
      alignItems: 'center',
      height: 225,
      margin: 5,
      backgroundColor: '#00BCD4'
     
    }
    ,
     
    GridViewInsideTextItemStyle: {
     
       color: '#fff',
       fontSize: 25,
       justifyContent: 'center',
       
     },
     
    });
