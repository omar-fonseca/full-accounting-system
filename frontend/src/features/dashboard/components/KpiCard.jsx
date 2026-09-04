import PropTypes from 'prop-types';
import { DashboardIcon } from './DashboardIcons';

const KpiCard = ({ label, value, unit, detail, trend, status, updatedAt, tone, icon }) => (
  <article className="dashboard-kpi" aria-label={`${label}: ${value} ${unit}`}>
    <div className="dashboard-kpi-topline"><span>{label}</span><span className={`dashboard-kpi-icon dashboard-tone-${tone}`}><DashboardIcon name={icon} size={17} /></span></div>
    <div className="dashboard-kpi-value"><strong>{value}</strong>{unit && <span>{unit}</span>}</div>
    <div className="dashboard-kpi-meta"><span className={`dashboard-trend dashboard-tone-${tone}`}>{trend}</span><span>{detail}</span></div>
    <div className="dashboard-kpi-foot"><span className={`dashboard-kpi-status dashboard-tone-${tone}`}>{status}</span><span>{updatedAt}</span></div>
  </article>
);

KpiCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  unit: PropTypes.string,
  detail: PropTypes.string.isRequired,
  trend: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  tone: PropTypes.oneOf(['positive', 'warning', 'neutral']).isRequired,
  icon: PropTypes.string.isRequired,
};

KpiCard.defaultProps = { unit: '' };

export default KpiCard;