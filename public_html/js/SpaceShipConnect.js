class SpaceShipConnect {

    private ganacheServerUrl;
    private web3;
    private account;

    constructor(ganacheServerUrl, contractAddress){
        this.ganacheServerUrl = ganacheServerUrl;

        this.web3 = new Web3(new Web3.providers.HttpProvider(ganacheServerUrl));
        this.contract = this.web3.eth.contract('').at(contractAddress); //TODO need abi here

        this.account = this.web3.eth.accounts[0];
    }

    async beamMeUp(rank){
        return new Promise((fulfill, reject) => {
            this.contract.beamMeUp(rank, (response) => {
                fulfill(response);
            });
        });

    }

    async roleCheck(){
        return new Promise((fulfill, reject) => {
            this.contract.roleCheck((response) => {
                fulfill(response);
            });
        })
    }
}

spaceShipConnect = new SpaceShipConnect('HTTP://localhost:7545', 0x90918a8522c363eD79e002b1C29f6c8D99990E5e);

