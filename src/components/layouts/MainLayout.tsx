import { useNavigation } from "@react-navigation/native";
import { Divider, Layout, Text, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { PropsWithChildren } from "react"
import Icon from "@react-native-vector-icons/ionicons"

interface Props extends PropsWithChildren{
   title:    string;
   subtitle: string;

   rightAction?: () => void;
   rightActionIcon?: any;
}

export const MainLayout = ({ title, subtitle, rightAction, rightActionIcon, children }:Props) => {

   const { canGoBack, goBack } = useNavigation()

   const renderBackAction = () => (
      <TopNavigationAction
         icon={ <Icon  name='arrow-back-outline' size={25} /> }
         onPress={ goBack }
      />
   )
   
   const RenderRightAction = () => {

      if( !rightAction || !rightActionIcon ){
         return <></>
      }

      return (
         <TopNavigationAction
            onPress={ rightAction }
            icon={ <Icon name={ rightActionIcon } size={ 30 } /> }
         />
      )
   }

   return (
      <Layout style={{ flex: 1 }}>
         <TopNavigation
            title={() => <Text>{ title }</Text>}
            subtitle={() => <Text >{ subtitle }</Text>}
            alignment="center"
            accessoryLeft={ canGoBack() ? renderBackAction : undefined }
            accessoryRight={ RenderRightAction }
         />
         
         <Divider />

         <Layout style={{ flex: 1 }}>
            { children }
         </Layout>
      </Layout>
   )
}
