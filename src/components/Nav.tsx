import { styled } from '../../stitches.config'

/**
* Navigation Component
*/
const NavCont = styled('nav', {
  backgroundColor: '$black',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  zIndex: '-1',
  display: 'flex',
  alignItems: 'center',
  'ul': {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 $2',
    gap: '50px',
    'li': {
      fontSize: '40px',
      textTransform: 'uppercase',
      'a': {
        fontWeight: '300',
        color: '$white'
      }
    }
  },
  '@bp1': {
    display: 'flex',
    position: 'relative',
    height: 'auto',
    maxWidth: '1280px',
    backgroundColor: 'transparent',
    'ul': {
      flexDirection: 'row',
      marginInlineStart: 'auto',
      'li': {
        fontSize: '20px',
        fontWeight: '400',
        textTransform: 'capitalize',
        'a': {
          color: '$white'
        }
      }
    }
  },
  variants: {
    displayNav: {
      true: {
        display: 'flex'
      },
      false: {
        display: 'none'
      }
    }
  }
})

type NavProps = {
  menuItems: string[],
  toggle: boolean
}
const Nav = ({ menuItems, toggle }: NavProps) => {
  // const { status, fetchNow } = useFetch()
  console.log(menuItems, toggle, 'tgg')

  return (
    <NavCont displayNav={{ '@initial': toggle, '@bp1': 'true' }}>
      <ul>
        {menuItems?.map((item: string) => {
          return (
            <li key={item}><a href="#">{item}</a></li>
          )
        })}
      </ul>
    </NavCont >
  )
}

export default Nav
