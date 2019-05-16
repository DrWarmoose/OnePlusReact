import Configuration from '../Configuration';

class RouteService {
    constructor(){
        this.config = new Configuration();
    }

    async getRouteList()
    {
        return fetch(this.config.ROUTELIST_URL)
        .then(response => 
          { 
            return response.json(); 
          })
        .then(json => { 
            console.log("retrieved route list.");
            console.log(json);
            return json;
        })
        .catch(error => {
            console.error( error );
        });
    }

    async getRouteDetail(symbol)
    {
        console.log( 'fetching route detail:' + symbol);
        return fetch(this.config.ROUTE_DETAIL_URL+symbol)
        .then(response => 
          { 
            return response.json(); 
          })
        .then(json => { 
            console.log("retrieved route detail.");
            console.log(json);
            return json;
        })
        .catch(error => {
            console.error( 'get routeDetail error: ' + error );
        });
    }

    async TransferStop( stop, fromSymbol,toSymbol){
        console.log('transfer stop:' + stop + ' from ' + fromSymbol + " to " + toSymbol);
        var request = {
            stop : stop,
            from : fromSymbol,
            to: toSymbol
        };

        return fetch( this.config.TRANSFER_STOP_URL,{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(request)
        })
        .then(response => {
            return response.json() ;
        })
        .then(json => {
            console.log( 'transfer completed');
            console.log(json);
            return json ;
        })
        .catch(error => {
            console.error( 'transferStop error: ' + error);
        });
    }
}

export default RouteService ;