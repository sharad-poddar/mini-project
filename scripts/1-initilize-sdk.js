import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from 'dotenv';
dotenv.config();

const sdk = ThirdwebSDK.fromPrivateKey( process.env.VITE_PRIVATE_KEY, "sepolia", {
    secretKey: process.env.VITE_SECRET_KEY
});

console.log(sdk.signer.address);
export default sdk;
