import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {unitH} from '../asset/styles/size';
import {ContainerView, ButtonTheme, TextWhite} from '../asset/styles/themes';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigation = useNavigation();
  const onChangeSearch = (query) => setSearchQuery(query);
  function pressChip(s) {
    setSearchQuery(searchQuery.concat(` ${s.toLowerCase()}`));
  }
  const theme = useSelector((state) => state.theme);
  return (
    <ContainerView>
      <Searchbar
        placeholder="Tìm kiếm"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={() => navigation.navigate('ListSearch',{
          value:searchQuery
        })}
        style={{
          backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
        }}
        iconColor={theme.PRIMARY_TEXT_COLOR}
        inputStyle={{color: theme.PRIMARY_TEXT_COLOR}}
        placeholderTextColor={theme.PRIMARY_TEXT_COLOR}
        autoFocus
        onIconPress={() => navigation.navigate('ListSearch',{
          value:searchQuery
        })}
      />
      <View style={localStyles.suggestions}>
        <ButtonTheme
          style={localStyles.chip}
          onPress={() => pressChip('Bông Hoa Đẹp Nhất')}>
          <TextWhite>Bông hoa đẹp nhất</TextWhite>
        </ButtonTheme>
        <ButtonTheme
          style={localStyles.chip}
          onPress={() => pressChip('Hà Nội')}>
          <TextWhite>Hà Nội</TextWhite>
        </ButtonTheme>
        <ButtonTheme
          style={localStyles.chip}
          onPress={() => pressChip('Sao em nỡ đành quên')}>
          <TextWhite>Sao em nỡ đành quên</TextWhite>
        </ButtonTheme>
        <ButtonTheme
          style={localStyles.chip}
          onPress={() => pressChip('Hiphop')}>
          <TextWhite>Hiphop</TextWhite>
        </ButtonTheme>
        <ButtonTheme
          style={localStyles.chip}
          onPress={() => pressChip('Chếc Khăn Gió Ấm')}>
          <TextWhite>Chếc Khăn Gió Ấm</TextWhite>
        </ButtonTheme>
      </View>
    </ContainerView>
  );
};
const localStyles = StyleSheet.create({
  suggestions: {
    margin: 8 * unitH,
    marginTop: 16,
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  chip: {
    padding: 8,
    borderRadius: 16,
    margin: 4,
  },
});
export default SearchForm;
