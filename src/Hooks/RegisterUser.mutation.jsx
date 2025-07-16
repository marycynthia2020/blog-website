import { useMutation } from '@tanstack/react-query'
import { registerUser } from '../utils/RegisterUser'

export const mutation = useMutation({
        mutationFn: registerUser
    })
const RegisterUser = () => {
   
  return (
    <div></div>
  )
}

export default RegisterUser