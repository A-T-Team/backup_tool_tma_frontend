import {PoolHolder} from "../../styled-components/PoolStyles/PoolsStyles";
import {PoolItem} from "./PoolItem";
import PoolHeader from "../Pool/PoolHeader";
import {PoolMain} from "../../styled-components/GlobalStyles"


export function Pools() {
    return (
        <>
            <PoolHeader/>
            <PoolMain>
                <PoolHolder>
                    <PoolItem/>
                    <PoolItem />
                    <PoolItem />
                    <PoolItem />
                    <PoolItem />
                    <PoolItem />
                </PoolHolder>
            </PoolMain>
        </>

    )
}
export default Pools;
