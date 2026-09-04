import PropTypes from 'prop-types';
import { useState } from 'react';
import { DashboardIcon } from './DashboardIcons';
import { dashboardNavItems } from '../data/dashboardMockData';

const DashboardShell = ({ activeView, onNavigate, children, user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const groupedItems = dashboardNavItems.reduce((groups, item) => ({ ...groups, [item.group]: [...(groups[item.group] || []), item] }), {});
  const handleNavigate = (view) => { onNavigate(view); setSidebarOpen(false); };

  return (
    <div className="dashboard-shell">
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'is-open' : ''}`}>
        <div className="dashboard-brand"><span className="dashboard-brand-mark"><DashboardIcon name="Zap" size={18} /></span><div><strong>KORE</strong><span>STATION CONTROL</span></div></div>
        <div className="dashboard-sidebar-label">Centro operativo</div>
        <nav className="dashboard-nav" aria-label="Navegación del centro operativo">
          {Object.entries(groupedItems).map(([group, items]) => <div className="dashboard-nav-group" key={group}>
            <span className="dashboard-nav-heading">{group}</span>
            {items.map((item) => <button className={`dashboard-nav-item ${activeView === item.id ? 'is-active' : ''}`} key={item.id} type="button" onClick={() => handleNavigate(item.id)}><DashboardIcon name={item.icon} /><span>{item.label}</span>{item.id !== 'overview' && <small>Próximo</small>}</button>)}
          </div>)}
        </nav>
        <div className="dashboard-sidebar-footer"><div className="dashboard-connection"><span className="dashboard-live-dot" /> Entorno de demostración</div><span className="dashboard-version">Foundation 1.0</span></div>
      </aside>
      {sidebarOpen && <button className="dashboard-overlay" type="button" aria-label="Cerrar navegación" onClick={() => setSidebarOpen(false)} />}
      <div className="dashboard-workspace">
        <header className="dashboard-topbar"><button className="dashboard-menu-toggle" type="button" aria-label="Abrir navegación" onClick={() => setSidebarOpen(true)}><DashboardIcon name="Menu" /></button><div className="dashboard-breadcrumb"><span>Estación central</span><DashboardIcon name="ChevronRight" size={14} /><strong>Control operacional</strong></div><div className="dashboard-topbar-actions"><span className="dashboard-updated"><span className="dashboard-live-dot" /> Datos de demostración</span><div className="dashboard-user"><span className="dashboard-avatar">{user?.nombre?.charAt(0)?.toUpperCase() || 'U'}</span><span>{user?.nombre || 'Usuario'}</span></div></div></header>
        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
};

DashboardShell.propTypes = { activeView: PropTypes.string.isRequired, onNavigate: PropTypes.func.isRequired, children: PropTypes.node.isRequired, user: PropTypes.shape({ nombre: PropTypes.string }) };
DashboardShell.defaultProps = { user: null };

export default DashboardShell;