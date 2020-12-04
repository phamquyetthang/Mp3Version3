import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  darkTheme,
  lightTheme,
  TextTheme,
} from '../../asset/styles/themes';
import {setDarkModeAction} from '../../redux/actions';

const User = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const changeColorMode = () => {
    if (theme.mode === 'dark') {
      dispatch(setDarkModeAction(lightTheme));
    } else {
      dispatch(setDarkModeAction(darkTheme));
    }
  };
  return (
    <Container>
      <TouchableOpacity onPress={changeColorMode}>
        {theme.mode === 'dark' ? (
          <TextTheme>Chuyển sang chế độ sáng</TextTheme>
        ) : (
          <TextTheme>Chuyển sang chế độ tối</TextTheme>
        )}
      </TouchableOpacity>
    </Container>
  );
};

export default User;
