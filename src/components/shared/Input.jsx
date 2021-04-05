import { TextField } from '@material-ui/core'

export const FormInput = ({
  name,
  label,
  type,
  id,
  autoComplete,
  className,
  ...props
}) => (
  <TextField
    variant="filled"
    fullWidth
    name={name}
    label={label}
    type={type}
    id={id}
    autoComplete={autoComplete}
    className={className}
    {...props}
  />
)
