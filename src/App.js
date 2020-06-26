import React from 'react';
import { Cards, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import image from './image/covid19.png';

class App extends React.Component {
    state =  {
            data : {},
            country: ' ',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data : fetchedData });
    }
    handleCountryChange = async (country) => {
      const data = await fetchData(country);
      this.setState({ data, country: country });
    }
  render() {
      const {  data } = this.state;
    return (
      <div className={styles.container}>
        <img  className={styles.image} src={image} alt="Covid-19"/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Cards data={ data }/>
      </div>
    );
  }
}

export default App;
