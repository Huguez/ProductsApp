import { useRef } from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createProduct, getProductById, updateProduct } from "../../actions"
import { FadeInImage, FullScreenLoader, MainLayout, Icon } from "../../components"
import { Gender, Product, RootStackParam, Size } from "../../infrastructure"
import { FlatList, Image, ScrollView } from "react-native"
import { Button, Input, Layout, } from "@ui-kitten/components"
import { Formik } from "formik"
import { CameraAdapter } from "../../config"

interface Props extends NativeStackScreenProps<RootStackParam, 'Product'> {}

const sizes: Size[] = [ Size.Xs, Size.S, Size.M, Size.L, Size.Xl, Size.Xxl ]
const genders: Gender[] = [ Gender.Kid, Gender.Women, Gender.Men, Gender.Unisex ]

export const ProductScreen = ( { route }: Props ) => {

   const productIdRef = useRef( route.params.productId )

   const queryClient = useQueryClient()

   const { isLoading, data } = useQuery({
      queryKey: [ 'products', productIdRef.current ],
      staleTime: 1000*60*60,
      queryFn: async ( ) =>  await getProductById( productIdRef.current ),
   })
   
   const mutation = useMutation({
      mutationFn: (data: Product ) => productIdRef.current  === 'new' ? createProduct( {...data, id: productIdRef.current } ) : updateProduct( {...data, id: productIdRef.current } ),
      onSuccess( data: Product ) {
         productIdRef.current = data.id
         queryClient.invalidateQueries( { queryKey: [ 'products', 'infinite' ] } )
         queryClient.invalidateQueries( { queryKey: [ 'products', data.id ] } )
         console.log( "Done: ", data );
      },
      onError( error ){
         console.log( error );
      }
   })

   if ( isLoading || !data ) {
      return <>
         <FullScreenLoader />
      </>
   }

   const renderItem = ({ item }: { item: string }) => (
      <FadeInImage
         uri={ item }
         style={{ width: 250, height: 300, marginHorizontal: 5 }}
      />
   )


   return (
      <Formik
         initialValues={ data }
         onSubmit={ mutation.mutate }
      >
         {
            ({ handleChange, handleSubmit, values, errors, setFieldValue }) => (
               <MainLayout 
                  title={ values.title }
                  subtitle={ `Price: $${ data?.price.toFixed(2) }`  }
                  rightAction={ async () => {
                     try {   
                        // const photo = await CameraAdapter.takePicture()
                        const photo = await CameraAdapter.getPictureFromLibrary()
                        setFieldValue( 'images', [ ...values.images, ...photo ] )
                        console.log( photo );
                     } catch (error) {
                        console.log( error );
                     }
                  } }
                  rightActionIcon={ 'image-outline' }
               >
                  <ScrollView style={{ flex: 1 }}>
                     
                     <Layout style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center' }} >
                        {
                           values.images.length === 0 ? 
                              <Image source={ require("../../assets/no-product-image.png") } style={{ width: 300, height: 300 }} />
                           :
                              <FlatList
                                 data={ values.images }
                                 keyExtractor={ ( item ) => item }
                                 horizontal={ true }
                                 showsHorizontalScrollIndicator={ false }
                                 renderItem={ renderItem }
                              />
                        }
                        
                     </Layout>

                     <Layout>
                        <Input 
                           label={"Title"}
                           onChangeText={ handleChange('title') } 
                           value={ values.title }
                           style={{ marginVertical: 5 }}
                        />
                        <Input 
                           label={"Slug"}
                           onChangeText={ handleChange('slug') } 
                           value={ values.slug }
                           style={{ marginVertical: 5 }}
                        />
                        <Input 
                           label={"Description"}
                           onChangeText={ handleChange('description') } 
                           value={ values.description }
                           multiline
                           numberOfLines={5}
                           style={{ marginVertical: 5 }}
                        />
                     </Layout>

                     <Layout style={{ marginVertical: 5, flexDirection: 'row', gap: 10 }} >

                        <Input 
                           label={ "Price" }
                           onChangeText={ handleChange('price') } 
                           value={ `$${values.price.toFixed( 2 )}`  }
                           style={{ flex: 1 }}
                           keyboardType={ 'number-pad' }
                        />

                        <Input 
                           label={ "Stock" }
                           onChangeText={ handleChange('stock') } 
                           value={ values.stock.toString() }
                           style={{ flex: 1 }}
                           keyboardType={ 'number-pad' }
                        />

                     </Layout>

                     <Layout style={{ flexDirection: 'row', justifyContent: 'space-between' , marginTop: 20, }}>
                        { sizes.map( (s, index) => (
                           <Button 
                              onPress={ () => setFieldValue( 'sizes',  
                                 values.sizes.includes( s ) ? 
                                 values.sizes.filter( thisS => thisS !== s ) : 
                                 [ ...values.sizes, s ] ) 
                              }
                              appearance={ values.sizes.includes( s ) ? 'primary' : "outline" } 
                              key={`size-${ s }-${ index }`}
                           >
                              { s }
                           </Button>
                        ) ) }
                     </Layout>

                     <Layout style={{ flexDirection: 'row' , justifyContent: 'space-evenly', marginTop: 20, }}>
                        {
                           genders.map( ( g, index ) => (
                              <Button
                                 onPress={ () => setFieldValue( 'gender', g ) }
                                 appearance={ g === values.gender ? 'primary' : "outline" } 
                                 key={`gener-${ g }-${ index }`}
                              >
                                    { g }
                              </Button>
                           ) )
                        }
                     </Layout>

                     <Layout style={{ marginVertical: "5%" }}>
                        <Button 
                           disabled={ mutation.isPending }
                           onPress={ () => handleSubmit() }
                           accessoryLeft={ <Icon name='save-outline' white /> } 
                           appearance="primary"
                        >
                           Guardar
                        </Button>
                     </Layout>

                  </ScrollView>
               </MainLayout>
            )
         }
      </Formik>
   )
}
