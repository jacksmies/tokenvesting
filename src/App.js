import TokenVestingApp from './views/TokenVestingApp'
import Web3 from 'web3'

function App() {
  let address = "0x15225"
  let token = "0x46464"
  const ethEnabled = async () => {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
      return true;
    }
    return false;
  }
  if (ethEnabled()) console.log("ETH enabled")
  return (
    <TokenVestingApp address={ address } token={ token }/>
  );
}

export default App;
