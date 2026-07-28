import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    className={`feature-card ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
