import PropTypes from 'prop-types';
import { DashboardIcon } from './DashboardIcons';

const DashboardPlaceholder = ({ title, description, icon }) => <section className="dashboard-placeholder"><span className="dashboard-placeholder-icon"><DashboardIcon name={icon} size={28} /></span><span className="dashboard-eyebrow">Módulo en preparación</span><h2>{title}</h2><p>{description}</p><span className="dashboard-placeholder-note">La estructura visual está lista para conectarse a su dominio y API.</span></section>;

DashboardPlaceholder.propTypes = { title: PropTypes.string.isRequired, description: PropTypes.string.isRequired, icon: PropTypes.string.isRequired };

export default DashboardPlaceholder;