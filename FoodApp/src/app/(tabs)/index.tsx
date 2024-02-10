import { View } from 'react-native';
import products from '../../../assets/data/products'
import MenuItem from '../../components/menuItem/MenuItem'



export default function MainMenu() {
  return (
    <View  >
      <MenuItem product={products[3]}/>
      <MenuItem product={products[2]}/>
      <MenuItem product={products[5]}/>



    </View>
  );
}

