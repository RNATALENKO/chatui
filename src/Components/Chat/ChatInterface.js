
import React, {useRef} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList, ScrollView} from 'react-native';
/*

        
*/

export const ChatInterface = () =>{

    const [input, setInput] = useState('');
    const [currentUserId, setCurrentUserId] = useState(123456789);

    //conversation id retrieved based on project id
    const [conversationData, setConversationData] = useState([
        {userId:123456789,firstname:"rodion",message:"hi",time:"11:00 am"},
        {userId:234567891,firstname:"rhaptumanan",message:"whats good?",time:"11:01 am"},
        {userId:123456789,firstname:"rodion",message:"how are ya",time:"11:00 am"},
        {userId:234567891,firstname:"rhaptumanan",message:"not bad hbu?",time:"11:01 am"},
        {userId:123456789,firstname:"rodion",message:"wats new?",time:"11:00 am"},  
    ])


    /* a reference to an element, which can be used to call its methods  */
    const scrollref = useRef();

    return(
        <View style={{alignItems:'center'}}>

                <ScrollView ref={scrollref} onContentSizeChange={(contentWidth, contentHeight)=>{
                    
                    scrollref.current.scrollToEnd({animated:false});
                    
                    }} style={{height:200, backgroundColor:"white", width:'100%' }}>

                        {
                                       
                                       conversationData.map((item)=>{

                                                return <View style={{width:'100%'}}>
                                                            <Text style={{textAlign:item.userId==currentUserId?'right':'left', padding:10}}>
                                                                {item.message}
                                                            </Text>
                                                        </View>
                                       })

                        } 
                </ScrollView>


                <View style={{flexDirection:'row'}}>

                        <TextInput onChangeText={(text)=>setInput(text)}  style={{width:200, backgroundColor:'white', borderWidth:1, borderColor:'lightgrey'}}></TextInput>

                        <TouchableOpacity onPress={()=>{
                            
                            var date = new Date();
                            const messageObj={
                                userId:currentUserId,
                                message:input, 
                                time: date.toLocaleTimeString('en-US', {hour12:true, hour:'numeric', minute:'numeric'})
                            }

                            /* the component only re-renders when setstate is called, this is the only way to update the ui visually */
                            setConversationData([...conversationData, messageObj])
                            console.log(conversationData);

                        }}>
                            <View style={{width:50, backgroundColor:'lightblue', height:25}}></View>
                        </TouchableOpacity>
                </View>

        </View>
      
    )
}