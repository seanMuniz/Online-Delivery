import { StyleSheet, Text, View, ImageBackground, TextInput, Switch, Pressable } from 'react-native';
import {useState} from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';



const Screen1 = ({navigation}) => {
    const [deliveryToggle, setDeliveryToggle] = useState(false);
    const [qty, setQty] = useState(0);
    const [tapiocaToggle, setTapiocaToggle] = useState(false);

    let price = 5.99



    const processOrder = () => {
        if (qty == 0 || null){
            alert("Please enter a quantity")
        } else {

            let deliveryFee = (deliveryToggle) ? 4.99 : 0.00; 
            
            let tapiocaFee = (tapiocaToggle) ? 2.99 : 0.00; 
            
            navigation.navigate("Order Receipt",{
                basePrice: price, 
                delivery: deliveryFee, 
                tapioca: tapiocaFee, 
                quantity: qty} )
        }
    }

    const decrement = () => setQty(count => (count > 0 ? count - 1 : 0));
    const increment = () => setQty(count => count + 1)

    const clearOrder = () => {
        setDeliveryToggle(false);
        setQty(0);
        setTapiocaToggle(false);
    }


   return(
       <View style={{flex: 1, justifyContent: 'space-between'}}>

            <View>
            {/* Top image */}
            <View style={{height: 200}}>
            <ImageBackground 
                style={{height: '100%'}}
                source={{uri: "https://assets.epicurious.com/photos/5953ca064919e41593325d97/4:3/w_4992,h_3744,c_limit/bubble_tea_recipe_062817.jpg"}}
                >
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                        <View style={{borderWidth: 1, borderRadius: '50%', padding: 7,backgroundColor: 'black'}}>
                            <MaterialIcons name="close" size={30} color="white" fontWeight="bold" />
                        </View>
                        <View style={{borderWidth: 1, borderRadius: '50%', padding: 7, backgroundColor: 'black'}}>
                            <Ionicons name="share-outline" size={30} color="white" />
                        </View>
                    </View>
                </ImageBackground>
            </View>

            {/* item details and description  */}
            <View style={{height: 150, flexDirection: 'column', justifyContent:'space-between', marginHorizontal:15}}>

                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Bubble Tea</Text>
                
                <Text style={{fontSize: 18, color: '#5d5d5d'}}>${price}</Text>
                
                <Text style={{color: '6f6f6f'}}>Deliciously refreshing and customizable, our bubble tea is made with high-quality tea, creamy milk, and perfectly chewy tapioca pearls.</Text>
                
                <View style={{backgroundColor: '#e8e8e8', width: 80, borderRadius: 5, padding: 5}}>
                    <Text style={{textAlign: 'center', color: '#5d5d5d'}}>Popular</Text>
                </View>
            </View>
            
            <View style={{flexDirection: 'column', height: 130, justifyContent: 'space-between',marginTop: 10}}>

                {/* Stepper */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Qty: {qty}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Pressable style={{borderWidth: 1, width: 80, height: 30, justifyContent: 'center', borderTopLeftRadius: 20, borderBottomLeftRadius: 20}} 
                                    onPress={increment}>
                            <Text style={{textAlign: 'center'}}>+</Text>
                        </Pressable>
                        <Pressable style={{borderWidth: 1, width: 80, height: 30, justifyContent: 'center', borderTopRightRadius: 20, borderBottomRightRadius: 20}} onPress={decrement}>
                            <Text style={{textAlign: 'center'}}>-</Text>
                        </Pressable>
                    </View>
                </View>
                
                {/* Toggles for tapioca and delivery */}
                <View style={styles.styleSwitch}>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Extra Tapioca </Text>
                        <Text style={{color: '#5d5d5d'}}>+ $2.99</Text>
                    </View>
                    <Switch 
                        value={tapiocaToggle}
                        onValueChange={setTapiocaToggle}
                    />
                </View>
                <View style={styles.styleSwitch}>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Delivery</Text>
                        <Text style={{color: '#5d5d5d'}}>+ $4.99</Text>
                    </View>
                    <Switch 
                        value={deliveryToggle}
                        onValueChange={setDeliveryToggle}
                    />
                </View>    
            </View>
        </View>




        <View style={{
             alignItems:'center', 
            height: 120,
            justifyContent: 'space-between',
            marginBottom: 80}}>
            
            <Pressable
            onPress={processOrder}
            style={[styles.button, {backgroundColor: 'black'}]}
            >
                <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Confirm Order</Text>
            </Pressable>
            
            <Pressable
            onPress={clearOrder}
            style={[styles.button, {backgroundColor: 'white'}]}
            >
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Clear Order</Text>
            
            </Pressable>
        </View>

       </View>
   )
}


const styles = StyleSheet.create({
   styleSwitch: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 40,
   },
   button: {
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    width: 300,
    borderRadius: 20
   }
});


export default Screen1