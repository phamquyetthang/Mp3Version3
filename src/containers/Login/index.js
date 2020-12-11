import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import {Styles} from './style';
import {acc} from './acc.json';
import {useNavigation} from '@react-navigation/native';
import {ContainerView} from '../../asset/styles/themes';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    pass: '',
  });
  const [checked, setChecked] = useState(true);
  function onChangeEmail(e) {
    setUser({
      ...user,
      email: e,
    });
  }
  function onChangePass(e) {
    setUser({
      ...user,
      pass: e,
    });
  }
  const storeData = async (value) => {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@acc', jsonValue);
    await AsyncStorage.setItem('@hasAcc', true);
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@acc');
      if (jsonValue != null) {
        console.log(JSON.parse(jsonValue).email);
        setUser({
          email: JSON.parse(jsonValue).email,
          pass: JSON.parse(jsonValue).password,
        });
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const navigation = useNavigation();
  async function checkLogin() {
    // let check = "fail";
    if (user.pass === '' || user.email === '') {
      Alert.alert('Chưa nhập đầy đủ');
    } else {
      let check = false;
      let myacc = {};
      for (let i = 0; i < acc.length; i++) {
        if (user.pass === acc[i].password && user.email === acc[i].email) {
          check = true;
          myacc = acc[i];
          break;
        }
      }
      if (check) {
        storeData(myacc);
        navigation.navigate('Main');
      } else {
        Alert.alert('Tài khoản sai');
      }
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ContainerView style={Styles.loginForm}>
        <Text style={Styles.text1}>ĐĂNG NHẬP</Text>
        <View style={Styles.inputGroup}>
          <TextInput
            label="Tên tài khoản"
            placeholder="Tên tài khoản"
            onChangeText={(e) => onChangeEmail(e)}
            autoFocus={true}
            keyboardType="email-address"
            autoCapitalize="none"
            value={user.email}
          />
          <TextInput
            label="Mật khẩu"
            placeholder="Mật Khẩu"
            secureTextEntry={true}
            // value={user.pass}
            onChangeText={(e) => onChangePass(e)}
            autoCapitalize="none"
            value={user.pass}
          />
          <View style={Styles.checkbox}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text> Nhớ mật khẩu</Text>
          </View>

          <TouchableOpacity style={Styles.button1} onPress={() => checkLogin()}>
            <Text style={{fontSize: 16}}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </ContainerView>
    </TouchableWithoutFeedback>
  );
}
