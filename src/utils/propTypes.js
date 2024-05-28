import PropTypes from 'prop-types';

export const scenarioPropTypes = PropTypes.shape({
  scenarioPhaseState: PropTypes.shape({
    major: PropTypes.number.isRequired,
    minor: PropTypes.number.isRequired,
  }).isRequired,
  handleNextScenarioPhaseState: PropTypes.func.isRequired,
  handleSkipScenarioPhaseState: PropTypes.func.isRequired,
  isScenarioPhaseDone: PropTypes.func.isRequired,
  isTutorialPhase: PropTypes.func.isRequired,
  isInterviewPhase: PropTypes.func.isRequired,
  getCurrentChapterObject: PropTypes.func.isRequired,
});

export const configPropTypes = PropTypes.shape({
  configState: PropTypes.shape({
    visibility: PropTypes.bool.isRequired,
    questionType: PropTypes.shape({
      cs: PropTypes.bool.isRequired,
      fe: PropTypes.bool.isRequired,
      be: PropTypes.bool.isRequired,
      db: PropTypes.bool.isRequired,
      oop: PropTypes.bool.isRequired,
    }).isRequired,
    questionMain: PropTypes.number.isRequired,
    questionSub: PropTypes.number.isRequired,
    timeLimit: PropTypes.number.isRequired,
  }).isRequired,
  handleConfigState: PropTypes.func.isRequired,
});
