import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    //with async await
 onSearchSubmit = async (term) => {
       const response = await unsplash.get('/search/photos',{
            params: { query: term },
          
        }); 
        this.setState({ images: response.data.results });
    }

//with Promise
  /*   onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos',{
            params: { query: term },
            headers: {
                Authorization: 'Client-ID OQ3uskA5SZasnF9cry5RHiwwajEBEO9dmSeyd5CfWPk'
            }
        }).then( (response) => {
            console.log(response.data.results);
        })
    } */

    constructor(props) {
        super(props)
        this.state = {images: []};

 
    }      
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
};


export default App;