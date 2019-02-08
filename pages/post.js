import {withRouter} from 'next/router'
import Layout from '../components/Layout'
import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
import { AppHelpers } from '../utils/tools'

const noFetchError = () => new Throw('Nope!');

const Post = withRouter((props) => (
    <Layout>
       <h1>{props.router.query.title} {props.router.query.id}</h1>
       <p>This is the blog post content.</p>
       <ul>
      {props.classes.map((show,index) => (
        <li key={index}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.class_details.id}</a>
          </Link>
        </li>
      ))}
    </ul>
    </Layout>
))

Post.getInitialProps = async function() {
  try {
    const response = await fetch(AppHelpers.mbParams({}, 'classes'));
    let json = await response.json();
    return {
      classes: json.classes,
      loaded_classes: true
    }
  } catch { 
    noFetchError();
  }  
}

export default Post