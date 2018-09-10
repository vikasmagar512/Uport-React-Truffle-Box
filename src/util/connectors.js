import {Connect, SimpleSigner} from 'uport-connect'

export const uport = new Connect('vikasmagar512@gmail.com\'s new app', {
        clientId: '2ooDrnN6A2Xh6Xf9vw4va33YmitQ9TqHcRE',
    network: 'rinkeby',
    signer: SimpleSigner('1f6c61a34d9fafd88dc2448da852cc332b4ba20641e2709f75a0c4e3b3982cae')
})
export const web3 = uport.getWeb3()
