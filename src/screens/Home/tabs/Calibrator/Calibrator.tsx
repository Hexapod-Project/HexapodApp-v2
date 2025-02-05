import {StyleSheet, View} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';
import JointSelector from './components/JointSelector';
import {TabScreen, Tabs, TabsProvider} from 'react-native-paper-tabs';
import PWMPulseCalibrator from './components/PWMPulseCalibrator';
import ServoTester from './components/ServoTester';
import {useEffect, useState} from 'react';
import TabWrapper from '../../../../components/TabWrapper';
import HexapodModeChecker from '../../../../components/HexapodModeChecker/HexapodModeChecker';
import {HEXAPOD_MODE} from '../../../../enums/Hexapod.enum';

export default function Calibrator() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeJoint, setActiveJoint] = useState(1);

  return (
    <HexapodModeChecker
      style={styles.container}
      requiredMode={HEXAPOD_MODE.CALIBRATE}>
      <View style={styles.jointSelectorContainer}>
        <JointSelector
          activeJoint={activeJoint}
          onJointSelected={index => setActiveJoint(index)}
        />
      </View>

      <View style={styles.tabsContainer}>
        <TabsProvider
          defaultIndex={currentIndex}
          onChangeIndex={index => setCurrentIndex(index)}>
          <Tabs
            theme={{
              ...theme,
              colors: {
                ...theme.colors,
                onSurface: theme.colors.primary,
              },
            }}
            disableSwipe>
            <TabScreen label="Calibrate" icon={'av-timer'}>
              <PWMPulseCalibrator activeJoint={activeJoint} />
            </TabScreen>

            <TabScreen label="Test" icon={'angle-acute'}>
              <TabWrapper
                index={1}
                currentIndex={currentIndex}
                initializeOnshow>
                <ServoTester activeJoint={activeJoint} />
              </TabWrapper>
            </TabScreen>
          </Tabs>
        </TabsProvider>
      </View>
    </HexapodModeChecker>
  );
}

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
    },
    jointSelectorContainer: {
      alignItems: 'center',
    },
    tabsContainer: {
      flexGrow: 1,
      backgroundColor: theme.colors.surface,
    },
  });
