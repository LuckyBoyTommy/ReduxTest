import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions, Animated
} from 'react-native';
import RefreshableFlatList from 'react-native-refreshable-flatlist';
import Counter from '../components/Counter';
import { connect } from 'react-redux'; // 引入connect函数
import {StackActions, NavigationActions } from 'react-navigation';
import *as counterAction from '../actions/counterAction';
import FingerprintPopup from '../components/FingerprintPopup'
const { width } = Dimensions.get('window');
const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login'})
  ]
})

class MainPage extends Component {

  static navigationOptions = {
    title: 'MainPage',
  };
  constructor() {
    super();
    this.state = {
      data: new Array(3).fill(1).map((x, i) => ({ id: i, text: `Item No. ${i}` })),
    }}
  logout() {
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    const { user } = this.props.navigation;
    const { count, incrementFn, decrementFn } = this.props;

    return(
      <View style={styles.container}>
        <Counter incrementFn={incrementFn} decrementFn={decrementFn} counter={count}>
        </Counter>
        <TouchableOpacity onPress={this.logout.bind(this)} style={{marginTop: 50}}>
          <View>
            <Text>退出登录
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FFFF'
  },
  topBar: {
    backgroundColor: '#F7F7F8',
    height: 64,
    zIndex: 10,
  },
  row: {
    padding: 10,
    height: 125,
    width:width,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    marginBottom: -1,
    borderBottomColor: '#E5EDF5',
    borderTopColor: '#E5EDF5',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    color: '#6da3d0',
    fontSize:15
  },
  navText: {
    color: '#6da3d0',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 30
  }
})

export default connect(
  (state) => ({
    count: state.counter.count,
  }),
  (dispatch) => ({
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement()),
  })
)(MainPage)
