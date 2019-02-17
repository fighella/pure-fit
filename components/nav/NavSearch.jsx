import React, { Component } from 'react';
import styled from 'styled-components';
import { fonts, colors } from '../../styles/variables';
import { Row, Col } from 'reactstrap';
import {
  InstantSearch,
  connectAutoComplete,
  connectStateResults,
  Configure
} from 'react-instantsearch-dom';

class NavSearch extends Component {
  render() {
    return (
      <Row>
        <Col xs={2} />
        <Col xs={6}>
          <InstantSearch
            appId="OD4A0UL6WU"
            apiKey="ae645f045173601ad5cfdc2f39b3e7a9"
            indexName="Search"
            hitsPerPage={4}
            distinct
          >
            <CustomAutocomplete  />
          </InstantSearch>
        </Col>
      </Row>
    );
  }
}
const Autocomplete = ({ hits, currentRefinement, refine, searchState }) => (
  <SearchBar>
    <SearchInput
      type="search"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
      placeholder="Start typing..."
      autoFocus
    />
    {searchState && searchState.query ? (
      <SearchResults>
        {searchState && searchState.query && hits.length >= 1 ? (
          hits.map(hit => (
            <SearchResult key={hit.objectID}>
              <a href={`/${hit.slug}`}>&nbsp;</a>
              <img src={hit.thumb} alt="..." />
              <div>
                <strong>{hit.title}</strong>
                <br />
                <small>{hit.search_type}</small>
              </div>
            </SearchResult>
          ))
        ) : (
          <NoResult>Sorry, No results for your search. Try again.</NoResult>
        )}
      </SearchResults>
    ) : (
      ''
    )}
  </SearchBar>
);

const StateResults = connectStateResults(Autocomplete);
const CustomAutocomplete = connectAutoComplete(StateResults);

const SearchResults = styled.div`
  width: 100%
  z-index: 100;
  background: #fff;
  border: 1px solid #efefef;
  box-shadow: 2px 0 5px #efefef;
  border-top: none;
`;

const SearchResult = styled.div`
  background: #fff;
  transition: all 0.5s;
  &:hover {
    background: #efefef;
  }
  small {
    text-transform: uppercase;
    color: ${colors.pink};
  }
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  position: relative;
  strong {
    font-weight: bold;
    line-height: 1em;
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  img {
    height: 70px;
    width: 70px;
    margin-right: 8px;
  }
`;

const SearchInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 4px;
  font-size: 1.4em;
  display: block;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const SearchBar = styled.div`
  padding: 2em;
  position: relative;
  width: 800px;
  margin: 0 auto;
  display: block;
  min-height: 80vh;
`;

const NoResult = styled.p`
  padding: 2em 1em 1em;
  color: #aaa;
`;

export default NavSearch;
