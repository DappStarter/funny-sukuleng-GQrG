require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strong rival punch pulse grace industry slot gas'; 
let testAccounts = [
"0x46ddc2afbe8b50b486e85042300364bbfbb8a6e91e6846206b9dadc3c9df3a5c",
"0x559980e24774292d171746f9e92c716f54b55f7423dc4c397d5a0c37beff048d",
"0x525edf09fb3e80eacb9a35a00353d8fd1353957540dfd56ab9012d540bd377cf",
"0x794223edbe1328f7c5d114a3aa2c4a7681c1301507cff15762a56f614b241df5",
"0xca0a8a92ea440043de813027382f52affabcc21b804a8c8e6fb26c102297a292",
"0xad687594fe4a0bac4304de292b78202f2bd3738fea0f875deea835d3e8de9ed2",
"0x720d12c86512b888e63db99c19c15cb26103940e80473b9c042fff442e66e474",
"0x67b479fbb29d9d919389fe22001624c6844d1ed1a80a180b7b33763d87f0df1a",
"0x5160fee56837ee320756dd1675a9a4a1e826303de3173d803eb0e1ace233874b",
"0x16c2c55c96f3a8f1b8436b4eb848fca1d616d3f4ee19f904011d5219c57a012d"
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

