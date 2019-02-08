const rowWidth = '100%';
const futura = '"Futura PT Medium", sans-serif';
// const futura_light = '"Futura PT Light", sans-serif';
// const lusty = 'lust-script, sans-serif';
const cortado = '"cortado", sans-serif';
const heroFont = cortado;

const whiteness = '245,245,245';
const white = '255,255,255';
const teaserLeftCol = '60%';
const teaserRightCol = '40%';

// eslint-disable-next-line import/prefer-default-export
export const style = {
  body: {
    background: `rgba(${whiteness},1)`
  },
  close: {
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    top: '2.5%',
    right: '2%',
    textShadow: '0 0 12px #999',
    zIndex: 100,
    fontSize: 20
  },
  row: {
    minWidth: '100%',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    container: {
      marginBottom: '2em'
    },
    header: {
      paddingLeft: '2.5%',
      fontSize: '1.1em',
      fontWeight: 600,
      letterSpacing: 0.5,
      fontFamily: futura,
      marginBottom: 0
    },
    spacer: {
      minWidth: '2.5%'
    },
    col: {
      position: 'relative',
      minWidth: '31%',
      border: '3px solid transparent',
      display: 'block',
      cursor: 'pointer',
      img: {
        background: '#fff'
      }
    },
    openArrow: {
      color: '#fff',
      textAlign: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    }
  },

  page: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '120px',
    background: `linear-gradient(rgba(${whiteness}, 0),rgba(${whiteness}, 0.15),rgba(${whiteness}, 0.5),rgba(${whiteness}, 0.5),rgba(${whiteness}, 1))`,
    heading: {
      textAlign: 'center',
      fontFamily: heroFont,
      fontSize: '5em',
      color: '#fff',
      textShadow: '0 0 2px #000',
      marginBottom: 100
    },
    flex: {
      display: 'flex',
      justifyItems: 'space-between'
    }
  },
  teaser: {
    width: '100%',
    fontSize: '1em',
    background: '#fff',
    margin: 0,
    position: 'relative',
    height: '100%',
    transition: 'height 1s',
    type: {
      fontSize: '0.8em',
      fontWeight: 100,
      color: '#333',
      textTransform: 'uppercase'
    },
    type_brand: {
      fontWeight: 'bold',
      color: '#111'
    },
    heading: {
      fontSize: '1.8em',
      lineHeight: '1.1em',
      margin: 0,
      fontWeight: 400,
      fontFamily: futura,
      textTransform: 'uppercase'
    },
    details: {
      fontFamily: futura,
      fontSize: '1em',
      fontWeight: 'bold',
      lineHeight: '1.2em',
      display: 'block',
      color: '#666',
      marginTop: 6,
      detail: {
        wrap: 'no-wrap'
      }
    },
    description: {
      fontSize: '0.9em',
      color: '#333',
      maxWidth: '90%'
    },
    content: {
      position: 'relative',
      width: rowWidth,
      margin: '0 0 0 0.25%',
      zIndex: 10,
      padding: '1em 2.5%',
      paddingRight: teaserLeftCol,
      display: 'block'
    },
    more_info: {
      textTransform: 'uppercase',
      fontFamily: futura,
      border: '2px solid #ccc',
      fontSize: 12,
      display: 'inline-block',
      padding: '4px 8px',
      color: '#333',
      marginBottom: '1em'
    },
    book_now: {
      textTransform: 'uppercase',
      fontFamily: futura,
      border: '2px solid pink',
      fontSize: 12,
      display: 'inline-block',
      padding: '4px 8px',
      color: '#333',
      marginBottom: '1em'
    },
    add_to_favorites: {
      textTransform: 'uppercase',
      fontFamily: futura,
      border: '2px solid #fff',
      fontSize: 12,
      display: 'inline-block',
      padding: '4px 8px',
      color: '#333',
      marginBottom: '1em'
    },
    left_grad: {
      backgroundImage:
        'linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,1))',
      position: 'absolute',
      left: 0,
      width: '15%',
      top: 0,
      bottom: 0,
      zIndex: 8
    },
    bottom_fade: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 42,
      background: `linear-gradient(rgba(${white}, 0),rgba(${white}, 0.35),rgba(${white}, 1))`,
      zIndex: 4
    },
    bottom_fade_page: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 52,
      background: `linear-gradient(rgba(${whiteness}, 0),rgba(${whiteness}, 0.35),rgba(${whiteness}, 1))`,
      zIndex: 4
    },
    bottom_tabs: {
      tab: {
        cursor: 'pointer',
        textTransform: 'uppercase',
        fontWeight: 750,
        margin: '0 12px',
        borderBottom: '4px solid rgba(255,255,255,0.8)',
        active: {
          borderBottom: '4px solid pink'
        }
      }
    },
    bg: {
      position: 'absolute',
      height: '100%',
      top: 0,
      right: 0,
      bottom: 0,
      width: teaserRightCol,
      zIndex: 1,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  }
};
