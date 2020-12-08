import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TextTheme} from '../asset/styles/themes';
import Icon from 'react-native-vector-icons/Ionicons';
import {unitH} from '../asset/styles/size';
const IconCustom = ({
  name,
  handlePress,
  style = null,
  size = 24,
  color = null,
}) => {
  const size24 = size * unitH;
  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <TextTheme>
        {color != null ? (
          <Icon name={name} size={size24} color={color} />
        ) : (
          <Icon name={name} size={size24} />
        )}
      </TextTheme>
    </TouchableOpacity>
  );
};

export default React.memo(IconCustom);
