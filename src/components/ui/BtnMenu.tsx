
import { styled } from '../../../stitches.config'

const BtnMenu = styled('button', {
  marginInlineStart: 'auto',
  backgroundColor: 'transparent',
  display: 'grid',
  placeContent: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  outline: 'transparent',
  '&:hover': {
    borderColor: 'transparent',
    outline: 'none'
  },
  variants: {
    toggle: {
      true: {
        backgroundImage: 'url("./images/icon-close.svg")'
      },
      false: {
        backgroundImage: 'url("./images/icon-hamburger.svg")'
      }
    }
  }
})

export default BtnMenu
