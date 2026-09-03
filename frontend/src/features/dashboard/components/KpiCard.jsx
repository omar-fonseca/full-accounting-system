import PropTypes from 'prop-types';
import { DashboardIcon } from './DashboardIcons';

const KpiCard = ({ label, value, detail, trend, tone, icon }) => (
  <article className="dashboard-kpi">
    <div className="dashboard-kpi-topline"><span>{label}</span><span className={`dashboard-kpi-icon dashboard-tone-${tone}`}><DashboardIcon name={icon} size={17} /></span></div>
    <strong>{value}</strong>
    <div className="dashboard-kpi-meta"><span className={`dashboard-trend dashboard-tone-${tone}`}>{trend}</span><span>{detail}</span></div>
  </article>
);

KpiCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  trend: PropTypes.string.isRequired,
  tone: PropTypes.oneOf(['positive', 'warning', 'neutral']).isRequired,
  icon: PropTypes.string.isRequired,
};

export default KpiCard;