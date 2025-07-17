import { useMutation } from "@tanstack/react-query"

const postComment = async ({id, token, newComment})=>{
    const response = await fetch(`https://test.blockfuselabs.com/api/posts/${id}/comments`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(newComment)
    })
    return response.json()
}

const PostComment = () => {
    const commentMutation = useMutation({
        mutationFn: postComment
    })
    return commentMutation
}

export default PostComment

