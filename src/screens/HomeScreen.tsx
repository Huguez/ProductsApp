import { useNavigation } from '@react-navigation/native'
import { Button, Text } from '@ui-kitten/components'
import React, { useState } from 'react'
import { NavHook } from '../infrastructure'
import { useAuthStore } from '../store'
import { getProducts } from '../actions'
import { useInfiniteQuery, } from '@tanstack/react-query'
import { FullScreenLoader, MainLayout, ProductsList } from '../components'


export const HomeScreen = () => {
   const [ isPosting, setIsPosting ] = useState<boolean>( false )
   const navigation = useNavigation<NavHook>()
   const { logout } = useAuthStore()

   const { isLoading, data, fetchNextPage } = useInfiniteQuery({
      queryKey: [ 'products', 'infinite' ],
      staleTime: 1000*60*60,
      initialPageParam: 0,
      queryFn: async ( params ) =>  await getProducts( params.pageParam ),
      getNextPageParam: ( lastPage, allPages ) => allPages.length,
   })

   const onClick = async () => {
      setIsPosting( true )
      await logout()
      
      navigation.reset({
         index: 0,
         routes: [ { name: 'Login' } ]
      })
         
      setIsPosting( false )
   }

   return (
      <MainLayout 
         title={'E-Commerce - Products'} subtitle={'Home'}
         rightAction={()=>{}}
         rightActionIcon={ 'add-outline' }
      >

         {
            isLoading ? 
            <FullScreenLoader /> : 
            <ProductsList
               products={ data?.pages.flat() ?? [] } 
               fetchNextPage={ fetchNextPage }
            />
         }

         <Button onPress={ onClick } disabled={ isPosting }>
            <Text>
               Cerrar Session
            </Text>
         </Button>

      </MainLayout>
   )
}