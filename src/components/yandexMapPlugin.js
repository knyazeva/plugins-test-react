import React from 'react';
import { YMaps, Map, Placemark, ZoomControl, RoutePanel } from "react-yandex-maps";


const mapData = {
    center: [55.753070, 37.622676],
    zoom: 13,
    behaviors: ["drag"]
};

const coordinates = [
    [55.760862, 37.638297],
    [55.753893, 37.616668],
    [55.745518, 37.631945],
    [55.755780, 37.586283]
];



class SimpleMap extends React.Component {


    render() {
        return (
        <div className="map">
            <h2>Карта Yandex</h2>
            <YMaps>
                <Map defaultState={mapData} width="50%" height="400px">
                    {coordinates.map(coordinate => <Placemark key={coordinate} geometry={coordinate} options={{
                        iconLayout: 'default#image',
                        iconImageHref: '/images/metka.jpg',
                        iconImageSize: [40, 40],
                        iconImageOffset: [-3, -42]
                    }} />)}
                    <ZoomControl />
                    <RoutePanel options={{ float: 'right' }} defaultState={{fromEnabled: false,
                        from: "moscow",
                        to: "saint petersburg",
                        type: "auto"}} />
                </Map>
            </YMaps>
        </div>
        );
    }
}



export default SimpleMap;
