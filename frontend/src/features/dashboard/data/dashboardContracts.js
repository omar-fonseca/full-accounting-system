/**
 * @typedef {Object} KpiMetric
 * @property {string} label
 * @property {string} value
 * @property {string} detail
 * @property {string} trend
 * @property {'positive'|'warning'|'neutral'} tone
 * @property {string} icon
 *
 * @typedef {Object} SalesSummary
 * @property {Array<{time: string, amount: number}>} timeline
 * @property {string} period
 * @property {string} unit
 *
 * @typedef {Object} FuelSummary
 * @property {number} volume
 * @property {string} unit
 * @property {Array<{name: string, value: number, color: string}>} mix
 *
 * @typedef {Object} InventorySummary
 * @property {Array<{name: string, value: number, status: string}>} levels
 *
 * @typedef {Object} ShiftSummary
 * @property {Array<{name: string, employee: string, status: string, time: string, tone: string}>} today
 *
 * @typedef {Object} AlertSummary
 * @property {Array<{title: string, description: string, tone: string, icon: string}>} items
 *
 * @typedef {Object} RecentActivity
 * @property {Array<{time: string, label: string, detail: string, icon: string}>} items
 *
 * @typedef {Object} DashboardSummary
 * @property {KpiMetric[]} kpis
 * @property {SalesSummary} sales
 * @property {FuelSummary} fuel
 * @property {InventorySummary} inventory
 * @property {ShiftSummary} shifts
 * @property {AlertSummary} alerts
 * @property {RecentActivity} activity
 */

export {};