import { useMutation } from "@tanstack/react-query"

const deletePost = async({id, token})=>{
    const response = await fetch(`https://test.blockfuselabs.com/api/posts/${id}`, {
      method: "DELETE",
      headers:{
        "Authorization": `Bearer ${token}`
      },
    })
    return response.json()
}

export const DeletePost = () => {
    const mutation = useMutation({
        mutationFn: deletePost
    })
  return mutation
}

export default DeletePost