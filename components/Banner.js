import React, { Component } from 'react';
// import Measure from 'react-measure';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import PureData from '../utils/src';

export class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      loaded_contents: false,
      items: [{ src: '', title: 'Loading...' }]
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  componentDidMount() {
    this.grabSlides();
  }
  grabSlides = () => {
    var src = new PureData({ type: 'homepage' }, false).banners,
      params = [];
    src.filters.map((filter, index) =>
      params.push(
        Object.values(src.filters[index])[0]
          ? `&by_${Object.keys(src.filters[index])[0]}=${
              Object.values(src.filters[index])[0]
            }`
          : ''
      )
    );
    var url = params.reduce((acc, cv) => {
      return acc + cv;
    }, src.base);
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ items: data.contents, loaded_contents: true })
      )
      .catch(err => console.log('Did not fetch your things.'));
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
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div
            className="sliderBg"
            style={{
              backgroundImage: 'url(' + item.src + ')',
              backgroundSize: 'cover'
            }}
          >
            <div className="sliderOverlay" />
          </div>
          <div className="sliderActions carousel-caption">
            <h3>{item.caption}</h3>
            <h4>{item.sub}</h4>
            <a className="btn" href={item.button_action}>
              {item.button_text}
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
