/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, TouchableOpacity, Modal} from  'react-native';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  state = {
    showModal: false,
    ack: '',
    ORDER_ID: "KAkhjvD,AKhhJDAKSJB",
    TXN_AMOUNT: "100",
    CUST_ID: "Afras Ali"
  }
  render() {
    let {ORDER_ID, TXN_AMOUNT, CUST_ID } = this.state
    return (
        <WebView style={{marginTop: 20}}
          source= {{uri: 'http://192.168.43.10:3001/api/paytm/request/'}}
          injectedJavaScript = {`document.getElementById('ORDER_ID').value = "${Math.random()}";
          document.getElementById('TXN_AMOUNT').value ORDER_ID= "${TXN_AMOUNT}";
          document.getElementById('CUST_ID').value = "${CUST_ID}";document.f1.submit()`}
        />
    )
  }
}