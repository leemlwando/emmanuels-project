import React from 'react';
import { View, Text,TextInput, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const { width, height }  = Dimensions.get('screen');


class HomeScreen extends React.Component{
    render(){
        return  (
            <View style={styles.container}>
                
              
                    <View style={{marginTop: 85}}>

                    <FlatList
                        data={[{id:'1'}, {id:'2'}]}
                        renderItem={({item}) => {
                            return (
                                <TouchableOpacity style={{width: width, height: 75, flexDirection: 'row', marginVertical: 10}}> 
                                    <View style={{
                                    height: '100%', width: 75, borderRadius: 100, marginLeft: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,}}>
                                    <Image style={{width: '100%', height: '100%', borderRadius: 100 }} source={require('../../assets/apple.jpg')} />
                                    </View>

                                    <View style={{
                                        width: '100%',
                                        height: '100%'
                                    }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginTop: 5}}>
                                            <View style={{alignItems: 'center'}}>
                                                <Text  numberOfLines={1} style={{fontSize: 22.5, fontWeight: '600', textAlign :'center'}}>Tomato Group</Text>
                                            </View>

                                            <View style={{alignItems :'center', position: 'absolute', left: 220, top: 8}}>
                                                <Text style={{color: 'green', textAlign: 'center'}}>12:30</Text>
                                            </View>
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            )
                        }}

                        keyExtractor={(item) => item.id }
                        
                    />
                    </View>


                    
            </View>
        )
    }
}



export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }
})