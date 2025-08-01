import { useMutation } from '@tanstack/react-query'

export async function registerUser (formData){
  const response = await fetch("https://test.blockfuselabs.com/api/register", {
        method: "POST",
        headers: {
        'Content-Type': "application/json"
        },
        body: JSON.stringify(formData)  
    })
    return response.json()
}

export const useRegisterUser = () => {
   const mutation = useMutation({
        mutationFn: registerUser
    })
  return mutation
}