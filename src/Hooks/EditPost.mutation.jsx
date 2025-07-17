import { useMutation } from "@tanstack/react-query"

const editPost = async ({id, token, editedPostForm})=>{
    const response = await fetch(`https://test.blockfuselabs.com/api/posts/${id}`,{
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "multipart/form-data",
            // "Content-Type": "multipart/form-data",
        },
        body: editedPostForm
    })
    return response.json()
}



export const editSelectedPost = () => {
    const mutation = useMutation({
        mutationFn: editPost
    })
  return mutation
}

export default editSelectedPost