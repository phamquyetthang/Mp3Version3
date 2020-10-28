import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
    },
    DashboardHeader:{
        padding:20
    },
    DashboardTextFeatured:{
        fontWeight:"bold",
        paddingHorizontal:20
    },
    DashboardImageFeatured:{
        width:120,
        height:120,
        marginRight:8,
        marginTop:16,
        borderRadius:4
    },
    DashboardToptracks:{
        width:"100%",
        flex:0.5,
        // backgroundColor:"gray",
        marginLeft:20
    },
    DashboardImageToptracks:{
        width:60,
        height:60,
        marginTop:8,
        borderRadius:4,
        marginRight:8
    },
    albumImage: {
        width: "100%",
        height: 100,
    }
})
export const textStyles = StyleSheet.create({
    h3:{
        fontWeight: "bold",
        fontSize: 16,
    }
})