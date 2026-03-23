const fs = require('fs');
const config = {
  "lunchFlow": {
    "apiKey": process.env.LUNCH_FLOW_API_KEY || 'NOT_FOUND_LUNCH_FLOW_API_KEY',
    "baseUrl": "https://lunchflow.app/api/v1"
  },
  "actualBudget": {
    "serverUrl": "https://bulky-bullfinch.pikapod.net",
    "budgetSyncId": "97ddf8f1-c0e8-46d3-a2a1-33615f636b49",
    "password": process.env.ACTUAL_BUDGET_PW || 'NOT_FOUND_ACTUAL_BUDGET_PW',
    "encryptionPassword": "",
    "duplicateCheckingAcrossAccounts": true
  },
  "accountMappings": [
    {
      "lunchFlowAccountId": 13440,
      "lunchFlowAccountName": "CAPITAL ONE FINANCIAL CORPORATION ASSOCIATE SAVINGS PLAN",
      "actualBudgetAccountId": "350eca00-613e-4764-89e9-5f498b0c7d44",
      "actualBudgetAccountName": "401K (Fidelity)",
      "syncStartDate": "2026-03-15",
      "includePending": true
    },
    {
      "lunchFlowAccountId": 13439,
      "lunchFlowAccountName": "Cash Management (Individual - TOD)",
      "actualBudgetAccountId": "d4f4e300-23ea-41ec-813b-f08887be93c4",
      "actualBudgetAccountName": "Fidelity CMA",
      "syncStartDate": "2026-03-15",
      "includePending": true
    },
    {
      "lunchFlowAccountId": 13438,
      "lunchFlowAccountName": "ROTH IRA",
      "actualBudgetAccountId": "4f1119b1-2b87-4cce-ac84-76d0e6568ac3",
      "actualBudgetAccountName": "Roth IRA (Fidelity)",
      "syncStartDate": "2026-03-15",
      "includePending": true
    },
    {
      "lunchFlowAccountId": 13437,
      "lunchFlowAccountName": "Individual - TOD",
      "actualBudgetAccountId": "38ba9b06-fab0-4282-8fe8-57447abf5db0",
      "actualBudgetAccountName": "Investing (Fidelity)",
      "syncStartDate": "2026-03-15",
      "includePending": true
    },
    {
      "lunchFlowAccountId": 13436,
      "lunchFlowAccountName": "Health Savings Account",
      "actualBudgetAccountId": "df455dca-6df0-44ce-b864-ed3bb5b38a85",
      "actualBudgetAccountName": "HSA (Fidelity)",
      "syncStartDate": "2026-03-15",
      "includePending": true
    },
    {
      "lunchFlowAccountId": 13435,
      "lunchFlowAccountName": "Fidelity® Rewards Visa Signature® Card 7399",
      "actualBudgetAccountId": "bece6403-1730-4d24-bcac-4b8e5ae12b02",
      "actualBudgetAccountName": "[CC] Fidelity Rewards",
      "syncStartDate": "2026-03-15",
      "includePending": true
    }
  ]
};
fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));

