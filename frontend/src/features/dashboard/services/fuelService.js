import { fuelMix } from '../data/dashboardMockData';

const getFuelSummary = async () => ({ volume: 8420, unit: 'litros', mix: fuelMix });

export default { getFuelSummary };