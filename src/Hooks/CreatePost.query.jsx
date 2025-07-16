import { useMutation } from '@tanstack/react-query'


const createNewPost = async ({token, newPost})=>{
    const response = await fetch("https://test.blockfuselabs.com/api/posts", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: newPost
    })
    return response.json()
}

export const createPost = () => {
     const mutation = useMutation({
        mutationFn: createNewPost
    })
  return mutation
}

