// const env = 'local';
const env = 'prod';

export default class PureData {
  constructor(props, limit = 1) {
    this.limit = limit;
    this.props = props;
    this.src =
      env === 'local'
        ? 'http://localhost:5000/api/v1/'
        : 'https://purefitcdn.herokuapp.com/api/v1/';
  }

  get classes() {
    return {
      base: this.endpoint('weekly_timetables'),
      filters: [
        { location: this.props.location || 'all' },
        { day: this.props.day || 'Today' },
        { days: this.props.days || 1 },
        { class_style: this.props.class_style || 'all' },
        { teacher: this.props.teacher || 'all' },
        { blog: this.props.blog || false }
      ]
    };
  }

  get login() {
    return {
      base: this.postEndpoint('mindbody/login'),
      filters: []
    };
  }

  get teachers() {
    return {
      base: this.endpoint('teachers'),
      filters: [{ teacher: this.props.teacher }]
    };
  }

  get banners() {
    return {
      base: this.endpoint('banners'),
      filters: [{ type: this.props.type }]
    };
  }

  get videos() {
    return {
      base: this.endpoint('videos'),
      filters: [{ teacher: this.props.teacher }]
    };
  }

  get booked_classes() {
    return {
      base: this.props.user_id
        ? this.endpointWithClientId('mindbody/get_classes', this.props.user_id)
        : '',
      filters: [{ client_id: this.props.client_id }]
    };
  }

  get workshops() {
    return {
      base: this.endpoint('workshops'),
      filters: [{ teacher: this.props.teacher }, { id: this.props.id }]
    };
  }


  get workshop() {
    return {
      base: this.endpoint('workshops'),
      filters: [{ id: this.props.id },{ handle: this.props.handle }, { teacher: ''}]
    };
  }

  get pricing() {
    return {
      base: this.endpoint('pricing'),
      filters: []
    };
  }
  // get workshop() {
  //   return {
  //     base: this.endpoint('workshop'),
  //     filters: [{ workshop: this.props.workshop }]
  //   };
  // }

  get remove_favorite() {
    return {
      base: this.endpoint('mindbody/remove_favorite'),
      filters: []
    };
  }

  get add_favorite() {
    return {
      base: this.endpoint('mindbody/add_favorite'),
      filters: []
    };
  }

  get contents() {
    return {
      base: this.endpoint('contents'),
      filters: [
        { workshops_only: this.props.workshopsOnly },
        { blogs_only: this.props.blogsOnly },
        { teacher: this.props.teacher }
      ]
    };
  }

  get classStyle() {
    return {
      base: this.endpoint('class_styles'),
      filters: [{ class_style: this.props.class_style }]
    };
  }

  get classStyles() { 
    return {
      base: this.endpoint('class_styles'),
      filters: []
    };
  }

  get blogs() {
    return {
      base: this.endpoint('blogs'),
      filters: [{ teacher: this.props.teacher }]
    };
  }

  get blog() {
    return {
      base: this.endpoint('blogs'),
      filters: [{ blog: this.props.handle }]
    };
  }

  get workshopTeachers() {
    return {
      base: this.findEndpointRelations('workshops', this.props.id, 'teachers'),
      filters: []
    };
  }

  postEndpoint(endpoint) {
    return `${this.src + endpoint}.json?key=98123`;
  }

  endpoint(endpoint) {
    return `${this.src + endpoint}.json?key=98123`;
  }

  endpointWithClientId(endpoint, client_id) {
    return `${this.src + endpoint}?client_id=${client_id}&key=98123`;
  }

  findEndpoint(endpoint, id) {
    return `${this.src + endpoint}/${id}.json&key=98123`;
  }

  findEndpointRelations(endpoint, id, relations) {
    return `${this.src + endpoint}/${id}/${relations}.json?key=98123`;
  }
}
