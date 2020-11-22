import { AntDesign, FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

export const EditFABGroup = () => {
  const [isGroupOpen,setGroupOpen] = React.useState(false)

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={isGroupOpen}
          icon={props => <AntDesign name="tool" size={24} color="black" />}
          visible={true}
          style={{
          margin: 16,
          zIndex:3}}
          actions={[
            { icon: props => <FontAwesome name="mail-forward" size={24} color="black" />, onPress: () => {} },
          ]}
          onStateChange={(state:{open:boolean})=>{setGroupOpen(state.open)}}
        ></FAB.Group>
      </Portal>
    </Provider>
  );
};