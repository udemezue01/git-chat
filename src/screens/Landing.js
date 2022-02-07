 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {useTailwind} from 'tailwind-rn';
import tw from 'tailwind-react-native-classnames';

const Landing = () =>{

  const tailwind = useTailwind();

  return(

  <View style={styles.container}>

    
    <Text style={tw`p-4 text-green-600 flex-row text-2xl tracking-wider`} > Gitchat</Text>

    <Text style={tw `text-white bg-green-500 px-4 py-4 rounded-lg mt-32`}>Get started</Text>
    <StatusBar style="auto" />
  </View>



  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default  Landing
