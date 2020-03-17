import dotenv from 'dotenv';

import keys from './../config';

import React, { Component } from 'react';

import 'materialize-css';
import dateFormat from 'dateformat';

import Loading from '../components/Loading';
// import { useAuth0 } from '../react-auth0-spa';

const APP_ID = keys.REACT_APP_APP_ID;
const APP_KEY = keys.REACT_APP_APP_KEY;

export default class jobListing extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        query: ''
      };
    }

    componentDidMount() {

        fetch('https://api.adzuna.com/v1/api/jobs/ca/search/1?&content-type=application/json&app_id='+APP_ID+'&app_key='+APP_KEY+'&results_per_page=5')
        .then(res => res.json())
        .then(
            (result) => {
                // console.log(result);
              this.setState({
                isLoaded: true,
                items: result.results
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

    handleSubmitSearch = (e) => {
        e.preventDefault();

        const query=this.state.query;
        fetch('https://api.adzuna.com/v1/api/jobs/ca/search/1?&content-type=application/json&app_id='+APP_ID+'&app_key='+APP_KEY+'&results_per_page=5&what='+query)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
              this.setState({
                isLoaded: true,
                items: result.results
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )

    }

    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div><Loading /></div>;
      } else {
        return (

            <div className='row'>

                <div className='center col s12 m3'>
                    <h4>JOB LISTINGS</h4>
                    <div className='center input-field'>
                        <i className="large material-icons prefix">work</i>
                        <input id="searchBox" 
                        value={this.state.query} 
                        type="text" 
                        onChange={e => this.setState({query:e.target.value})} >
                        </input>
                        <label className="active">Search Job Title</label>
                    </div>
                    <input
                    type='submit'
                    value='SEARCH'
                    className='btn brown darken-4'
                    onClick= { e => this.handleSubmitSearch(e) }
                    />
                </div>

                <div className='center col s12 m8'>
                    <ul>
                    {items.map(item => (
                        <li key={ item.id }>

                            <div className="card brown lighten-3">

                                <div className="card-content">
                                    <h6 className="card-title activator">{ item.title }<i className="material-icons right">more_vert</i></h6>
                                    <p> <b>Company :</b> { item.company.display_name } </p>
                                    <span> <b>Location :</b> { item.location.display_name}</span>
                                    <p> <b>Date :</b> { dateFormat( item.created , "dddd, mmmm dS, yyyy") }</p>
                                </div>

                                <div className="card-action">
                                    <a href={ item.redirect_url} target='_blank'className="btn brown darken-4">Apply</a>
                                    <a className="btn brown darken-4"><i className="material-icons">save</i></a>
                                </div>

                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                                    <p>{ item.description }</p>
                                </div>

                            </div>
                        </li>
                    ))}     
                    </ul>    
                </div>
            </div>
    
        );
      }
    }
  }
