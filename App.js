
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OperationScreen from './Pages/OperationScreen'
import Recharge from './Pages/Recharge'
import TransfertScreen from './Pages/TransfertScreen'
import TransactionsScreen from './Pages/TransactionsScreen'
import History from './Pages/History'
import MycardScreen from './Pages/MyCardScreen'

import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const UserView=()=>{
  return(
    <View style={{height:50,backgroundColor:'white'}}><Text style={{color:'grey',fontSize:22,fontWeight:'bold',marginLeft:20,marginTop:10}}>Menu</Text></View>
  );
}

const CustomDrawerContent=(props)=>{
  return(
    <View style={{flex:1}}>
      {UserView()}
          <DrawerContentScrollView>
            <DrawerItemList {...props}/>
          </DrawerContentScrollView>
          <Text style={{color:'black',borderBottomWidth:1,width:'80%',marginLeft:20,color:'grey',fontSize:17,marginBottom:20}}>Account Settings</Text>
          <DrawerItem
           label="Edit Account" style={{marginBottom:10}}
           inactiveTintColor='#000080'
           labelStyle={{fontSize:18,marginLeft:0}}
           icon={()=>(<Feather name={'user-check'} color='#000080' size={20}/>)}//il faut ajouter on press tool pour le link vers la page d'edit
          />
          <DrawerItem
           label="Deconexion"  style={{marginBottom:50}}
           inactiveTintColor='red' labelStyle={{fontSize:18,marginLeft:0}}
           icon={()=>(<Feather name={'log-out'} color='red' size={20}/>)}
          />
    </View>
    
  );
}
function MyDrawer() {
  return (
    <NavigationContainer >
    <Drawer.Navigator  
    
    initialRouteName="Seconde"
    backBehavior='firstRoute'
    defaultStatus='closed'
    screenOptions={
      {
       drawerStyle: {
        width:260,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
       },
       drawerType:'front',
       drawerStatusBarAnimation:'none',
       headerStyle:{
        height:60,
        

      },
      headerTitleStyle:{
        fontSize:20,
        color:'grey',
        marginLeft:60,
    
      },
      drawerLabelStyle: {
        fontSize:15,
        color:'#000080'
      }
      
   
      }

    }
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="My Operations" component={OperationScreen} options={{
           drawerIcon:()=>(
            <Feather name='settings' size={18} color='#000080' style={{marginLeft:20,marginRight:0}}/>
          )
        
      }
      }/>
      <Drawer.Screen name="My Cards" component={MycardScreen}  options={{
           drawerIcon:()=>(
            <Feather name='credit-card' size={18} color='#000080' style={{marginLeft:20,marginRight:0}}/>),
            
      }}/>
      <Drawer.Screen name="Transfer" component={TransfertScreen}   options={{
           drawerIcon:()=>(
            <Feather name='shuffle' size={18} color='#000080' style={{marginLeft:20,marginRight:0}}  />
          )
      }}/>
       <Drawer.Screen name="Recharge" component={Recharge}   options={{
           drawerIcon:()=>(
            <MaterialIcons name='transform' size={18} color='#000080' style={{marginLeft:20,marginRight:0}}  />
          )
      }}/>
       <Drawer.Screen name="History" component={History}   options={{
           drawerIcon:()=>(
            <MaterialIcons name='history' size={20} color='#000080' style={{marginLeft:20,marginRight:0}}  />
          )
      }}/>
       <Drawer.Screen name="Transactions" component={TransactionsScreen}   options={{
           drawerIcon:()=>(
            <Feather name='repeat' size={18} color='#000080' style={{marginLeft:20,marginRight:0}}  />
          )
      }}/>
  
    </Drawer.Navigator>
    
    </NavigationContainer>

  );
}

export default function App() {
  return (
      <MyDrawer />
  );
}
