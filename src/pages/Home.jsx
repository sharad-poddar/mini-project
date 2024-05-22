import { useActiveAccount } from "thirdweb/react";



export default function Home(){
    
    const activeAccount = useActiveAccount();

    if(!activeAccount?.address){
        return <div>
            connect to your wallet
        </div>
    }
    
    return <div>
        <div className="landing">
            <h1>👀 wallet connected, now what!</h1>
        </div>
    </div>
}