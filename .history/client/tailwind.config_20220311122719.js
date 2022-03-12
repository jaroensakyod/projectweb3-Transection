module.exports = {
          content: ["./src/**/*.{html,js}"],
          theme: {
            extend: {},
          },
          plugins: [],
        }Skip to content
 
        Search…
        All gists
        Back to GitHub
        @jaroensakyod 
        @adrianhajdin
        adrianhajdin/Transactions.sol
        Last active yesterday • Report abuse
        55
        18
         Code
         Revisions 2
         Stars 55
         Forks 18
        <script src="https://gist.github.com/adrianhajdin/5f6cc61fa04de7b8fa250eb295db62fd.js"></script>
        Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts
        backendPackages
        npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
        commonStylesWelcome.js
        const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
        deploy.js
        const main = async () => {
          const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
          const transactionsContract = await transactionsFactory.deploy({ value: hre.ethers.utils.parseEther("0.001") });
        
          await transactionsContract.deployed();
        
          console.log("Transactions address: ", transactionsContract.address);
        };
        
        const runMain = async () => {
          try {
            await main();
            process.exit(0);
          } catch (error) {
            console.error(error);
            process.exit(1);
          }
        };
        
        runMain();
        index.css
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");
        
        * html {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          font-family: "Open Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .gradient-bg-welcome {
          background-color:#0f0e13;
          background-image: 
            radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
            radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
            radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
        }
        
        .gradient-bg-services {
          background-color:#0f0e13;
          background-image: 
            radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
            radial-gradient(at 50% 100%, hsla(225,39%,25%,1) 0, transparent 50%);
        }
        
        .gradient-bg-transactions {
          background-color: #0f0e13;
          background-image: 
            radial-gradient(at 0% 100%, hsla(253,16%,7%,1) 0, transparent 50%), 
            radial-gradient(at 50% 0%, hsla(225,39%,25%,1) 0, transparent 50%);
        }
        
        .gradient-bg-footer {
          background-color: #0f0e13;
          background-image: 
            radial-gradient(at 0% 100%, hsla(253,16%,7%,1) 0, transparent 53%), 
            radial-gradient(at 50% 150%, hsla(339,49%,30%,1) 0, transparent 50%);
        }
        
        .blue-glassmorphism {
          background: rgb(39, 51, 89, 0.4);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(0, 0, 0, 0.3);
        }
        
        /* white glassmorphism */
        .white-glassmorphism {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .eth-card {
          background-color:#a099ff;
          background-image: 
            radial-gradient(at 83% 67%, rgb(152, 231, 156) 0, transparent 58%), 
            radial-gradient(at 67% 20%, hsla(357,94%,71%,1) 0, transparent 59%), 
            radial-gradient(at 88% 35%, hsla(222,81%,65%,1) 0, transparent 50%), 
            radial-gradient(at 31% 91%, hsla(9,61%,61%,1) 0, transparent 52%), 
            radial-gradient(at 27% 71%, hsla(336,91%,65%,1) 0, transparent 49%), 
            radial-gradient(at 74% 89%, hsla(30,98%,65%,1) 0, transparent 51%), 
            radial-gradient(at 53% 75%, hsla(174,94%,68%,1) 0, transparent 45%);
        }
        
        .text-gradient {
          background-color: #fff;
          background-image: radial-gradient(at 4% 36%, hsla(0,0%,100%,1) 0, transparent 53%), radial-gradient(at 100% 60%, rgb(0, 0, 0) 0, transparent 50%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        tailwind.config.js
        module.exports = {
          purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
          mode: "jit",
          darkMode: false, // or 'media' or 'class'
          theme: {
            fontFamily: {
              display: ["Open Sans", "sans-serif"],
              body: ["Open Sans", "sans-serif"],
            },
            extend: {
              screens: {
                mf: "990px",
              },
              keyframes: {
                "slide-in": {
                  "0%": {
                    "-webkit-transform": "translateX(120%)",
                    transform: "translateX(120%)",
                  },
                  "100%": {
                    "-webkit-transform": "translateX(0%)",
                    transform: "translateX(0%)",
                  },
                },
              },
              animation: {
                "slide-in": "slide-in 0.5s ease-out",
              },
            },
          },
          variants: {
            extend: {},
          },
          plugins: [require("@tailwindcss/forms")],
        };
        Transactions.sol
        // SPDX-License-Identifier: UNLICENSED
        
        pragma solidity ^0.8.0;
        
        import "hardhat/console.sol";
        
        contract Transactions {
            uint256 transactionCount;
        
            event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp,  string account, string keyword);
          
            struct TransferStruct {
                address sender;
                address receiver;
                uint amount;
                string message;
                uint256 timestamp;
                string account;
                string keyword;
            }
        
            TransferStruct[] transactions;
        
            function transfer(address payable receiver, uint amount, string memory message, string memory account, string memory keyword) public {
                transactionCount += 1;
                transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, account, keyword));
        
                emit Transfer(msg.sender, receiver, amount, message, block.timestamp, account, keyword);
        
                receiver.transfer(amount);
            }
        
            function getAllTransactions() public view returns (TransferStruct[] memory) {
                return transactions;
            }
        
            function getTransactionCount() public view returns (uint256) {
                return transactionCount;
            }
        }
        @Megajjks
        Megajjks commented on Feb 3 • 
        Somes key configs in tailwind.config.json was remove in tailwind v3 like "mode: 'jit'", "purge" etc, check the documentation migrationvV3
        
        Attach my tailwind.config.json current with changes of V3
        
        module.exports = {
          content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
          darkMode: 'media', // or 'media' or 'class'
          theme: {
            fontFamily: {
              display: ["Open Sans", "sans-serif"],
              body: ["Open Sans", "sans-serif"],
            },
            extend: {
              screens: {
                mf: "990px",
              },
              keyframes: {
                "slide-in": {
                  "0%": {
                    "-webkit-transform": "translateX(120%)",
                    transform: "translateX(120%)",
                  },
                  "100%": {
                    "-webkit-transform": "translateX(0%)",
                    transform: "translateX(0%)",
                  },
                },
              },
              animation: {
                "slide-in": "slide-in 0.5s ease-out",
              },
            },
          },
          plugins: [require("@tailwindcss/forms")],
        };
        @Jeevan-Kiran-Lenka
        Jeevan-Kiran-Lenka commented on Feb 5
        Got
        
        npm ERR! code ERESOLVE
        npm ERR! ERESOLVE could not resolve
        npm ERR! 
        npm ERR! While resolving: smart_contract@1.0.0
        npm ERR! Found: @nomiclabs/hardhat-ethers@undefined
        npm ERR! node_modules/@nomiclabs/hardhat-ethers
        npm ERR!   dev @nomiclabs/hardhat-ethers@"*" from the root project
        npm ERR! 
        npm ERR! Could not resolve dependency:
        npm ERR! dev @nomiclabs/hardhat-ethers@"*" from the root project
        npm ERR! 
        npm ERR! Conflicting peer dependency: hardhat@2.8.3
        npm ERR! node_modules/hardhat
        npm ERR!   peer hardhat@"^2.0.0" from @nomiclabs/hardhat-ethers@2.0.4
        npm ERR!   node_modules/@nomiclabs/hardhat-ethers
        npm ERR!     dev @nomiclabs/hardhat-ethers@"*" from the root project
        npm ERR! 
        npm ERR! Fix the upstream dependency conflict, or retry
        npm ERR! this command with --force, or --legacy-peer-deps
        npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
        npm ERR! 
        npm ERR! See /home/jeevan/.npm/eresolve-report.txt for a full report.
        
        npm ERR! A complete log of this run can be found in:
        npm ERR!     /home/jeevan/.npm/_logs/2022-02-05T04_27_38_459Z-debug-0.log
        while running
        npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
        
        what should I do to resolve this?
        
        @Scotty813
        Scotty813 commented on Feb 6
        try deleting node_modules and rerun "npm i"
        
        @Jeevan-Kiran-Lenka
        Jeevan-Kiran-Lenka commented on Feb 7
        Thanks, @Scotty813 it worked :)
        
        @Jeevan-Kiran-Lenka
        Jeevan-Kiran-Lenka commented on Feb 7
        A new problem got
        
        Error: too many arguments:  in Contract constructor (count=1, expectedCount=0, code=UNEXPECTED_ARGUMENT, version=contracts/5.5.0)
            at Logger.makeError (/home/jeevan/Desktop/Web3.0/smart_contract/node_modules/@ethersproject/logger/src.ts/index.ts:225:28)
            at Logger.throwError (/home/jeevan/Desktop/Web3.0/smart_contract/node_modules/@ethersproject/logger/src.ts/index.ts:237:20)
            at Logger.checkArgumentCount (/home/jeevan/Desktop/Web3.0/smart_contract/node_modules/@ethersproject/logger/src.ts/index.ts:303:18)
            at ContractFactory.getDeployTransaction (/home/jeevan/Desktop/Web3.0/smart_contract/node_modules/@ethersproject/contracts/src.ts/index.ts:1206:16)
            at ContractFactory.<anonymous> (/home/jeevan/Desktop/Web3.0/smart_contract/node_modules/@ethersproject/contracts/src.ts/index.ts:1234:53)
            at step (/home/jeevan/Desktop/Web3.0/smart_contract/node_modules/@ethersproject/contracts/lib/index.js:48:23)
            at Object.next (/home/jeevan/Desktop/Web3.0/smart_contract/node_modules/@ethersproject/contracts/lib/index.js:29:53)
            at fulfilled (/home/jeevan/Desktop/Web3.0/smart_contract/node_modules/@ethersproject/contracts/lib/index.js:20:58)
            at processTicksAndRejections (node:internal/process/task_queues:96:5) {
          reason: 'too many arguments:  in Contract constructor',
          code: 'UNEXPECTED_ARGUMENT',
          count: 1,
          expectedCount: 0
        }
        while running npx hardhat run scripts/deploy.js --network ropsten, how can I solve this?
        
        @Scotty813
        Scotty813 commented on Feb 7
        Im not sure to be honest, but it looks like it's complaining about node_modules again, but this time it's the node_modules in your smart_contract directory. I would do the same thing as before...just delete node_modules from the smart_contract directory and rerun npm i.
        
        @romasinha
        romasinha commented on Feb 8
        @Jeevan-Kiran-Lenka Maybe you can try downgrading your Node version from Node 17.0.0 to any other lower version since the latest Node version is running into errors and other conflict issues with Hardhat.
        
        Install nvm to easily toggle between different versions.
        
        @Jeevan-Kiran-Lenka
        Jeevan-Kiran-Lenka commented 29 days ago
        Gotcha!!, Thanks, @romasinha and @Scotty813 , deleting the node modules worked form me, although at some point of time the log was also telling me to downgrade the node version
        
        @Trentron
        Trentron commented 23 days ago • 
        I got a problem when running npx hardhat run scripts/deploy.js --network ropsten
        
        npm ERR! code E404
        npm ERR! 404 Not Found - GET https://registry.npmjs.org/harhhat - Not found
        npm ERR! 404
        npm ERR! 404 'harhhat@latest' is not in this registry.
        npm ERR! 404 You should bug the author to publish it (or use the name y
        it (or use the name yourself!)
        npm ERR! 404
        npm ERR! 404 Note that you can also install from a
        .
        npm ERR! 404 tarball, folder, http url, or git url.
        
        npm ERR! A complete log of this run can be found in:
        npm ERR! C:\Users\win10ltsc\AppData\Local\npm-cache_logs\2022-02-16T08_00_12_324Z-debug-0.log
        
        anyone knows where my problem is?
        
        @musindo
        musindo commented 23 days ago • 
        i am getting the following error tyring to deploy the contract, i am new, may you kindly assist
        
        Compiling 1 file with 0.8.0
        Solidity compilation finished successfully
        Error: non-payable constructor cannot override value (operation="overrides.value", value={"type":"BigNumber","hex":"0x038d7ea4c68000"}, code=UNSUPPORTED_OPERATION, version=contracts/5.5.0)
        @EthixLucifer
        EthixLucifer commented 23 days ago
        Got this error when adding metamask connection with the button
        `Uncaught ReferenceError: initialState is not defined
        at TransactionProvider (TransactionContext.jsx:26:62)
        at renderWithHooks (react-dom.development.js:14985:18)
        at mountIndeterminateComponent (react-dom.development.js:17811:13)
        at beginWork (react-dom.development.js:19049:16)
        at HTMLUnknownElement.callCallback2 (react-dom.development.js:3945:14)
        at Object.invokeGuardedCallbackDev (react-dom.development.js:3994:16)
        at invokeGuardedCallback (react-dom.development.js:4056:31)
        at beginWork$1 (react-dom.development.js:23964:7)
        at performUnitOfWork (react-dom.development.js:22776:12)
        at workLoopSync (react-dom.development.js:22707:5)
        TransactionProvider @ TransactionContext.jsx:26
        renderWithHooks @ react-dom.development.js:14985
        mountIndeterminateComponent @ react-dom.development.js:17811
        beginWork @ react-dom.development.js:19049
        callCallback2 @ react-dom.development.js:3945
        invokeGuardedCallbackDev @ react-dom.development.js:3994
        invokeGuardedCallback @ react-dom.development.js:4056
        beginWork$1 @ react-dom.development.js:23964
        performUnitOfWork @ react-dom.development.js:22776
        workLoopSync @ react-dom.development.js:22707
        renderRootSync @ react-dom.development.js:22670
        performSyncWorkOnRoot @ react-dom.development.js:22293
        scheduleUpdateOnFiber @ react-dom.development.js:21881
        updateContainer @ react-dom.development.js:25482
        (anonymous) @ react-dom.development.js:26021
        unbatchedUpdates @ react-dom.development.js:22431
        legacyRenderSubtreeIntoContainer @ react-dom.development.js:26020
        render @ react-dom.development.js:26103
        (anonymous) @ main.jsx:7
        react-dom.development.js:20085 The above error occurred in the component:
        
        at TransactionProvider (http://localhost:3000/src/context/TransactionContext.jsx?t=1645016101285:35:3)
        Consider adding an error boundary to your tree to customize error handling behavior.
        Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
        logCapturedError @ react-dom.development.js:20085
        update.callback @ react-dom.development.js:20118
        callCallback @ react-dom.development.js:12318
        commitUpdateQueue @ react-dom.development.js:12339
        commitLifeCycles @ react-dom.development.js:20736
        commitLayoutEffects @ react-dom.development.js:23426
        callCallback2 @ react-dom.development.js:3945
        invokeGuardedCallbackDev @ react-dom.development.js:3994
        invokeGuardedCallback @ react-dom.development.js:4056
        commitRootImpl @ react-dom.development.js:23151
        unstable_runWithPriority @ scheduler.development.js:468
        runWithPriority$1 @ react-dom.development.js:11276
        commitRoot @ react-dom.development.js:22990
        performSyncWorkOnRoot @ react-dom.development.js:22329
        scheduleUpdateOnFiber @ react-dom.development.js:21881
        updateContainer @ react-dom.development.js:25482
        (anonymous) @ react-dom.development.js:26021
        unbatchedUpdates @ react-dom.development.js:22431
        legacyRenderSubtreeIntoContainer @ react-dom.development.js:26020
        render @ react-dom.development.js:26103
        (anonymous) @ main.jsx:7
        TransactionContext.jsx:26 Uncaught ReferenceError: initialState is not defined
        at TransactionProvider (TransactionContext.jsx:26:62)
        at renderWithHooks (react-dom.development.js:14985:18)
        at mountIndeterminateComponent (react-dom.development.js:17811:13)
        at beginWork (react-dom.development.js:19049:16)
        at HTMLUnknownElement.callCallback2 (react-dom.development.js:3945:14)
        at Object.invokeGuardedCallbackDev (react-dom.development.js:3994:16)
        at invokeGuardedCallback (react-dom.development.js:4056:31)
        at beginWork$1 (react-dom.development.js:23964:7)
        at performUnitOfWork (react-dom.development.js:22776:12)
        at workLoopSync (react-dom.development.js:22707:5) The page is blank and shows this error in inspect element console. please anyone help me out here
        
        @paul963
        paul963 commented 22 days ago • 
        I am getting the following error (Error HH12) tyring to test the smart contrac. I try everything and othing worked
        \smart_contract> npx hardhat test
        Error HH12: Trying to use a non-local installation of Hardhat, which is not supported.
        Please install Hardhat locally using npm or Yarn, and try again.
        For more info go to https://hardhat.org/HH12 or run Hardhat with --show-stack-traces
        hardhat not installed
        
        I have an error when I use import { ethers } from 'ethers';
        Error: [plugin:vite:import-analysis] Failed to resolve import "ethers" from "src\context\TransactionContext.jsx". Does the file exist?
        Console: net::ERR_ABORTED 500 (Internal Server Error)
        
        I have no error in the code or in the console but when I try to connect to the metamask the account connects and I don't receive anything in the console just "No accounts found". I always get in the error loop "No ethereum object". Inainte sa ma conectez cu metamask daca trimiteam un string gol primeam obiectul corect.
        I attached a video at this link https://drive.google.com/file/d/1F4IdSki9_WfMT9EVmYmEgScirFK0hcbj/view?usp=sharing
        I attached the code for TransactionContext.jxs here https://drive.google.com/file/d/1ys70eJs4nkCDk4Q-eZXbnF89KwbcFJeB/view?usp=sharing
        UPDATE: I resolved this
        
        @realatharv
        realatharv commented 21 days ago
        @musindo which command are you using to deploy?
        
        @Taranmielec
        Taranmielec commented 12 days ago
        @paul963
        how did you resolve that hh12 error? i tried everything
        
        @paul963
        paul963 commented 11 days ago
        @Taranmielec i don't resolved it. I put this address in client>src>utils>constants.js from the git project. It is annoying to see all the transactions in history that have been made on this contract but at least it runs
        contractAddress = '0xfCCF80344a668b72ac4Be23513F0E9E4a35C84fA';
        
        @Taranmielec
        Taranmielec commented 7 days ago
        @paul963 i guess hardhat doesn't work well on windows or i'm just a newbie
        I done compile and migrate of smart contract by truffle and it works well, maybe it will help someone
        
        @paul963
        paul963 commented 5 days ago
        Thanks @Taranmielec !
        
        @sanchalika
        sanchalika commented 4 days ago • 
        I am getting internal server errors after changing the tailwind config file how to fix this can you help me out?
        
        @SadiqurS
        SadiqurS commented yesterday
        I am getting this error not sure what it is exactly can someone help out?
        
        [plugin:vite:css] Cannot find module '@tailwindcss/forms'
        Require stack:
        
        /Users/sadiqur_sakib/Desktop/Projects/web3.0/client/tailwind.config.js
        /Users/sadiqur_sakib/Desktop/Projects/web3.0/client/node_modules/tailwindcss/lib/lib/setupTrackingContext.js
        /Users/sadiqur_sakib/Desktop/Projects/web3.0/client/node_modules/tailwindcss/lib/index.js
        /Users/sadiqur_sakib/Desktop/Projects/web3.0/client/_
        /Users/sadiqur_sakib/Desktop/Projects/web3.0/client/src/index.css
        at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
        at Function.Module._load (node:internal/modules/cjs/loader:778:27)
        at Module.require (node:internal/modules/cjs/loader:1005:19)
        at require (node:internal/modules/cjs/helpers:102:18)
        at Object. (/Users/sadiqur_sakib/Desktop/Projects/web3.0/client/tailwind.config.js:30:13)
        at Module._compile (node:internal/modules/cjs/loader:1103:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
        at Module.load (node:internal/modules/cjs/loader:981:32)
        at Function.Module._load (node:internal/modules/cjs/loader:822:12)
        at Module.require (node:internal/modules/cjs/loader:1005:19
        @jaroensakyod
         
        Leave a comment
        No file chosen
        Attach files by dragging & dropping, selecting or pasting them.
        © 2022 GitHub, Inc.
        Terms
        Privacy
        Security
        Status
        Docs
        Contact GitHub
        Pricing
        API
        Training
        Blog
        About
        