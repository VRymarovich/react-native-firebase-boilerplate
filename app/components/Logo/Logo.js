import React from 'react';
import Svg,{
    Polygon,
} from 'react-native-svg';
import { colors } from '../../config/styles';

const Logo = (props) => {
  return (
      <Svg height="100" width="100" viewBox="0 0 100 100">
        <Polygon
          points="0,100 0,95 5,95 5,90 10,90 10,85 15,85 90,85 90,90 95,90 95,95 100,95 100,100"
          fill={colors.color5}
        />
        <Polygon
          points="20,80 34,80 34,30 20,30"
          fill={colors.color5}
        />
        <Polygon
          points="43,80 57,80 57,30 43,30"
          fill={colors.color5}
        />
        <Polygon
          points="66,80 80,80 80,30 66,30"
          fill={colors.color5}
        />
        <Polygon
          points="5,25 5,20 50,5 95,20 95,25"
          fill={colors.color5}
        />
      </Svg>
  );
}
export default Logo;
