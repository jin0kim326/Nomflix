import { moviesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };

  handleSubmit = () => {
      const {searchTerm} = this.state;
      if(searchTerm !== ""){
        this.searchByTerm();
      }
  };

  searchByTerm = async() => {
    const { searchTerm } = this.state;
    this.setState({ loading: true});
    try{
        const {data : {results: movieResults}} = await moviesApi.search(searchTerm);
        const {data : {results: tvResults}} = await tvApi.search(searchTerm);
        
        this.setState({ 
            movieResults,
            tvResults
        });
    }catch{
        this.setState({ errer: "cant find results"});
    }finally{
        this.setState({ loading: false});
    }
  }


  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

/*
handleSubmit => searchTerm이 공백이 아닌것을 체크 후 search 함수실행
*/