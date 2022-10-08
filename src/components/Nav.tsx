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
    gap: '55px',
    'li': {
      fontSize: '40px',
      fontWeight: '300',
      textTransform: 'uppercase'
    }
  }
})

const Nav = ({ menuItems }: { menuItems: string[] }): JSX.Element => {
  // const { status, fetchNow } = useFetch()

  return (
    <NavCont>
      <ul>
        {menuItems.map((item: string) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
    </NavCont>
  )
}

export default Nav
