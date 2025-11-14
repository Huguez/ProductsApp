import React, { useState } from 'react'
import type { Product  } from '../../infrastructure';

import { List, } from '@ui-kitten/components';
import { ProductCard } from './ProductCard';
import { RefreshControl } from 'react-native';

interface Props {
   products: Product[];
   fetchNextPage: () => void
}

export const ProductsList = ( { products, fetchNextPage }: Props ) => {

   const [ isRefreshing, setIsRefreshing ] = useState<boolean>( false )
   
   const onPullToRefresh = async () => {
      setIsRefreshing( true )

      await new Promise( resolve => setTimeout( resolve, 1500 ) )

      setIsRefreshing( false )
   }

   const renderItem = ({ item }: { item: Product }) => (
      <ProductCard product={ item }  />
   )

   return (
      <>
         <List
            data={ products }
            numColumns={2}
            keyExtractor={ (item, index) => `${item.title}-${ item.id }-${index}`  }
            renderItem={ renderItem }
            onEndReached={ fetchNextPage }
            onEndReachedThreshold={ 0.8 }
            refreshControl={ <RefreshControl refreshing={ isRefreshing } onRefresh={ onPullToRefresh } /> }
         />
      </>
   )
}
