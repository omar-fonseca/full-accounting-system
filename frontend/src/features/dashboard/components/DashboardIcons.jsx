import PropTypes from 'prop-types';
import {
  Activity, Boxes, CalendarClock, ChartNoAxesCombined, CheckCircle2, ChevronRight, CircleDollarSign,
  ClipboardCheck, Clock3, Fuel, Info, LayoutDashboard, Menu, Package, PackageSearch, RadioTower,
  Plus, ReceiptText, RefreshCw, Search, TriangleAlert, TrendingUp, UsersRound, X, Zap,
} from 'lucide-react';

const icons = {
  Activity, Boxes, CalendarClock, ChartNoAxesCombined, CheckCircle2, ChevronRight, CircleDollarSign,
  ClipboardCheck, Clock3, Fuel, Info, LayoutDashboard, Menu, Package, PackageSearch, RadioTower,
  Plus, ReceiptText, RefreshCw, Search, TriangleAlert, TrendingUp, UsersRound, X, Zap,
};

export const DashboardIcon = ({ name, size = 18 }) => {
  const Icon = icons[name] || Activity;
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />;
};

DashboardIcon.propTypes = { name: PropTypes.string.isRequired, size: PropTypes.number };