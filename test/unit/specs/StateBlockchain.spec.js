import store from '@/store';
import blockchain from '@/store/modules/blockchain';

describe('State blockchain', () => {
  const host = 'https://infuranet.infura.io/vuethexplore';
  const blockNumber = 1;

  it('should set host', () => {
    blockchain.mutations.setHost(store.state.blockchain, host);

    expect(store.state.blockchain.host).to.equal(host);
  });

  it('should has version', () => {
    expect(store.getters.version.length > 0).to.equal(true);
  });

  it('should has isBeta', () => {
    const version = store.getters.version;

    expect(store.getters.isBeta).to.equal(version.indexOf('beta') >= 0);
  });

  it('should connected', (done) => {
    expect(store.getters.connected).to.equal(false);

    store.state.blockchain.web3.eth.getBlockNumber().then((bn) => {
      expect(bn > 0).to.equal(true);
      expect(store.getters.connected).to.equal(true);
    }).catch(() => {
      expect(store.getters.connected).to.equal(true);
    }).then(() => {
      done();
    });
  });

  it('should set block number', () => {
    blockchain.mutations.setBlockNumber(store.state.blockchain, blockNumber);

    expect(store.state.blockchain.blockNumber).to.equal(blockNumber);
  });
});
