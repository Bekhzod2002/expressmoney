import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";

const Maps = () => {
    return(
        <YMaps>
            <Map style={{width: '846px', height: '781px'}} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </YMaps>
    
    )
}

export default Maps;