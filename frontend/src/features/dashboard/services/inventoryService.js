import { inventoryLevels } from '../data/dashboardMockData';

const getInventorySummary = async () => ({ levels: inventoryLevels });

export default { getInventorySummary };