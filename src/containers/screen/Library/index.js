import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

const Library = () => {
    const [mylibrary,setMylibrary]=useState([])
    useEffect(() => {
        async function getdata (){
            const respone = await fetch("https://fakeserver-musicaap.herokuapp.com/user")
            const jsonData = await respone.json() 
            //  console.log(jsonData.mymusic)
             setMylibrary(jsonData.mymusic)
             
        }
        getdata()
        
    }, [])
    return (
        <View>
            <Text>2</Text>
        </View>
    )
}

export default Library
