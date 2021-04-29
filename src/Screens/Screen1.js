import React from 'react';
import {Text, View, TextInput} from 'react-native'
import { ChatInterface } from '../Components/Chat/ChatInterface';


//project id will be used to retrieve the conversation data
export const Screen1 = () =>{

    return(
        <View style={{alignItems:'center', marginTop:'45%'}}>
                <ChatInterface projectId={10000000001}></ChatInterface>
        </View>   
    )
}