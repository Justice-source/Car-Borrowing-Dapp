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


# My Thought process behind tackling this bounty
I had successfully finished all 9 quest that was provided for us and stumbled on this bounty
I wanted to create a dApp that was not only easy to use but unique,
It took me a while to set up Reactjs and brush myself on it as I was rusty.
I made use of resources such as google, stackoverflow and stack up discord channel.
The website is deployed to firebase app. I designed this dApp around Nigeria as most of the locations you will see are 
places located in Akwa Ibom State, Nigeria.
I am happy with the result as it took countless hours and research to finish the bounty.
I am grateful to have the opportunity to be a part of this and I hope to be considered for the rewards.


- A car data array of six (6) cars: My reason for using six cars is just a personal preference _ wanted to add as much cars as possible to the list of options for the customer.
- A better UI included with better more intuitive designs: I made use of the blue color in the CSS of the the quest 9 frontend work files as they easy on the eyes.
- I included a function to calculate the duration of the rental/borrow periodin seconds:This idea came to me after rereading the instructions on the bounty.
- A function to calculate the total cost based on the car price and duration: Since I want customers to be more understand the criteria for borrowing a car, I wanted to include transperency in the dApp , It provides users with an estimate of the total cost they can expect to pay for renting a car, which is crucial for budgeting and decision-making.
- A function to implement personal info and to log previous users:It allows the merchant to authenticate users/ customers, ensuring that only authorized individuals can access specific features or data within my decentralized application(dApp). This is crucial for security and protecting user privacy.
- I included a description of the six cars as well as provided the price in ether:Transparency in cryptocurrency transactions is important,For users/customers familiar with cryptocurrency, having prices in ether allows them to see the exact amount they need to pay without having to convert between cryptocurrencies and fiat currencies.
- I included pictures of the six cars to improve better options on the dApp:Providing detailed descriptions of each cars on the website, including their make, model, type, year, features (such as air conditioning and transmission), and even images, offers potential borrowers a clear and comprehensive understanding of the available options. This transparency is essential for making informed decisions.
  Descriptions and images enhance the user experience by allowing customers to visualize the cars they're interested in renting/borrowing. It helps them compare and choose the vehicle that best suits their needs and preferences.
- I included a pickoff and dropoff duration on the dApp:Planning Convenience, It simplifies trip planning by allowing customers to coordinate their pick-up and drop-off times with other aspects of their travel itinerary, such as flights or meetings.
- I provided a testimonial feature to display all our satisfied customers:Testimonials can be used as a marketing tool to highlight the strengths and unique selling points of our car borrowing dApp. showcasing what sets your service apart from the competition is important.
- I included a rich description of all cars present on the website: Detailed car descriptions help potential customers make informed decisions by providing comprehensive information about each vehicle's features, specifications, and characteristics.


- When reserving/borrowing cars, use the advaced settings of 2072 as your max base fee, 2.5 as your priority fee, and set your gas limit to 800000
  this is very important to note when reserving a chosen car.

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

- My socials
- [Twitter/X](https://twitter.com/Bolypius)
- My Discord username is riopt

To set up the development environment and run the Minted AI DApp locally, follow these steps:

1. Clone the GitHub repository:

   ```shell
   git clone https://github.com/Justice-source/Car-Borrowing-Dapp.git

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
