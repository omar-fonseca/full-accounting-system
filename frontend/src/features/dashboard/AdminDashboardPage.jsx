import { Container, Grid, Paper, Typography, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { LineChart, Line, PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import '../../styles/pages/AdminDashboard.css';
import AuthUserMenu from '../../components/AuthUserMenu';

const data = [
  { name: 'Enero', ventas: 4000 },
  { name: 'Febrero', ventas: 3000 },
  { name: 'Marzo', ventas: 5000 },
  { name: 'Abril', ventas: 7000 },
];

const pieData = [
  { name: 'Productos A', value: 2400 },
  { name: 'Productos B', value: 4567 },
  { name: 'Productos C', value: 1398 },
  { name: 'Productos D', value: 9800 },
];

function AdminDashboardPage() {
  return (
    <div className="dashboard">
      <Drawer variant="permanent" className="dashboard-drawer">
        <Typography variant="h5" className="dashboard-title">KORE Station</Typography>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Resumen" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Ventas" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Clientes" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Reportes" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Configuración" />
          </ListItem>
        </List>
      </Drawer>

      <Container maxWidth="lg" className="dashboard-container">
        <header className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Bienvenidos a mi Sitio Dashboard</h1>
          <AuthUserMenu />
        </header>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className="dashboard-card">
              <Typography variant="h6">Usuarios Activos</Typography>
              <Typography variant="h4">1,234</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className="dashboard-card">
              <Typography variant="h6">Nuevos Clientes</Typography>
              <Typography variant="h4">567</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className="dashboard-card">
              <Typography variant="h6">Ingresos</Typography>
              <Typography variant="h4">$12,345</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className="dashboard-card">
              <Typography variant="h6">Pendientes</Typography>
              <Typography variant="h4">89</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper className="dashboard-chart">
              <Typography variant="h6">Gráfico de Ventas Mensuales</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <Line type="monotone" dataKey="ventas" stroke="#3f51b5" strokeWidth={2} />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className="dashboard-chart">
              <Typography variant="h6">Distribución de Productos</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className="dashboard-activities">
              <Typography variant="h6">Actividades Recientes</Typography>
              <ul>
                <li>Usuario A realizó una compra</li>
                <li>Usuario B se registró</li>
                <li>Usuario C actualizó su perfil</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AdminDashboardPage;
