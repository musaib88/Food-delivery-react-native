import {  FlatList} from 'react-native';
import products from '../../../assets/data/products'
import MenuItem from '../../components/menuItem/MenuItem'



export default function MainMenu() {
  return (
    <FlatList data={products} numColumns={2}
    contentContainerStyle={{gap:10, padding:10} }
    columnWrapperStyle={{gap:10}}
    renderItem={({item})=> <MenuItem product={item}
    
    
    />}/>
     
     


    
  );
}

