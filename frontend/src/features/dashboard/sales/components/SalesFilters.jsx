import PropTypes from 'prop-types';
import { DashboardIcon } from '../../components/DashboardIcons';

const SalesFilters = ({ filters, onChange, onApply, onClear, loading }) => (
  <section className="sales-filters" aria-label="Filtros de ventas">
    <label><span>Fecha</span><input name="date" type="date" value={filters.date} onChange={onChange} /></label>
    <label><span>Empleado</span><input name="employee" type="text" placeholder="ID de empleado" value={filters.employee} onChange={onChange} /></label>
    <label><span>Turno</span><input name="shift" type="text" placeholder="ID de turno" value={filters.shift} onChange={onChange} /></label>
    <label><span>Método de pago</span><select name="paymentMethod" value={filters.paymentMethod} onChange={onChange}><option value="">Todos</option><option value="CASH">Efectivo</option><option value="CARD">Tarjeta</option><option value="TRANSFER">Transferencia</option><option value="OTHER">Otro</option></select></label>
    <div className="sales-filter-actions"><button type="button" className="sales-primary-button" onClick={onApply} disabled={loading}><DashboardIcon name="Search" size={15} /> Filtrar</button><button type="button" className="sales-quiet-button" onClick={onClear} disabled={loading}>Limpiar</button></div>
  </section>
);

SalesFilters.propTypes = { filters: PropTypes.shape({ date: PropTypes.string, employee: PropTypes.string, shift: PropTypes.string, paymentMethod: PropTypes.string }).isRequired, onChange: PropTypes.func.isRequired, onApply: PropTypes.func.isRequired, onClear: PropTypes.func.isRequired, loading: PropTypes.bool.isRequired };
export default SalesFilters;