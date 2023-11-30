// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract BettingContract {
    enum BetState {
        PENDING,
        WINNING,
        LOSING,
        PAID_OUT,
        LOST
    }
    enum GameState {
        OPEN,
        CLOSED,
        WAITING_FOR_WINNERS,
        WINNERS_DECLARED
    }

    struct Bet {
        address user;
        uint256 amount;
        uint256 gameID;
        uint256 betOption;
        BetState state;
    }

    struct Game {
        string description;
        bool isOpen;
        uint256[] bets;
        uint256 totalFunds;
        uint256 numBets;
        GameState state;
    }

    Game[] public games;
    mapping(uint256 => mapping(uint256 => Bet)) public bets;
    mapping(uint256 => uint256[]) public winningBets;
    uint256 public numGames;

    event NewGame(string description);
    event NewBet(uint256 gameID, uint256 betOption);
    event GameClosed(uint256 gameID);
    event BetStateChanged(uint256 gameID, uint256 betOption, BetState newState);
    event WinningsDistributed(
        uint256 gameID,
        uint256[] winningBets,
        uint256 totalWinnings
    );

    constructor() {
        numGames = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner());
        _;
    }

    function owner() public view returns (address) {
        return address(this);
    }

    function createGame(string memory _description) public {
        games.push(
            Game(_description, true, new uint256[](0), 0, 0, GameState.OPEN)
        );
        numGames++;
        emit NewGame(_description);
    }
    

    function getAllGames() public view returns (Game[] memory) {
        Game[] memory allGames = new Game[](numGames);

        for (uint256 i = 0; i < numGames; i++) {
            allGames[i] = games[i];
        }

        return allGames;
    }

    function testContract() public pure returns (string memory) {
        return "HEllOOOO000";
    }

    function placeBet(uint256 _gameId, uint256 _betOption) public payable {
        require(_gameId < numGames, "Invalid game ID");
        Game storage game = games[_gameId];
        require(game.isOpen, "Game is not open");
        require(msg.value > 0, "Bet amount must be greater than 0");
        Bet storage bet = bets[_gameId][game.numBets];
        bet.user = msg.sender;
        bet.amount = msg.value;
        bet.gameID = _gameId;
        bet.betOption = _betOption;
        bet.state = BetState.PENDING;
        game.bets.push(game.numBets);
        game.numBets++;
        game.totalFunds += msg.value;
        emit NewBet(_gameId, _betOption);
    }

    function closeGame(uint256 _gameId) public onlyOwner {
        require(_gameId < numGames, "Invalid game ID");
        Game storage game = games[_gameId];
        require(game.isOpen, "Game is already closed");
        game.isOpen = false;
        emit GameClosed(_gameId);
    }

    function removeBet(uint256 _gameId) public {
        require(_gameId < numGames, "Invalid game ID");
        Game storage game = games[_gameId];
        require(game.isOpen, "Game is not open");
        uint256[] storage betsForGame = game.bets;
        for (uint256 i = 0; i < betsForGame.length; i++) {
            Bet storage bet = bets[_gameId][i];
            if (bet.user == msg.sender) {
                payable(msg.sender).transfer(bet.amount);
                betsForGame[i] = betsForGame[betsForGame.length - 1];
                betsForGame.pop();
                emit BetStateChanged(_gameId, bet.betOption, BetState.LOST);
                delete bets[_gameId][i];
                break;
            }
        }
    }

    function declareWinners(
        uint256 _gameId,
        uint256[] memory _winningBets
    ) public onlyOwner {
        require(games[_gameId].state == GameState.OPEN, "Game is not open");
        require(
            _winningBets.length > 0,
            "At least one winning bet must be provided"
        );
        require(
            _winningBets.length <= games[_gameId].numBets,
            "Invalid number of winning bets provided"
        );

        // Mark winning bets
        for (uint256 i = 0; i < _winningBets.length; i++) {
            uint256 betId = _winningBets[i];
            Bet storage bet = bets[_gameId][betId];
            require(
                bet.state == BetState.PENDING,
                "Bet is already declared as a winner or loser"
            );
            bet.state = BetState.WINNING;
        }

        // Mark losing bets
        for (uint256 i = 0; i < games[_gameId].numBets; i++) {
            Bet storage bet = bets[_gameId][i];
            if (bet.state == BetState.PENDING) {
                bet.state = BetState.LOSING;
            }
        }

        // Store winning bets
        winningBets[_gameId] = _winningBets;

        // Update game state to "WAITING_FOR_WINNERS"
        games[_gameId].state = GameState.WAITING_FOR_WINNERS;
    }

    function distributeWinnings(uint256 _gameId) public onlyOwner {
        require(
            games[_gameId].state == GameState.WAITING_FOR_WINNERS,
            "Game is not waiting for winners"
        );

        uint256 totalFunds = games[_gameId].totalFunds;
        uint256 numWinningBets = winningBets[_gameId].length;
        uint256 winningsPerBet = totalFunds / numWinningBets;

        for (uint256 i = 0; i < numWinningBets; i++) {
            uint256 betId = winningBets[_gameId][i];
            Bet storage bet = bets[_gameId][betId];
            require(bet.state == BetState.WINNING, "Bet is not a winning bet");
            payable(bet.user).transfer(winningsPerBet);
            bet.state = BetState.PAID_OUT;
            emit BetStateChanged(_gameId, bet.betOption, BetState.PAID_OUT);
        }

        // Update game state to "WINNERS_DECLARED"
        games[_gameId].state = GameState.WINNERS_DECLARED;
        emit WinningsDistributed(_gameId, winningBets[_gameId], totalFunds);
    }
}
