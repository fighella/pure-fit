import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser as Account,
  faSearch as Search
} from '@fortawesome/free-solid-svg-icons';
import NavMembers from '../components/nav/NavMembers';
import NavSchedule from '../components/nav/NavSchedule';
import { NavLogin } from '../components/nav/NavLogin';
import { NavEvolve } from '../components/nav/NavEvolve';
import NavSearch from '../components/nav/NavSearch';
import { NavStream } from '../components/nav/NavStream';
import NavPricing from '../components/nav/NavPricing';
import { NavBlog } from '../components/nav/NavBlog';
import { BlogData } from './blog';

import PureData from '../utils/src';

const Blog = new BlogData(NavBlog, PureData);

const AppNav = {
  main: [
    {
      name: 'Home',
      link: '/',
      has_mega: false,
      desktop: false
    },
    {
      name: 'Schedule',
      link: '/schedule',
      has_mega: true,
      mega: <NavSchedule />
    },
    {
      name: 'Workshops',
      link: '/evolve',
      has_mega: true,
      mega: <NavEvolve />,
      sub_nav: '(Workshops and Training)'
    },
    {
      name: 'Pricing',
      link: '/pricing',
      has_mega: true,
      mega: <NavMembers />
    },
    {
      name: 'Team',
      link: '/team',
      has_mega: false
    },
    {
      name: 'Journal',
      link: '/journals',
      has_mega: true,
      mega: <Blog />
    },
    {
      name: 'Pure Online',
      link: '/online',
      has_mega: true,
      mega: <NavStream />
    },
    {
      name: 'Contact',
      link: '/contact',
      has_mega: false
    },
    {
      name: 'Search',
      icon: (
        <FontAwesomeIcon
          icon={Search}
          style={{ margin: '1px 6px 0', fontWeight: 400 }}
        />
      ),
      link: '/search',
      has_mega: true,
      mega: <NavSearch />
    },
    {
      name: 'User',
      icon: (
        <FontAwesomeIcon
          icon={Account}
          style={{ margin: '1px 6px 0', fontWeight: 400 }}
        />
      ),
      link: '/login',
      has_mega: true,
      mega: <NavLogin />
    }
  ],
  locations: [
    {
      name: 'Pure Yoga Westboro',
      link: 'westboro'
    },
    {
      name: 'Pure Yoga Centretown',
      link: 'centretown'
    },
    {
      name: 'Pure Yoga Downtown',
      link: 'downtown'
    },
    {
      name: 'Pure Fit Ottawa',
      link: 'fit'
    },

  ],
  evolutions: [
    {
      name: 'Workshops, Training & Retreats'
    }
    // {
    //   name: 'Training'
    // },
    // {
    //   name: 'Retreats'
    // }
  ],
  classes: [
    {
      name: 'Intro Month',
      mega: (
        <NavPricing
          name="Intro Month"
          price="$45"
          description="Any Class. Any Studio. Any Time."
          sub_title="Perfect for New to Yoga or New to Pure. Come join us."
        />
      )
    },
    {
      name: 'Monthly Unlimited',
      mega: (
        <NavPricing
          name="Monthly Unlimited"
          price="$150"
          sub_title="One Month Unlimited. Start whenever you like."
          description="Any Class. Any Studio. Any Time."
          terms=""
        />
      )
    },
    {
      name: 'Pure Membership',
      mega: (
        <NavPricing
          name="Pure Membership"
          price="$110/mo"
          description="Any Class. Any Studio. Any Time."
          sub_title="Save over 30% for unlimited Yoga."
          terms="(Automatic auto-renew Payment)."
        />
      )
    },
    {
      name: 'Class Packs : 5 | 10',
      mega: (
        <NavPricing
          name="Class Packs"
          price="5 Classes: $85. 10 Classes: $157"
          sub_title="5 or 10 Class Packs Available."
          description="Any Class. Any Studio. Any Time."
        />
      )
    },
    {
      name: 'Drop In',
      mega: (
        <NavPricing
          name="Drop In"
          price="$20"
          sub_title="Book In Advance or Just Turn Up."
          description="Any Class. Any Studio. Any Time."
        />
      )
    }
  ],
  footer: [
    { name: 'About Pure Fit', link: '/about' },
    { name: 'Faqs', link: '/faqs' },
    { name: 'Karma', link: '/karma' },
    {
      name: 'Mindbody Login',
      link:
        'https://clients.mindbodyonline.com/classic/ws?studioid=21952'
    },
    { name: 'Westboro', link: '/location/westboro' },
    { name: 'Centretown', link: '/location/centretown' },
    { name: 'Downtown', link: '/location/downtown' },
    { name: 'Toronto', link: 'https://www.pureyogatoronto.com' },
    { name: 'Contact', link: 'https://www.pureyogaottawa.com/contact' }
  ]
};

export default AppNav;
