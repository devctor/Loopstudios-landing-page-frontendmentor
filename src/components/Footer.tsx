import { styled } from '../../stitches.config'
import Logo from '../components/Logo'
import useFetch from '../hooks/useFetch'

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
    marginBlock: 'calc($2 * 2)',
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
      fontSize: '30px'
    }
  },
  '.social-icons': {
    display: 'flex',
    justifyContent: 'center',
    gap: '$2',
    marginBlockStart: 'calc($2 * 2)',
    marginBlockEnd: '$2',
    'img': {
      flex: '0 0 10%',
    }
  },
  '.foot-note': {
    textAlign: 'center',
    fontSize:'1.2em',
    color: '$darkGray',
    marginBlockEnd: 'calc($2 * 2)'
  }

})

const Icons = () => (
  <div className='social-icons'>
    { iconImages.map((icon: string) => (
      <img key={icon.split('.')} src={icon} />
    )

    )}
  </div>
)

const Footer = () => {
  const { data } = useFetch('http://localhost:3000/menu')
  console.log(data, 'mifoot')
  // console.log(iconFb)
  return (
    <FooterContainer>
      <div className='footer-logo'>
      <Logo />
      </div>
      <div className='footer-nav'>
        <ul>
          { data && data.items.map((item: string) => (
            <li key={item}>{item}</li>
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
