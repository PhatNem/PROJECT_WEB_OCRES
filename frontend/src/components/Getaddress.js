import React from 'react';
import './Getaddress.css';


class Getaddress extends React.Component {
    // simple react component example: rendering third-party data
    // FIXME : add a isError boolean or a status_code==200 check


    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: {}
        };
    }



    getData() {
        // GET request using fetch
        // FIX ME add a search tool
        var url = 'https://api-adresse.data.gouv.fr/search/?q='+ '37 quai de grenelle' 
        
        fetch(url, {"method": "GET","headers":{ "accept": "application/json"}})
        .then(response => response.json())
        .then(data => {
        
        this.setState({
          isLoaded: true,
          data: data

           });
      });
    }


    componentDidMount() {
        this.getData();
   }


    render() {
      const { isLoaded, data } = this.state;
      //console.log("isloaded: " + isLoaded)
      //console.log(data)
      
 
      if (!isLoaded)
        return (<div className="loading">fetching data ...</div>);

      return (
            <>
            <div className="getaddress"> 

            <h3>Recherche d'adresses</h3>
            <input id="searchBar" type="text" placeholder="type an address ..."></input>

            <h4>searched: { data.query }</h4>
                { 
                    data.features.map((feature, ix) => (
                        <div id = {ix} className="box">
                            <p> <h3>Resultat {ix+1} : </h3> { feature.properties.label } 
                                <ul id="lon">longitude {feature.geometry.coordinates[0]}</ul>
                                <ul id="lat">latitude {feature.geometry.coordinates[1]}</ul>
                            </p>
                        </div>
                    ))
                }
              </div>
              </>
            )
        }

    }   

export default Getaddress ;



