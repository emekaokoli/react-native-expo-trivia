import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getNextQuestion, nextQuestionIndex } from '../redux/ActionCreators';
import CardScreen from './CardScreen';
import Restart from './Restart';

export default function QuizScreen(props) {
  const { currentQuestion, isLoading, errMess, nextQuestion } = useSelector(
    (state) => ({
      nextQuestion: state.nextQuestion,
      currentQuestion: state.currentQuestion,
      isLoading: state.isLoading,
      errMess: state.errMess,
    }),
  );

  const [answers, setAnswers] = useState([]);
  //const [nextIndex, setNextIndex] = useState(0)

  const dispatch = useDispatch();

  React.useEffect(() => {
    function fetchDispatch() {
      dispatch(nextQuestionIndex(currentQuestion));
      dispatch(getNextQuestion(currentQuestion));
    }
    console.log(nextQuestion.incorrect_answers);
    if (nextQuestion.correct_answer == true) {
      console.log('na true');
      console.log(nextQuestion.correct_answer);
    } else {
      console.log('na false');
      console.log(nextQuestion.incorrect_answer);
    }

    fetchDispatch();
  }, [currentQuestion, nextQuestionIndex, getNextQuestion]);

  const handleTrue = (props) => {
    setAnswers(() => [{ True: props }, ...answers]);

    dispatch(nextQuestionIndex(currentQuestion + 1));
    dispatch(getNextQuestion(currentQuestion + 1));
  };

  const handleFalse = (props) => {
    setAnswers(() => [{ False: props }, ...answers]);
    dispatch(nextQuestionIndex(currentQuestion + 1));
    dispatch(getNextQuestion(currentQuestion + 1));
  };

  return (
    <SafeAreaView>
      {nextQuestion && currentQuestion >= 10 ? (
        <Restart answers={answers} navigation={props.navigation} />
      ) : (
        <CardScreen
          question={nextQuestion}
          isLoading={isLoading}
          errMess={errMess}
          handleTrue={handleTrue}
          handleFalse={handleFalse}
        />
      )}
    </SafeAreaView>
  );
}
