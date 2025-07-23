import { View } from 'react-native';
import progressBarStyles from '@/utils/progressBarStyles';

type Props = {
  count: number
  firstBarColor: string
  secondBarColor: string
  thirdBarColor?: string
  barHeight: number
  barWidth: number
  barRadius: number
};

export default function ProgressBar({ count, firstBarColor, secondBarColor, thirdBarColor, barHeight, barWidth, barRadius }: Props) {

  if(count === 2) {
    return (
      <View style={progressBarStyles.styles.container}>
          <View style={[{height: barHeight}, {width: barWidth}, {borderRadius: barRadius}, {backgroundColor: firstBarColor}]} />
          <View style={[{height: barHeight}, {width: barWidth}, {borderRadius: barRadius}, {backgroundColor: secondBarColor}]} />
      </View>
    );
  }

  else {
    return (
      <View style={progressBarStyles.styles.container}>
          <View style={[{height: barHeight}, {width: barWidth}, {borderRadius: barRadius}, {backgroundColor: firstBarColor}]} />
          <View style={[{height: barHeight}, {width: barWidth}, {borderRadius: barRadius}, {backgroundColor: secondBarColor}]} />
          <View style={[{height: barHeight}, {width: barWidth}, {borderRadius: barRadius}, {backgroundColor: thirdBarColor}]} />
      </View>
    );
  }

}
