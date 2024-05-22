import { ConnectButton } from "thirdweb/react";
import { useActiveAccount } from "thirdweb/react";


export default function NavBar({client}){

    const activeAccount = useActiveAccount();

    return <div>
        <div>
            {activeAccount ? activeAccount.address : "connect your wallet"}
        </div>
        <ConnectButton client={client}/>
    </div>
}