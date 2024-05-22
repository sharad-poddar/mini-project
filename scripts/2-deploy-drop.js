import { AddressZero } from "@ethersproject/constants";
import fs from 'fs';
import sdk from './1-initilize-sdk.js';
console.log(sdk);

(async()=>{

    try{
        const edition_drop_address = await sdk.deployer.deployEditionDrop({
            name: "community nft's",
            description: "A DAO for community.",
            image: fs.readFileSync("scripts/assets/images.png"),
            primary_sale_recipient: AddressZero,
        })

        console.log("Deployed at", edition_drop_address);
        const editionDrop = await sdk.getContract(edition_drop_address, "edition-drop");

        const metadata = await editionDrop.metadata.get();
        console.log('metadata -> ', metadata);
    }catch(error){
        console.log(error);
    }

})();

// contract address 0x17E6A4a773C68b4ff61A060ed2D3d5f7F836A9ED