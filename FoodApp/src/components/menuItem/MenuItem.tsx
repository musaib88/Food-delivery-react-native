import { StyleSheet,View,Text,Image } from 'react-native';
import Colors from '../../constants/Colors'
import { Product } from '../../types';
const DefaultImg="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png"

type MenuItemPropsProduct={
product:Product
}
const MenuItem=({product}:MenuItemPropsProduct)=>{
  return (
    <View style={styles.containerStyle} >
    <Image  source={{uri:product.image || DefaultImg}} style={styles.imgStyle} />
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
   backgroundColor:"white",
   flex:1

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
