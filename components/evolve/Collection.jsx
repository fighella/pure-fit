import React, { Component } from 'react';
import Measure from 'react-measure';
import styled from 'styled-components';
import MiniWorkshop from '../MiniWorkshop';
import Link from 'next/link'
import { withRouter } from 'next/router';


const LinkWrapper = (props) => (
    <Link style={{ minWidth: '31%' }} key={props.ws.id} href={`/evolve/?id=${props.ws.id}&title=${props.ws.title.toLowerCase().replace(/ /g, '-')}`} as={`/evolve/${props.ws.id}/${props.ws.title.toLowerCase().replace(/ /g, '-')}`}>
    <a style={{ width: '100%' }}>
      {props.children}
    </a>
  </Link>
)

class EvolveCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedWorkshop: false,
      start: 0,
      finish: 40,
      wsTab: false,
      dimensions: {
        width: -1,
        height: -1
      }
    };
  }

  render() {
    const { loadedWorkshop, start, finish, dimensions } = this.state;
    const { limit, skip, workshops, not, title } = this.props;
    const wst = loadedWorkshop;
    let workshopsList =
      limit || skip ? workshops.slice(skip, limit + skip) : workshops;
    if (not) {
      workshopsList = workshopsList.filter(this.notThisOne);
    }
    
    const cols = workshopsList
      .slice(start, finish)
      .map((ws,index) => {
        const mw =<MiniWorkshop
        workshop={ws}
        noneActive={!loadedWorkshop}
        isActive={loadedWorkshop === ws}
        key={ws.id}
        inView={index <= 2}
        rowWidth={dimensions.width}
        onMouseEnter={() => this.fadeOthers()}
        onMouseLeave={() => this.unfadeOthers()}
      />
      return(
        <Col cols={this.props.cols}><LinkWrapper ws={ws} index={index} children={mw} /></Col>
      )}
   );

    return (
      <Measure
        bounds
        onResize={contentRect => {
          this.setState({ dimensions: contentRect.bounds });
        }}
      >
        {({ measureRef }) => (
          <div>
            <ContainerRow
              ref={measureRef}
            >
              {cols}
            </ContainerRow>
          </div>
        )}
      </Measure>
    );
  }
}


const ContainerRow = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Col = styled.div`
  position: relative;
  width: ${(props) => props.cols == 3 ? '33.3%' : '50%'};
  @media (max-width: 700px) {
    width: 100%;
  }
  border: 2px solid transparent;
  display: block;
  cursor: pointer;
  img {
    background: #fff;
  }
`

export default withRouter(EvolveCollection);
