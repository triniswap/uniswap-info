export async function addTokenToMetamask(ethereum: any, id: string, symbol: string) {
  const IMAGE_URL = 'https://raw.githubusercontent.com/1Hive/brightid-honey-faucet/master/app/src/assets/honey.svg'
  const DECIMALS = 18
  try {
    await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: id,
          symbol: symbol,
          decimals: DECIMALS,
          image: IMAGE_URL
        }
      }
    })
  } catch (error) {
    console.log(error)
  }
}
