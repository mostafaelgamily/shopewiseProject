import PropTypes from "prop-types";

const ErrorComponent = ({ error }) => <div>Error fetching data: {error}</div>;

ErrorComponent.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorComponent;

/**
 * ErrorComponent:
 *
 * This component displays an error message if there is an issue fetching data.
 *
 * It expects the following props:
 *
 * @prop {string} error - A string that contains the error message to be displayed.
 *
 * Example usage:
 * <ErrorComponent error="Failed to fetch data" />
 */
