# osmo-kit

This is a toolkit for osmo transfer and query balance.

## functions

- query balance from osmosis chain and transfer it

```
import {queryBalance,transfer} from 'osmo-kit';

const taskquery = async ()=>{
  const balance = await queryBalance(mnemonic,0,osmo_rpc);
  console.log(balance);
}

const tasktransfer = async ()=>{
  const result = await transfer(mnemonic,from,to,amount,customgas,rpc);
  console.log(result);
}

```

