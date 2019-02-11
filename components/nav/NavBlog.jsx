import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { navHeading } from '../../utils/nav';
import MiniBlog from '../../components/MiniBlog';

export class NavBlog extends Component {
  render() {
    console.log('na blo', this.props.data);
    var blog_data, featured_blog, blogs, feature;
    blog_data = this.props.data;
    featured_blog = this.props.data.length ? blog_data[0] : false;
    blogs = blog_data.slice(1, 4).map((blog, index) => {
      return (
        <Col key={blog.slug}>
          <MiniBlog
            name={blog.title}
            category={blog.category}
            teaser_image={blog.teaser_image}
            slug={blog.slug}
          />
        </Col>
      );
    });
    feature = featured_blog ? (
      <MiniBlog
        name={featured_blog.title}
        category={featured_blog.category}
        size="full"
        desc={featured_blog.teaser}
        teaser_image={featured_blog.teaser_image}
        slug={featured_blog.slug}
      />
    ) : (
      false
    );
    return (
      <Row>
        <Col xs={6}>{feature}</Col>
        <Col xs={6}>
          {navHeading('Latest Posts')}
          <Row>{blogs}</Row>
          {navHeading('View All', '/journals')}
        </Col>
      </Row>
    );
  }
}
