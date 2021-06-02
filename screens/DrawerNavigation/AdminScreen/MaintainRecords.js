import React from 'react';
import {Text, View} from 'react-native'
import { Header,Button, Left, Right, Body, Icon,Toast, Card} from 'native-base';
import colors from '../../../config/colors';

function MaintainRecords(props) {
    return (
        <Header style={{backgroundColor: colors.seagreen}}>
          <Left style={{flex:1}}>
            <Button transparent onPress={()=> props.navigation.openDrawer() }> 
              <Icon name='menu' style={{color: colors.white}} />
            </Button>

          </Left>
          <Body style={{flex: 1,  justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontSize:18, color: colors.white}}>Records</Text>
          </Body>
          <Right style={{flex:1}}>
           
          </Right>
        </Header>
    );
}

export default MaintainRecords;