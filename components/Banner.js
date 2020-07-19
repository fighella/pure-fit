import React, { Component } from 'react';
import {
Carousel,
CarouselItem,
CarouselControl,
CarouselIndicators
} from 'reactstrap';
import { BannerTitle, BannerButton } from '../components/layout/helpers';
import { getContentfulEntries } from '../components/contentful/Content';

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
  this.grabSlidesContentful();
}
grabSlidesContentful = async () => {
  this.setState({ items: [] })
  console.log(getContentfulEntries('banner',this));
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
          <BannerButton href={item_img.link}>
            {item_img.callToAction}
          </BannerButton>
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