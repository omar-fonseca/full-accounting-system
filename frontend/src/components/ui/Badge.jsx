import PropTypes from 'prop-types';

const Badge = ({ children, className = '' }) => {
  return (
    <span className={`badge-mini ${className}`} role="status">
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Badge;
