import { useQuery } from "@tanstack/react-query"

export const fetchAllPosts = ()=>{
    const query = useQuery({
        queryKey: ["posts"], 
        queryFn: ()=>fetch("https://test.blockfuselabs.com/api/posts").then(res => res.json()),
    })
    return query
}