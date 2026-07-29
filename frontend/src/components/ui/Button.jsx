import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'framer-motion';

const Button = React.forwardRef(function Button({ children, variant = 'primary', className = '', ...props }, ref) {
  const base = 'button';
  const variantClass = variant === 'primary' ? 'button-primary' : 'button-secondary';
  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.98 }}
      whileHover={{ translateY: -2 }}
      className={`${base} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
};

export default Button;
