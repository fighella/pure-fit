/* eslint-disable import/prefer-default-export */
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const brand = 'Pure Yoga Ottawa';

const socialLinks = {
  facebook: {
    link: 'https://www.facebook.com/PureYogaOttawa',
    icon: faFacebook
  },
  twitter: { link: 'https://twitter.com/pureyogaottawa', icon: faTwitter },
  instagram: {
    link: 'https://www.instagram.com/pureyogaottawa/?hl=en',
    icon: faInstagram
  },
  vimeo: { link: '', icon: '' },
  youtube: { link: '', icon: faYoutube },
  email: { link: '/contact', icon: faEnvelope }
};

const login = {
  title: 'Login to Mindbody',
  subtitle: 'Login to your Mindbody account to manage your membership.',
  account_difficulties: 'Account difficulties',
  powered_by: 'Powered by MindBody',
  login: 'Login',
  logout: 'Logout'
};

export const AppContent = {
  brand,
  socialLinks,
  login,
  mindbody_link:
    'https://clients.mindbodyonline.com/classic/ws?studioid=21952',
  title: 'Ottawa Hot Yoga Studio',
  new_to_yoga: 'New to yoga? Find out more...',
  hot_yoga_schedule: 'Hot Yoga Schedule',
  book_a_class: 'BOOK A CLASS',
  one_pass: '1 pass. 3 studios. Find your class.',
  apps: 'Get the schedule on your phone.',
  footnote:
    'Please note: We encourage you to be in studio 10 minutes before class starts to secure your position.',
  nav: {
    new_to_yoga: {
      title: 'NEW TO PURE YOGA OTTAWA?',
      sub_title: 'Our intro month is just $45',
      content:
        'We welcome you to come and see how Pure Yoga can help you grow and transform. Our intro month is just $45 and lets you try as many classes as you like!'
    },
    workshops: {
      title: 'Workshops/Training/Retreats',
      content:
        'Evolve your practice through our wide range of Workshops, Training and Retreats.'
    }
  },
  subscribe: {
    text:
      'Sign up for inspiration, exclusive offers, contests and the inside scoop on events.',
    button: 'Sign Up'
  },
  // HOMEPAGE STUFF
  new_to_yoga_strap: 'New to Yoga?',
  new_to_yoga_strap_subtitle: 'Pure Yoga is a space for everybody.',
  new_to_yoga_strap_cta: 'Learn more',
  evolve_your_practice: 'Evolve your practice.',
  evolve_your_practice_subtitle: 'Share in our passion for yoga.',
  // PAGES CONTENT
  home: {
    page_title: `${brand} - Westboro, Centretown, Downtown | Hot Yoga Studio`,
    banners: [{}],
    about_pure: `<p>Whether you come to Pure Yoga Ottawa for a workout or stress relief, ultimately, yoga is about growth and transformation.</p>
    <p> At Pure Yoga we are completely dedicated to the evolution of our students. With our amazing team of highly trained teachers, you are always in the best hands.</p>`,
    tagline: 'Come join the community, where we can all grow together.'
  },
  class_styles: {
    title: 'Class Styles'
  },
  class_style: {},
  new: {
    title: 'New to Yoga. New to Pure.',
    page_title: 'New to Yoga? New to Pure?',
    cta: 'Sign Up',
    top_banner: {
      title: 'New Beginnings',
      sub_title: 'New to Yoga? New to Pure?',
      imgs: [
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_121.jpg'
      ]
    },
    what_is: {
      title: 'What is Hot Yoga?',
      contents: [
        'We love hot yoga! Our hot yoga classes build strength and flexibility and are for everyone, whether you’re a complete beginner or a lifelong committed yogi.',
        'Our yoga studios are heated to around 30 degrees. Hot yoga not only helps you to detox by flushing toxins out of the skin through sweat, but heats up the muscles allowing you to approach the postures from a safe place. Practicing in a hot room elevates the heart rate, which makes the body work harder. This will give you a little more of an intense workout-for those who want to develop strength, flexibility and tone along with the cardiovascular workout.'
      ],
      imgs: [
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_123.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_124.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_126.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_19.jpg'
      ]
    },
    offer: {
      title: 'Some offer',
      imgs: [
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_19.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_131.jpg'
      ]
    },
    where: {
      title: 'Westboro. Centretown. Downtown.',
      sub_title: '3 Studios. 1 Pass.',
      imgs: [
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_131.jpg'
      ]
    },
    intro: {
      title: 'Introductory Offer',
      promo: 'Pure Yoga Intro Month Special',
      price: '45',
      deal:
        '1 month of unlimited yoga (that’s right: any class, any time) for one whole month. You can start your month whenever you like, and you will get 30 days (from that day) to do try as many classes you want.',
      link:
        'http://clients.mindbodyonline.com/ws.asp?studioid=21952&stype=41&prodid=60',
      contents: [
        'We welcome you to come and see how Pure Yoga can help you grow and transform.',
        'Whether you come to Pure Yoga Ottawa for a workout or stress relief, we are completely dedicated to the evolution of our students. With our amazing team of highly trained teachers, you are always in the best hands.',
        '<a href="/faqs">Frequently Asked Questions</a>'
      ]
    },
    benefits: {
      title: 'The Benefits',
      contents: [
        'Detoxify - embrace the sweat! Sweating is nature’s detoxification. It stimulates the lymphatic system, which allows everyday toxins to be shed from the skin helping to cleanse and purify the body. Every time you practice hot yoga you’re helping cleanse your body from the inside out, and you’ll feel amazing for it. ',
        'Get Flexible - practicing yoga in the heat extends the benefits of regular yoga by helping the muscles relax further and allowing for increased flexibility and strength.',
        'Elevate your heart rate - You know how good it feels to get the heart pumping! Doing yoga in a heated setting elevates the heart rate making the body work harder. You get more of the benefits of a cardio workout than you would doing yoga in a cooler setting.',
        'Relax and clear your mind - When you practice yoga in a heated room, the heat helps you to switch off and focus on the practice as you move through the asanas. Hot yoga becomes a type of moving meditation, allowing you to detach from the stresses and strains of daily life.'
      ]
    },
    sweat: {
      title: 'Sweat with us',
      sub_title: 'A space for everybody.',
      contents: ['One', 'Two'],
      imgs: [
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_15.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_47.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_125.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_128.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_46.jpg'
      ]
    },
    more_info: {
      imgs: [
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_121.jpg'
      ]
    }
  },
  evolve: {
    title: 'Evolve',
    page_title: `Evolve Your Practice | Workshops, Training, Retreats | ${brand}`,
    subtitle: 'Workshops, Training, Retreats',
    bottom_section: {
      title: 'Evolve Your Practice',
      text: 'An elevated and energised you'
    },
    show: {
      you_might_also_like: 'You might also like'
    }
  },
  locations: {
    page_title: ''
  },
  schedule: {
    title: 'Practice',
    page_title: `Schedule & Class Times | 3 Locations. 1 Pass | ${brand}`,
    subtitle: '3 Studios. 1 Pass.',
    bottom_section: {
      title: 'Title',
      text: 'Hello there.'
    }
  },
  team: {
    title: 'Pure Yogis',
    page_title: `Meet your team | Pure Yogis | ${brand}`,
    contents: {
      title: 'We love what we do.',
      subtitle: 'And we want to share our passion with you.',
      paragraphs: [
        'At Pure Yoga Ottawa we are completely dedicated to the evolution of our students. With our amazing team of highly trained teachers, you are always in the best hands. Our experienced teachers are among the best and most passionate in Canada and beyond, and their energy and enthusiasm for yoga is infectious!',
        'Yoga is a journey. Each of our teachers has their own unique and creative style, a product of who taught them, where they have travelled and practiced yoga, and the inspiration that has resonated with them along the way. And so this is passed on to you, and the journey continues…'
      ]
    },
    team_heading: 'YOUR TEAM',
    video_heading: 'The People of Pure',
    subtitle: 'Good Vibes'
  },
  members: {
    path: '/pricing',
    title: 'Community',
    page_title: `Join Our Community | Yoga for Everybody | ${brand}`,
    subtitle: 'Yoga, For Everyone',
    memberships: 'Membership Packages',
    memberships_subtitle: 'One Pass. 3 Studios',
    class_packages: 'Class Packages',
    class_packages_subtitle: 'Afraid of commitment?',
    call_to_action: 'Book Now',
    students_seniors: 'STUDENT/SENIOR DISCOUNTS',
    discounts:
      'Full time students and seniors receive $15 off of any class package.  Check in studio for student auto renew membership prices. Valid Student ID must be provided.',
      age: 'Age 14 and older. 17 and under require parent/guardian signature.',
      gift_cards: 'Pure Yoga Gift Cards make the perfect gift. Our Gift Cards can be used on classes, workshops and in-studio merch like yoga gear and clothing. They can be purchased online @ Mindbody or in studio.'
  },
  stream: {
    title: 'Anywhere',
    page_title: `Pure Yoga Online | Workshops, Training, Retreats | ${brand}`,
    subtitle: ''
  },
  journal: {
    path: '/journals',
    title: 'Extend',
    page_title: `Blog | Yoga, Home, Health, You | ${brand}`,
    subtitle: 'A Guide to Better Living',
    blog_title: 'Journal',
    intro: 'Why this and that something journal...'
  },
  contact: {
    title: 'Connect',
    page_title: `Contact Us | ${brand}`,
    subtitle: 'Contact Us',
    helptitle: 'Helpful Links',
    locations: 'Our Locations',
    send: 'Send Message'
  },
  faqs: {
    title: 'Faqs',
    page_title: `Faqs | Ask Us Anything | ${brand}`,
    subtitle: "We've got answers.",
    text: 'Got a question not answered here? Ask us.',
    questions: [
      {
        question: 'Are all your classes ‘hot’? ',
        answer:
          'All our classes are taught in studios heated to approximately 30 degrees. Although it’s called ‘hot yoga’ it’s a comfortable heat, which your body will enjoy and adapt to quickly. Our studios are heated using clean infrared heating panels that allow your body to heat up, instead of just heating the air around you. '
      },
      {
        question: 'Which class is best for a beginner?',
        answer:
          'All of our classes are accessible for all levels. Please let your teacher know you’re a beginner and they will be sure to assist you wherever you need extra guidance. '
      },
      {
        question: 'What do I need to bring with me?',
        answer:
          'A yoga mat (available to rent), A couple of towels (available to rent). A water bottle<li>Comfortable clothing to wear to class. A change of clothes (you will get sweaty!)'
      },
      {
        question: 'How much does it cost to come to Pure Yoga? ',
        answer:
          'If you’re new to Pure Yoga, we have an amazing “Intro Month” special where you can come to unlimited classes for just $45 for one month. We also have single class drop in fees, class packages and memberships available, as well as students and seniors discounts - please visit our pricing page for more information. '
      },
      {
        question: 'Do I need to buy a membership for each of your studios? ',
        answer:
          'No, once you purchase a Pure Yoga membership you can choose to come to any of our studios '
      },
      {
        question: 'Do you hire mats, and how much does it cost? ',
        answer:
          'Yes, we have mats available for hire at all of our studios. The cost is $2.00 per visit. '
      },
      {
        question: 'Do I need to book? ',
        answer:
          'Our website has an online booking functionality through Mindbody, so you can easily book in for your preferred class. We do recommend booking. Reserved spots will be held until 10 minutes before class starts. '
      },
      {
        question: 'How do I know what class will suit me?',
        answer:
          'We teach a wide range of styles from slower, posture deepening ‘yin’ classes,to more active style strength building ‘power’ classes, as well as flow and beats classes. Visit the class styles page to find out more '
      },
      {
        question: 'Do you sell yoga clothing and accessories?',
        answer:
          'Yes we stock some really great yoga brands including our own branded merchandise, as well as Spiritual Gangster, Brunette the Label, Vuori, Lululemon and more. We also have a range of yoga accessories available in each studio. '
      },
      {
        question: 'Can I take a break during the class?',
        answer:
          'Yes, we encourage you listen to your own body. We ask that you remain in the studio during class, but as we teach to all levels, you’re welcome to take a break and rest on your mat whenever you need to. '
      },
      {
        question: 'Can I drink water during class?',
        answer:
          'Yes, We have filtered water available in each studio for you to fill your drink bottle.'
      },
      {
        question: 'How long are your classes?',
        answer:
          'Our Westboro and Centretown classes are usually 1 hour long, with the occasional 75 minute class. Downtown classes are usually 50 minute long. Please check the schedule for timing.'
      },
      {
        question: 'What should I wear to class?',
        answer:
          'Wear comfortable clothing that is not too loose. Most of our yogis wear fitted yoga tights and a tank top, and don’t forget to bring a towel so you can wipe away the sweat!'
      },
      {
        question: 'Are there showers at each studio?',
        answer:
          'Yes we have beautiful change room and shower facilities at each studio. Body wash is provided in each shower. Our change rooms also have lockers (bring a padlock if you wish to lock) '
      },
      {
        question: 'Can I eat or drink before yoga class?',
        answer:
          'Yes, although we recommend not practicing yoga on a full stomach as it can be uncomfortable.'
      },
      {
        question: 'Can I practice hot yoga while pregnant or breastfeeding?',
        answer:
          'Yes, we allow pregnant and breastfeeding women to practice yoga at our studios. Many women enjoy practicing yoga throughout their pregnancy, and if you feel comfortable to do so, and have the go-ahead from your doctor or midwife, you’re welcome to practice with us. Please always inform your teacher if you are pregnant.'
      },
      {
        question: 'What can I expect from Pure Yoga?',
        answer:
          'We’re a fun, friendly and inclusive place. When you come to practice with us, we’ll encourage you along your yoga path, and provide a happy place that you’ll use to support your healthy and positive lifestyle. What you’ll find at Pure Yoga is a welcoming environment where classes are tailored to all levels, led by some of Canada’s most experienced and passionate teachers.'
      },
      {
        question: 'How old do I need to be to do yoga at Pure Yoga?',
        answer:
          'You must be over 14 years or older. Between 14 to 17 you will need a parent/guardian to sign off.',
      },
    ]
  },
  about: {
    title: 'About Pure Yoga.',
    page_title: 'About Pure Yoga',
    what_is: {
      title: 'About Pure Yoga.',
      contents: [
        'Pure Yoga was founded by lifelong best friends Amber Stratton and Jen Dalgleish. Their vision was to bring their community not just a great yoga studio, but a lifestyle. A place where every student feels at home, a place to grow the love for the practice as well as give students the tools for healthy living both on and off the mat.',
        'Pure is not just studio about yoga, it is about lifestyle and community. With the opening of their first studio in Westboro in 2012, this dream became a reality, and Ottawa finally had a world-class yoga studio. Pure Yoga quickly expanded to open the Centretown and Downtown locations and in 2015 Pure Kitchen Vegetarian Food and Juice Bar was born, followed quickly by 3 more locations in the city. This was the perfect compliment as to what it means to live the Pure way.'
      ],
      imgs: [
        'https://s3.amazonaws.com/pureyogaottawa.com/website/about/2.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/about/4.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/about/12.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/about/1.jpg'
      ]
    },

    where: {
      title: 'Westboro. Centretown. Downtown.',
      sub_title: '3 Studios. 1 Pass.',
      imgs: [
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_131.jpg'
      ]
    },
    benefits: {
      title: "Ottawa's Yogi Community",
      contents: [
        'Today Pure Yoga remains a favourite destination for Ottawa’s yogi community. A huge range of class styles are taught at all locations, led by experienced and passionate teachers from Ottawa and beyond, including founders Jen and Amber. As well as scheduled yoga classes, Pure Yoga also offers an exciting range of workshop events for yogis to evolve their practice, as well as teacher training programs, both here in Ottawa and abroad. Pure Yoga leads a series of yoga retreats throughout the year, with destinations including Costa Rica and Australia. Pure Yoga is also available online for you to practice with your favourite teachers at home, on your travels, or when you can’t make it into the studio.'
      ]
    },
    sweat: {
      contents: [
        'At Pure we feel yoga should be an uplifting, fun part of your life. We want to help you to develop your passion, and live and love the ‘Pure’ lifestyle. Whether you’re a local, a visitor, student, teenager or a grandparent, we want Pure Yoga to become YOUR happy place. Come and join our community, we look forward to welcoming you.'
      ],
      imgs: [
        'https://s3.amazonaws.com/pureyogaottawa.com/website/about/8.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/about/6.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/about/10.jpg',
        'https://s3.amazonaws.com/pureyogaottawa.com/website/about/5.jpg'
      ]
    },
    more_info: {
      imgs: [
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_121.jpg'
      ]
    }
  },
  terms: {
    title: 'Terms of Use',
    contents: ['One']
  },
  privacy: {
    title: 'Privacy Policy',
    contents: ['One']
  }
};
