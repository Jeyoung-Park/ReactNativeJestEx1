import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

// const Home = () => {
//   const data = useState('test');

//   const change = x => {
//     return x * 10;
//   };

//   return (
//     <SafeAreaView
//       style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 20}}>Home</Text>
//     </SafeAreaView>
//   );
// };

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 'test',
    };
  }

  change(x) {
    // return x * 10;
    this.setState({data: x * 10});
  }

  render() {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Home</Text>
      </SafeAreaView>
    );
  }
}

export default Home;
