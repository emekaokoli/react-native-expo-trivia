import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchData, resetQuiz } from '../redux/ActionCreators';
import configureStore from '../redux/configureStore';

const { persistor } = configureStore();

export default function Restart(props) {
  //const Reset = useSelector((state) => state.resetQuiz);
  const dispatch = useDispatch();

  const getAnswers = props.answers.map((answer) => {
    return (
      <View>
        <Text>answer</Text>
      </View>
    );
  });
  return (
    // <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.scoreText}>Your Score Sheet</Text>

        <Text style={styles.answersLength}>
          Total Questions: {props.answers.length}
        </Text>

        <Text style={styles.TFtexts}>True: {getAnswers['True']}</Text>
        <Text style={styles.TFtexts}>False: {getAnswers['False']}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate('Home'),
                //persistor.purge(),
                dispatch(resetQuiz()),
                dispatch(fetchData());
            }}
          >
            <Text style={styles.ButtonText}>Restart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate.reset()}
          >
            <Text style={styles.ButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    // </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: -1,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 450,
    width: 400,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
    margin: 20,
  },
  TFtexts: {
    flex: 1,
    color: '#000',
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    padding: 10,
    height: 40,
    width: '40%',
    margin: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    // flex: -3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  scoreText: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#000',
    fontSize: 22,
    margin: 30,
  },
  answersLength: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
  },
});
