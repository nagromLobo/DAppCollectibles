import { Web3 } from '/node'

export class SpaceShipConnect {

    private ganacheServerUrl;
    private web3;

    constructor(ganacheServerUrl){
        this.ganacheServerUrl = ganacheServerUrl;
        this.web3 = new Web3(new Web3.providers.httpProvider(ganacheServerUrl));
    }

    beamMeUp(){

    }

    roleCheck(){

    }

}