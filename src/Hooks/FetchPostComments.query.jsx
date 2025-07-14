import { useQuery } from "@tanstack/react-query"

export const fetchPostComments = (id)=>{
    const query = useQuery({
        queryKey: ["comments"],
        queryFn: ()=>fetch(`https://test.blockfuselabs.com/api/posts/${id}/comments`).then(res=>res.json())
    })
    return query
}