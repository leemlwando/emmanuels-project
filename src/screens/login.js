import React from 'react';
import { View, Text,TextInput, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const { width, height }  = Dimensions.get('screen');


class LoginScreen extends React.Component{
    render(){
        return  (
            <View style={styles.container}>
                <View style={{justifyContent: 'center', alignItems: 'center', height: height * .25, width: width, borderRadius: 30, marginBottom: 50, marginTop: 30}}>
                        <Image style={{height: '100%', width: '100%'}} source={require('../../assets/logo1.png')} />

                    
                </View>
                    <View style={{}}>
                    <View style={{alignSelf: 'center', width: width * .65, height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, marginTop: 0, marginBottom: 10}}>
                    <FontAwesome name="user" size={30} color="black" />
                    <TextInput
                        style={{
                            width: '85%',
                            height: '100%',
                            color: 'black',
                            paddingHorizontal: 10, 
                            borderBottomColor: 'purple'}}
                        placeholder="Username"
                    />
                </View>

                <View style={{width: width * .65, height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5, marginTop: 10}}>
                    <FontAwesome name="lock" size={30} color="black" />
                    <TextInput
                        style={{
                            width: '85%',
                            height: '100%',
                            color: 'black',
                            paddingHorizontal: 10, 
                            borderBottomColor: 'purple'}}
                        keyboardType="visible-password"
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                </View>

                    </View>

                    <TouchableOpacity style={{width: width * .85, backgroundColor: 'purple', justifyContent: 'center', alignItems: 'center', marginTop: 10, height: 50, borderRadius: 10}}>
                            <Text style={{fontSize: 25, fontWeight: '700', color: 'white'}}>Login</Text>
                    </TouchableOpacity>

                <View style={{}}>
                    <Text style={{textAlign: 'center', fontSize: 12.5}}>Powered By Emmanuel Inc. copyright @ 2020</Text>
                </View>
            </View>
        )
    }
}



export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})