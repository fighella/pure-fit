import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { InstantSearch, connectAutoComplete } from 'react-instantsearch-dom';

export class NavSearch extends Component {
  render() {
    return (
      <Row>
        <Col xs={3} />
        <Col xs={6}>
          <InstantSearch
            appId="OD4A0UL6WU"
            apiKey="ae645f045173601ad5cfdc2f39b3e7a9"
            indexName="Search"
            hitsPerPage={4}
            distinct
          >
            <CustomAutocomplete defaultRefinement={'yoga'} />
          </InstantSearch>
        </Col>
      </Row>
    );
  }
}

const Autocomplete = ({ hits, currentRefinement, refine }) => (
  <ul>
    <li>
      <input
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
    </li>
    {hits.map(hit => (
      <li key={hit.objectID}>{hit.name}</li>
    ))}
  </ul>
);

const CustomAutocomplete = connectAutoComplete(Autocomplete);
