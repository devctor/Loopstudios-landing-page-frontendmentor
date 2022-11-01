import { styled } from '../../stitches.config'
import { useState } from 'react'
import '@fontsource/josefin-sans/300.css'
import BtnMenu from './ui/BtnMenu'
import Nav from './Nav'
import useFetch from '../hooks/useFetch'
import Logo from './Logo'
import dbData from '../../db.json'

const HeaderCont = styled('header', {
  position: 'fixed',
  top: '0',
  zIndex: '2',
  paddingBlockStart: '$2',
  width: '100%',
  '--custom': 'pink',
  '& .top-nav': {
    display: 'flex',
    alignItems: 'center',
    marginInline: '$2',
    paddingBlockStart: '$2',
    padding: '12px 0'
  },
  'a': { display: 'flex' },
  '@bp1': {
    '& > div': {
      display: 'flex',
      position: 'relative',
      zIndex: '3',
    },
    '.top-nav': {
      width: '20%',
      marginInlineStart: '20px',
    },
    [`& ${Nav}`]: {
      position: 'relative',
      'ul': {
        flexDirection: 'row',
      },
      'ul li': {
        position: 'relative',
        zIndex: '4',
        'a::after': {
          transition: 'all 5s ease'
        },
        'a:hover::after': {
          content: `''`,
          background: '$white',
          position: 'absolute',
          bottom: '-10px',
          left: '30%',
          width: '50%',
          height: '4px',
          zIndex: '4',
        },
      }
    },
    [`& ${BtnMenu}`]: {
      display: 'none'
    }
  },
  '@bp2': {
    display: 'grid',
    gridTemplateColumns: '1fr 1280px 1fr',
    '& > div': {
      gridArea: '1 / 2 / 2 / 2',
      paddingInlineStart: '10px'
    }
  }
})

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  // const { data, loading, error } = useFetch('http://localhost:3000/menu')
  const data = dbData.menu
  const menuHandler = () => {
    setToggleMenu(!toggleMenu)
    console.log(data.items, 'data items')
  }
  return (
    <>
      <HeaderCont>
        <div>
          <div className='top-nav'>
            <a href='/'>
              <Logo />
            </a>
            <BtnMenu toggle={toggleMenu} onClick={menuHandler}>
              <span>
              </span>
            </BtnMenu>
          </div>
          {/* {toggleMenu ? (<Nav menuItems={[...data.items]} />) : (null)} */}
          <Nav menuItems={data?.items} toggle={toggleMenu} />
        </div>
      </HeaderCont>
    </>
  )
}

export default Header
