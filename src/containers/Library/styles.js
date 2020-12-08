import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#220c38',
  },
  createPlaylist:{
    marginTop:8,
    width:"100%",
    height:60,
    // backgroundColor:"red",
    alignItems:"center",
    paddingHorizontal:8,
    flexDirection:"row"
  },
  iconPluss:{
    width:56,
    height:56,
    backgroundColor:"#be2edd",
    borderRadius:8,
    alignItems:"center",
    justifyContent:"center"
  },
  textcreatePlaylist:{
    color:"#be2edd",
    fontWeight:"bold",
    marginLeft:8,
    fontSize:16
  }
});
