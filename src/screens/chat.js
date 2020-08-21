import React from 'react';
import { View, Text,TextInput, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const { width, height }  = Dimensions.get('screen');


class HomeScreen extends React.Component{
    render(){
        return  (
            <View style={styles.container}>
                
                <View style={{height: 100, width: width, backgroundColor: 'blue', opacity: 0.5}}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: 50, position: 'absolute', bottom: 25}}>
                            <FontAwesome name="arrow-left" style={{opacity: 1, fontWeight: 'bold'}} color="white" size={20.5} />
                    </TouchableOpacity>
                </View>


                <View style={{flex: 1, backgroundColor: '#EAEAEA'}}>
                    <View style={{backgroundColor: 'white', paddingLeft: 15, paddingVertical: 10, marginVertical: 1.5, width: width * .25, borderRadius: 5, marginLeft: 10}}>
                            <Text style={{fontSize: 15.5}}>Hello</Text>
                    </View>

                    <View style={{backgroundColor: 'green', paddingLeft: 15, paddingVertical: 10, marginVertical: 1.5, width: width * .25, borderRadius: 5, alignSelf: 'flex-end', marginRight: 10 }}>
                            <Text style={{fontSize: 15.5, color: 'white'}}>Hello</Text>
                    </View>

                    <View style={{backgroundColor: 'green', paddingLeft: 15, paddingVertical: 10, marginVertical: 1.5, width: width * .25, borderRadius: 5, alignSelf: 'flex-end', marginRight: 10 }}>
                            <Text style={{fontSize: 15.5, color: 'white'}}>Hello</Text>
                    </View>

                    <View style={{backgroundColor: 'white', paddingLeft: 15, paddingVertical: 10, marginVertical: 1.5, width: width * .25, borderRadius: 5, marginLeft: 10}}>
                            <Text style={{fontSize: 15.5}}>Hi</Text>
                    </View>
                </View>

                <View style={{height: 50, width: width * .65, position: 'absolute', backgroundColor: 'white', bottom: 10, borderRadius: 10,left: 35, justifyContent: 'flex-end'}}>
                    <TextInput
                        multiline={true}
                        style={{textAlign: 'center', height: '100%'}}
                        placeholder="Enter Message Here"
                    />
                </View>

                <TouchableOpacity style={{height: 50, width: 50, backgroundColor: 'green', position: 'absolute', right: 10, bottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                    <Text style={{textAlign: 'center', color:'white'}}>Send</Text>
                </TouchableOpacity>
                    
            </View>
        )
    }
}



export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})