import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCounterStore } from './src/store/counterStore';

const App = (): React.JSX.Element => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Counter App</Text>

        <Text style={styles.count}>{count}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={decrement}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={increment}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={reset}
          activeOpacity={0.8}
        >
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 40,
  },
  count: {
    fontSize: 72,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontSize: 36,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  resetButton: {
    marginTop: 30,
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
  },
  resetText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111111',
  },
});

export default App;