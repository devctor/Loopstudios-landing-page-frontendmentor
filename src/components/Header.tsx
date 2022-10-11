import { styled } from '../../stitches.config'
import { useState } from 'react'
import '@fontsource/josefin-sans/300.css'
import BtnMenu from './ui/BtnMenu'
import Nav from './Nav'
import useFetch from '../hooks/useFetch'
import Logo from './Logo'

const HeaderCont = styled('header', {
  position: 'fixed',
  top: '0',
  zIndex: '2',
  paddingBlockStart: '$2',
  width: '100%',
  '& .top-nav': {
    display: 'flex',
    alignItems: 'center',
    marginInline: '$2',
    paddingBlockStart: '$2',
    padding: '12px 0'
  },
  'a': { display: 'flex' }
})

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const { data, loading, error } = useFetch('http://localhost:3000/menu')
  const menuHandler = () => {
    setToggleMenu(!toggleMenu)
    console.log(...data.items)
  }
  return (
    <>
      <HeaderCont>
        <div className='top-nav'>
          <a href='/'>
            <Logo />
          </a>
          <BtnMenu toggle={toggleMenu} onClick={menuHandler}>
            <span>
            </span>
          </BtnMenu>
        </div>
        {toggleMenu ? (<Nav menuItems={[...data.items]} />) : (null)}
      </HeaderCont>
    </>
  )
}

export default Header
