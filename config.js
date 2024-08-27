import dotenv from 'dotenv'

// Updating path due to being executed in the examples/x directory
dotenv.config({ path: '../../.env' })

export default {
    "rpc_url": process.env.RPC_URL,
    "private_key": process.env.PRIVATE_KEY,
    "account_type": process.env.ACCOUNT_TYPE || 'simple',
    "contract_address": "0xdf3Cf7F9923a6D19D3765206Fa39a4174E5AD1F4",
    "function_name": "requestTokens",
    "entry_point": "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
}
