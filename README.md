# Car Borrowing Dapp

Car borrowing Dapp is a decentralized application (Dapp) built on Ethereum using Solidity and ReactJs. It allows users to book and borrow cars and make payments using decentralized currency like ether and HBAR.

<div style="text-align:center;">
  <img src="/src/images/Car-Rental-Dapp.png" alt="site">
</div>

Car Rental Dapp provides an easy and decentralized way for users to book cars for rental. Users can select a car type, pick-up and drop-off locations, and choose the rental duration. Payments are made using cryptocurrency via the Ethereum blockchain.

# Writeup
This write-up will explain why you picked these features and explain how the features will work.
I worked had in providing a unique Car borrowing dApp;
I included additional functionality to the dApp such as:

- A car data array of six (6) cars.
- A better UI included with better more intuitive designs.
- I included a function to calculate the duration of the rental/borrow periodin seconds.
- A function to calculate the total cost based on the car price and duration.
- A function to implement personal info and to log previous users.
- I included a description of the six cars as well as provided the price in ether.
- I included pictures of the six cars to improve better options on the dApp.
- I included a pickoff and dropoff duration on the dApp.
- I provided a testimonial feature to display all our satisfied customers.
- I included a rich description of all cars present on the website.


When reserving/borrowing cars, use the advaced settings of 2072 as your max base fee, 2.5 as your priority fee, and set your gas limit to 800000

- User-friendly interface for booking cars.
- Integration with the Ethereum blockchain for secure and transparent payments.
- Selection of car type, pick-up, and drop-off locations.
- Validation and error handling for booking and payment processes.
- Smart contract to manage car rentals, payments, and user balances.


Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
- [MetaMask](https://metamask.io/) extension installed in your browser.
- Ethereum wallet with testnet Ether for testing (e.g., Ropsten or Rinkeby).
- You could also make use of the hedera testnet.

To set up the development environment and run the Minted AI DApp locally, follow these steps:

1. Clone the GitHub repository:

   ```shell
   git clone https://github.com/Justice-source/Car-Rental-Dapp.git

2. Install the dependencies:

    ```shell
    npm install

3. Set up environment variables:

    Create a .env file in the project root directory.

    Add your own environment variables which should look like this:
    ```
    
    API_URL = "https://eth-sepolia.g.alchemy.com"
    PRIVATE_KEY = "i84ffbb7610332fasd15w51f89sdf3cv2f7d2ecbcf8fd344f0d06c27103345"
    this for an example incliude your own


    //Make sure to replace them with the actual values.
4. Deploy the Smart Contract:

    ```shell
    npx hardhat run scripts/deploy.js --network sepolia

5. Start the development server:

    ```shell
    npm run start

The DApp will be accessible at http://localhost:3000.

6. You can interact with the dApp, follow instructions and you are good to go.
