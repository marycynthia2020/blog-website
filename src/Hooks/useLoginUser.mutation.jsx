import { useMutation } from "@tanstack/react-query"

export async function loginUser (formData){
  const response = await fetch("https://test.blockfuselabs.com/api/login", {
        method: "POST",
        headers: {
        'Content-Type': "application/json"
        },
        body: JSON.stringify(formData)  
    })
    const data = await(response.json())
     return data
}

export const useLoginUser = () => {
    const mutation = useMutation({
    mutationFn: loginUser
  })
  return mutation
}
  