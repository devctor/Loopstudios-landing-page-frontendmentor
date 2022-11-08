import { styled } from '../../stitches.config'
import Logo from '../components/Logo'
import useFetch from '../hooks/useFetch'
import dbData from '../../db.json'

const iconImages = [
  './images/icon-facebook.svg',
  './images/icon-twitter.svg',
  './images/icon-pinterest.svg',
  './images/icon-instagram.svg'
]
Logo.toString = () => '.logo'

const FooterContainer = styled('footer', {
  backgroundColor: '$black',
  display: 'grid',
  '.footer-logo': {
    display: 'flex',
    justifyContent: 'center',
    marginInline: 'auto',
    marginBlock: 'calc($2 * 2)'
  },
  '.footer-nav ul': {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc($2 * 2)',
    textAlign: 'center',
    height: 'contain',
    padding: '0',
    'li': {
      textTransform: 'capitalize',
      fontSize: '30px',
      'a': {
        color: '$white'
      }
    }
  },
  '.social-icons': {
    display: 'flex',
    justifyContent: 'center',
    gap: '$2',
    marginBlockStart: 'calc($2 * 2)',
    marginBlockEnd: '$2',
    'ul': {
      display: 'flex',
      padding: '0',
      gap: '$2',
      'li': {
        listStyle: 'none',
        position: 'relative'
      }
    },
    'img': {
      flex: '0 0 10%',
      maxWidth: '45px'
    }
  },
  '.foot-note': {
    textAlign: 'center',
    fontSize: '1.2em',
    color: '$darkGray',
    marginBlockEnd: 'calc($2 * 2)'
  },
  '@bp1': {
    gridTemplateRows: 'repeat(2, 60px)',
    gridTemplateColumns: 'repeat(2, 2fr)',
    placeContent: 'center',
    '.footer-logo': {
      gridArea: '1 / 1 / 2 / 2',
      display: 'block',
      width: '100%',
      marginBlock: '$2'
    },
    '.footer-nav': {
      gridArea: '2 / 1 / 2 / 2',
      'ul': {
        flexDirection: 'row'
      },
      'ul li': {
        fontSize: '16px'
      },
      'li a': {
        position: 'relative'
      },
      'ul li a::after': {
        transition: 'all .6s ease',
      },
      'ul li a:hover::after': {
        content: `''`,
        background: '$white',
        position: 'absolute',
        bottom: '-10px',
        left: '30%',
        width: '50%',
        height: '2px',
        zIndex: '4',
        opacity: '1'
      }

    },
    '.social-icons': {
      marginBlock: '$2',
      justifyContent: 'end',
      'img': {
        flex: '0',
        width: '23px',
        height: '23px'
      },
      'li': {
        height: '25px',
      },
      'ul li a::after': {
        content: `''`,
        background: 'transparent',
        position: 'absolute',
        bottom: '-10px',
        left: '30%',
        width: '50%',
        height: '2px',
        zIndex: '4',
        transition: 'all .6s ease',
        opacity: '0'
      },
      'ul li a:hover::after': {
        content: `''`,
        background: '$white',
        position: 'absolute',
        bottom: '-10px',
        left: '30%',
        width: '50%',
        height: '2px',
        zIndex: '4',
        opacity: '1'
      }
    },
    '.foot-note': {
      textAlign: 'right'
    },
    '.footer-logo, .footer-nav': {
      paddingInlineStart: '$2'
    },
    '.social-icons, .foot-note': {
      paddingInlineEnd: '$2'
    }
  },
  '@bp2': {
    gridTemplateColumns: 'repeat(2, calc(1280px / 2 ))'
  }

})

const Icons = () => (
  <div className='social-icons'>
    <ul>
      {iconImages.map((icon) => (
        <li key={icon}>
          <a href="#">
            <img alt="Social media icon" src={icon} />
          </a>
        </li>
      )

      )}
    </ul>
  </div>
)

const Footer = () => {
  console.log(dbData)
  const { data } = useFetch('http://localhost:3000/menu')
  return (
    <FooterContainer>
      <div className='footer-logo'>
        <Logo />
      </div>
      <div className='footer-nav'>
        <ul>
          {dbData && dbData.menu.items.map((item: string) => (
            <li key={item}><a href="#">{item}</a></li>
          ))}
        </ul>
      </div>
      <Icons />
      <div className='foot-note'>
        <p>© 2022 Loopstudios. All rights reserved.</p>
      </div>
    </FooterContainer>
  )
}

export default Footer
