import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { Component } from 'react'

export class MapContainer extends Component {
   render() {
      /*       const containerStyle = {
         width: '20%',
         textAlign: 'right',
         height: '20%',
         textAlign: 'center',
      } */

      return (
         <div className={StyleSheet.mapa}>
            <Map
               google={this.props.google}
               /*                containerStyle={containerStyle}
                */ initialCenter={{
                  lat: 50.24095789519349,
                  lng: 16.4046010244367,
               }}
               zoom={17}
               onClick={this.onMapClicked}
            >
               <Marker
                  title={'Jilovanka'}
                  position={{ lat: 50.24095789519349, lng: 16.4046010244367 }}
               />
            </Map>
         </div>
      )
   }
}

export default GoogleApiWrapper({
   apiKey: process.env.REACT_APP_KEY_GOOGLE_MAPS,
})(MapContainer)
