import PropTypes from 'prop-types';

export const scenarioPropTypes = PropTypes.shape({
  isSection: PropTypes.func.isRequired,
  subsectionState: PropTypes.number.isRequired,
  getSubsectionObject: PropTypes.func.isRequired,
  toNextSubsection: PropTypes.func.isRequired,
  toLastSubsection: PropTypes.func.isRequired,
  isSubsectionLast: PropTypes.func.isRequired,
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
