import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Botón reutilizable para iconos con estado de interacción y estilo común.
const IconButton = ({ label, icon, className = '', onClick, ...props }) => (
  <motion.button
    type="button"
    aria-label={label}
    title={label}
    whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.02 }}
    className={`icon-button ${className}`}
    onClick={onClick}
    {...props}
  >
    {icon}
  </motion.button>
);

IconButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
