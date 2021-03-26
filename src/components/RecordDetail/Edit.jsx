import { useState } from 'react'

import RecordFrom from '../shared/RecordForm'

const Edit = ({ recordData }) => {
  const [input, setInput] = useState({})

  const handleChange = ({ target: { name, value } }) => {
    setInput({
      ...input,
      [name]: value,
    })
  }

  return (
    <>
      <RecordFrom
        handleChange={handleChange}
        recordData={recordData}
        heading="Edit:"
      />
    </>
  )
}

export default Edit
