import { StyleSheet,View,Text,Image } from 'react-native';
import Colors from '../../constants/Colors'

const MenuItem=({product})=>{
  return (
    <View style={styles.containerStyle} >
    <Image  source={{uri:product.image}} style={styles.imgStyle} />
    <Text style={styles.titleStyle}>{product.name}</Text>
    <Text style={styles.priceStyle}>${product.price}</Text>
  </View>
  );
}

export default MenuItem;


const styles = StyleSheet.create({

  containerStyle:{
   alignItems:"center",
   justifyContent:"center",
   padding:10,
   borderRadius:10,
   backgroundColor:"white"

  },
  
   imgStyle:{
    width:"100%",
    aspectRatio:1

   },
   titleStyle:{
    fontSize:18,
    fontWeight:"bold",
    color:Colors.light.text

   }
   ,
   priceStyle:{
    color:Colors.light.tint
   }



});
