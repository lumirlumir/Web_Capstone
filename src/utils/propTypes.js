import PropTypes from 'prop-types';

export const scenarioPropTypes = PropTypes.shape({
  phase: PropTypes.arrayOf(
    PropTypes.shape({
      global: PropTypes.shape({
        auto: PropTypes.bool.isRequired,
      }).isRequired,
      FooterL: PropTypes.shape({
        visibility: PropTypes.bool.isRequired,
      }).isRequired,
      FooterM: PropTypes.shape({
        visibility: PropTypes.bool.isRequired,
      }).isRequired,
      FooterR: PropTypes.shape({
        visibility: PropTypes.bool.isRequired,
        isSubmit: PropTypes.bool.isRequired,
      }).isRequired,
      HeaderL: PropTypes.shape({
        visibility: PropTypes.bool.isRequired,
      }).isRequired,
      HeaderR: PropTypes.shape({
        visibility: PropTypes.bool.isRequired,
      }).isRequired,
      Main: PropTypes.shape({
        ButtonMain: PropTypes.shape({
          visibility: PropTypes.bool.isRequired,
          content: PropTypes.string.isRequired,
        }).isRequired,
        Heading: PropTypes.shape({
          visibility: PropTypes.bool.isRequired,
        }).isRequired,
        SectionClient: PropTypes.shape({
          visibility: PropTypes.bool.isRequired,
        }).isRequired,
        SectionServer: PropTypes.shape({
          visibility: PropTypes.bool.isRequired,
          content: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
});

export const scenarioPhasePropTypes = PropTypes.shape({
  scenarioPhaseState: PropTypes.number.isRequired,
  handleNextScenarioPhaseState: PropTypes.func.isRequired,
  handleSkipScenarioPhaseState: PropTypes.func.isRequired,
  isScenarioPhaseDone: PropTypes.func.isRequired,
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
