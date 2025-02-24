import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const Screen2 = ({route}) => {
  console.log(route)
  let confirmationCode = Math.floor(Math.random() *900000 ) + 100000; 

  let totalPrice = (route.params.basePrice * route.params.quantity) + route.params.delivery + (route.params.quantity * route.params.tapioca)
  let tax = totalPrice* 0.13
  totalPrice += tax

  let subtotal = route.params.basePrice * route.params.quantity

   return(
    <View>

      {/* Top image */}
      <View style={{height: 150}}>
         <ImageBackground 
               style={{height: '100%', alignItems: 'flex-end', justifyContent: 'flex-end'}}
            source={{uri: "https://assets.epicurious.com/photos/5953ca064919e41593325d97/4:3/w_4992,h_3744,c_limit/bubble_tea_recipe_062817.jpg"}}
         >
            <View style={{borderRadius: 20, width: 90, height: 30, backgroundColor: 'white', justifyContent: 'center', marginBottom: 20, marginRight: 5}}>
               <Text style={{textAlign: 'center'}}>View Store</Text>
            </View>
         </ImageBackground>
      </View>

      <View style={{ marginHorizontal: 10}}>
         <Text style={{fontSize: 24, fontWeight: 'bold'}}> The Bubble Tea Store</Text>
         
         <Text><Text style={{color: 'green'}}>Order Confirmed</Text> - Today </Text>

         <Text style={{fontSize: 20}}>Order # {confirmationCode}</Text>
      </View>

      {/* payment breakdown  */}
      <View style={{flexDirection: 'column', justifyContent: 'space-between', margin: 10}}>
         {/* Total price */}
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Total: </Text>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>${totalPrice.toFixed(2)}</Text>
         </View>
         
         <View style={{borderWidth: 1}}/>
         {/* items */}
         <View style={{flexDirection: 'row', alignItems: 'center', gap: 8, marginVertical: 10}}>
            <View style={{ width: 30, height: 30, justifyContent: 'center', backgroundColor: '#e8e8e8'}}>
               <Text style={{textAlign: 'center'}}>x{route.params.quantity}</Text>
            </View>
            <Text style={{fontSize: 20}}>Bubble Tea</Text>
         </View>

         <View style={{borderWidth: 1}}/>

         {/* subtotal */}

         <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
            <Text style={ [styles.font, {fontWeight: 'bold'}]}>Subtotal</Text>
            <Text style={styles.font}>${subtotal}</Text>
         </View>

         {/* add ons */}
         {
            (route.params.tapioca != 0) && 
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
               <Text style={ [styles.font, {fontWeight: 'bold'}]}>Delivery Fee</Text>
               <Text style={styles.font}>${route.params.delivery}</Text>               
            </View>
         }
         {
            (route.params.tapioca != 0) && 
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
               <View style={{ flexDirection: 'column'}}> 
                  <Text style={ [styles.font, {fontWeight: 'bold'}]}>Additional Tapioca</Text>
                  <Text style={{color: '#5d5d5d'}}>+ ${route.params.tapioca}</Text>
               </View>
               <Text style={styles.font}>${route.params.tapioca * route.params.quantity}</Text>               
            </View>
         }

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
               <Text style={ [styles.font, {fontWeight: 'bold'}]}>Tax</Text>
               <Text style={styles.font}>${tax.toFixed(2)}</Text>
            </View>

         
      </View>

   
    </View>
   )
}


const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },

   font: {
      fontSize: 20
   }
});


export default Screen2