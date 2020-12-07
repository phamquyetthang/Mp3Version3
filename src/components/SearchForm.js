import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {unitH} from '../asset/styles/size';
import {ContainerView, TextTheme, ButtonTheme} from '../asset/styles/themes';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

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
        onSubmitEditing={() => console.log(searchQuery)}
        style={{
          backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
        }}
        iconColor={theme.PRIMARY_TEXT_COLOR}
        inputStyle={{color: theme.PRIMARY_TEXT_COLOR}}
        placeholderTextColor={theme.PRIMARY_TEXT_COLOR}
        autoFocus
      />
      <View style={localStyles.suggestions}>
        <ButtonTheme
          style={localStyles.chip}
          onPress={() => pressChip('Thu cuối')}>
          <TextTheme>Thu cuối</TextTheme>
        </ButtonTheme>
        <ButtonTheme
          style={localStyles.chip}
          onPress={() => pressChip('Hà Nội')}>
          <TextTheme>Hà Nội</TextTheme>
        </ButtonTheme>
        <ButtonTheme
          style={localStyles.chip}
          onPress={() => pressChip('Sao em nỡ đành quên')}>
          <TextTheme>Sao em nỡ đành quên</TextTheme>
        </ButtonTheme>
        <ButtonTheme
          style={localStyles.chip}
          onPress={() => pressChip('Hiphop')}>
          <TextTheme>Hiphop</TextTheme>
        </ButtonTheme>
        <ButtonTheme
          style={localStyles.chip}
          onPress={() => pressChip('Tân cổ giao duyên')}>
          <TextTheme>Tân cổ giao duyên</TextTheme>
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
