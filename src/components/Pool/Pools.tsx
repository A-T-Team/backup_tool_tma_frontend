import {PoolHolder} from "../../styled-components/PoolStyles/PoolsStyles";
import {PoolItem} from "./PoolItem";
import PoolHeader from "../Pool/PoolHeader";
import {PoolMain} from "../../styled-components/GlobalStyles"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPoolsFromApi} from "../../apiActions/apiActions";
import {AppDispatch, RootState} from "../../store/storeConfig";


export function Pools() {
    const dispatch = useDispatch<AppDispatch>();
    const {pools} = useSelector((state:RootState) => state.poolsList )

    useEffect(()=>{
        dispatch(getPoolsFromApi())
    },[dispatch])

    return (
        <>
            <PoolHeader/>
            <PoolMain>
                <PoolHolder>
                    {pools.map((p, k) => (<PoolItem key={k}/>))}
                </PoolHolder>
            </PoolMain>
        </>

    )
}
export default Pools;
