pragma experimental ABIEncoderV2;

contract Adoption {

    struct Astronaut {
        string rank;
        uint dna;
    }

    mapping (address => Astronaut[]) private spaceships;

    mapping(string => uint) private astronautRankDna;

    function beamMeUp(string rank) public payable returns (string, uint) {
        assert(astronautRankDna[rank] == 0);

        uint spaceBucks = msg.value;
        address spaceshipAddress = msg.sender;
        uint dna = generateDna(rank);

        Astronaut memory astronaut = Astronaut(rank, dna);
        spaceships[spaceshipAddress].push(astronaut);

        return (astronaut.rank, astronaut.dna);
    }

    function generateDna(string rank) private view returns (uint) {
        uint currentBlockHash = uint(blockhash(block.number));
        uint uniqueAstronautDna = currentBlockHash % (10 ** 2);
        uint rankDna = astronautRankDna[rank] % (10 ** 3);

        return (rankDna * (10 ** 2)) + uniqueAstronautDna;
    }

    function roleCall() public view returns (Astronaut[]){
        return spaceships[msg.sender];
    }

}
