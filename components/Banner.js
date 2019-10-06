import React, { Component } from 'react';
// import Measure from 'react-measure';
import {
Carousel,
CarouselItem,
CarouselControl,
CarouselIndicators
} from 'reactstrap';
import PureData from '../utils/src';
// import FitContentful from './FitContentful';
import styled from 'styled-components';

const contentful = require("contentful");

const FIT_SPACE_ID = "qt03r4b2rdnc";
const FIT_ACCESS_TOKEN =
  "wUysDGvbczx4bTZ3zvzq1ELlBvql7W09jMc4_qZeggo";
const fit_client = contentful.createClient({
  space: FIT_SPACE_ID,
  accessToken: FIT_ACCESS_TOKEN
});

export class Banner extends Component {
constructor(props) {
  super(props);
  this.state = {
    activeIndex: 0,
    loaded_contents: false,
    items: [{ sys: { id: 0 },fields: { src: '', title: 'Loading...', image: { fields: { file: { url: '' } } } } }]
  };
  this.next = this.next.bind(this);
  this.previous = this.previous.bind(this);
  this.goToIndex = this.goToIndex.bind(this);
  this.onExiting = this.onExiting.bind(this);
  this.onExited = this.onExited.bind(this);
}
componentDidMount() {
  // this.grabSlides();
  this.grabSlidesContentful();

}
grabSlidesContentful = async () => {
  console.log('Grabbin')
  try {
    const response = await fit_client.getEntries({ content_type: 'banner'   })
    let json = await response;
    this.setState({
      items: json.items.reverse()
    })
    console.log(this.state.items)
  } catch { 
    console.log('noFetchErrors()')
  } 


};

onExiting() {
  this.animating = true;
}

onExited() {
  this.animating = false;
}

next() {
  if (this.animating) return;
  const nextIndex =
    this.state.activeIndex === this.state.items.length - 1
      ? 0
      : this.state.activeIndex + 1;
  this.setState({ activeIndex: nextIndex });
}
previous() {
  if (this.animating) return;
  const nextIndex =
    this.state.activeIndex === 0
      ? this.state.items.length - 1
      : this.state.activeIndex - 1;
  this.setState({ activeIndex: nextIndex });
}

goToIndex(newIndex) {
  if (this.animating) return;
  this.setState({ activeIndex: newIndex });
}
render() {
  const { activeIndex } = this.state;
  const items = this.state.items;

  const slides = items.map(item => {
    console.log('fields',item)
    var item_img = item.fields
    var img_file = item.fields.image.fields.file
    return (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.sys.id}
      >
        <div
          className="sliderBg"
          style={{
            backgroundImage: 'url(' + img_file.url + ')',
            backgroundSize: 'cover'
          }}
        >
          <div className="sliderOverlay" />
        </div>
        <div className="sliderActions carousel-caption">
          <BannerTitle>{item_img.title}</BannerTitle>
          <h4>{item_img.subTitle}</h4>
          <a className="btn" href={item_img.link}>
            {item_img.callToAction}
          </a>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={this.next}
      previous={this.previous}
      slide={false}
      interval="20000"
      className="carousel-fade"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={this.goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={this.previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={this.next}
      />
    </Carousel>
  );
}
}




const BannerTitle = styled.h3`
  @media (max-width: 376px) {
    font-size: 60px !important;
    letter-spacing: 2px !important;
  }

`