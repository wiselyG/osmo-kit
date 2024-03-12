import {Cosmwalletkit,touCoin} from '@cosmcaptain/cosmjs-wallet-kit';

async function queryBalance(mnemonic,pathId,rpc){
  const cosmKit = new Cosmwalletkit(mnemonic,"osmo",rpc);
  const wallet= await cosmKit.queryBalance(Array.of(pathId));
  console.log("address:",wallet[0].address);
  const coins=wallet[0].coins;
  if(coins.length>0){
    return {"amount":coins[0].amount,"denom":coins[0].denom}
  }
  return {"amount":0};
}

async function transfer(mnemonic,from,to,amount,customgas,rpc){
  const value=touCoin(amount);
  const balance = await queryBalance(mnemonic,from,rpc);
  if(balance.amount<(value+customgas)){
    throw new Error(`wallet balance[${balance.amount}] must great than amount[${value+customgas}] to send`)
  }
  const cosmKit = new Cosmwalletkit(mnemonic,"osmo",rpc);
  const result = await cosmKit.batchFaucet(from,Array.of(to),value,customgas);
  return result;
}

export {transfer,queryBalance}