import React from 'react';
import { View, StyleSheet } from 'react-native';

const ClueHeaderProgressBar = ({ currentStep, totalSteps }) => {
  const steps = [];
  for (let i = 1; i <= totalSteps; i++) {
    steps.push(
      <View
        key={i}
        style={[
          styles.step,
          i <= currentStep ? styles.activeStep : styles.inactiveStep,
        ]}
      />
    );
  }

  return <View style={styles.progressBar}>{steps}</View>;
};

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%', 
    paddingVertical: 10,
    alignItems: 'center',
  },
  step: {
    flex: 1,
    height: 8,
    marginHorizontal: 2,
    borderRadius: 4,
  },
  activeStep: {
    backgroundColor: '#6cbe45',
  },
  inactiveStep: {
    backgroundColor: '#d3d3d3',
  },
});

export default ClueHeaderProgressBar;
