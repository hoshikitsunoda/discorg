import { useEffect, useState } from 'react'
import { makeStyles, Box } from '@material-ui/core'

import { randomColor } from '../../utils/helper'

const useStyles = makeStyles((theme) => ({
  border: {
    borderBottom: '8px solid #F72C25',

    '&::after': {
      borderBottom: ({ borderColor }) => `8px solid ${borderColor}`,
      background: 'none',
      content: '""',
      display: 'block',
      transition: 'all 1s ease-in-out',
    },

    '&::before': {
      borderBottom: '8px solid #2F52E0',
      background: 'none',
      content: '""',
      display: 'block',
    },
  },
}))

export const MultiColorBorder = () => {
  const [borderColor, setBorderColor] = useState('#F7B32B')
  const classes = useStyles({ borderColor })

  useEffect(() => {
    const intervalID = setTimeout(() => {
      setBorderColor(randomColor())
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [borderColor])

  return <Box className={classes.border} borderColor={borderColor}></Box>
}
