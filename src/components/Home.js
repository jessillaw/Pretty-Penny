import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet, Card } from 'react-native';
// import Login from './Login';
// import { HomeBg } from './images/HomeBg.png';
// import { TransparentBg} from './images/TransparentBg.png';
import { TRANSACTIONS } from './redux/InitialState'
// import AnimatedSemiCircularGauge from 'react-native-semi-circular-gauge';

class Home extends Component{
  constructor(props){
    super(props);
    this.state ={
    transactions: TRANSACTIONS
    }
  }


  // const cost = state.transactions.transactions.map((transaction) => transaction.price);
  // const balance = prices.reduce((prev, cur) => (prev += cur), 0);
  // const expense = prices.filter((price) => price < 0).reduce((prev, cur) => (prev += cur), 0) * -1;

render(){
  return (
    <>
    <View>
    


    </View>
    <View
    style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
    > 
    <Text> Costs
    </Text>
    <Text> Costs
    </Text>
    <Text> Costs
    </Text>

    </View>

    </>
  );

  }
}

export default Home;