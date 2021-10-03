require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture street deny shift protect hidden knife flush gaze'; 
let testAccounts = [
"0x0d7dc4e29f12e2c30cebda779836141186bb5f6c44231d23d0d75febab505ad1",
"0x6b32e17e9882ce7ffd47f79a1fbe091b54268223f5180bbf50c5f66184e45e3f",
"0x9814cb6e0fe85d31678958e6edbe068cc3a499a45850a00a32a78b7c4be96a1c",
"0x0cf4f6d5716240f8b36ca2f173e5d155d234c0546156f14e36d12f246889ec30",
"0x358af6824a4a3830bbff6227409c9a0b60483310075ff9d02dba18958a4be45c",
"0x9b25b00620e90d8507cc7b2253af1f7ab65c740c0052637e01639bb360c229ab",
"0x8101d5aa92c65452c9234532345ffd585bd5b0c0fe2164a5b3ede387db6a11a9",
"0xca6558883a137f6dfebf067faa559dc5bbdffc4eab778eb7c84b2a513e164fb0",
"0x943c3b0ce7b87e8905bdd8ffff7646ffb98721d29c83075286d32dbbc9a63825",
"0xfb6c85f6c536299dfd41d9348e870140ca17a4708647a95cfba87ec515d8c2ca"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

