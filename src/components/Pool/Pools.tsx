import {PoolHolder} from "../../styled-components/PoolStyles/PoolsStyles";
import {PoolItem} from "./PoolItem";
import {log} from "util";
import PoolHeader from "../Pool/PoolHeader";
import {GlobalStyle, AppContainer, PoolMain} from "../../styled-components/GlobalStyles"



export function Pools() {

    const request = fetch('http://127.0.0.1:8080/api/pools')
        .then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
        });
    console.log(request);


    return (
        <>
            <PoolHeader/>
            <PoolMain>
                <PoolHolder>
                    <PoolItem/>
                    <PoolItem/>
                    <PoolItem/>
                    <PoolItem/>
                    <PoolItem/>
                    <PoolItem/>
                </PoolHolder>
            </PoolMain>
        </>

            )
            }