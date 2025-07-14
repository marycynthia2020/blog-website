import { useQuery } from "@tanstack/react-query"

export const fetchAllPosts = ()=>{
    const query = useQuery({
        queryKey: ["posts"], 
        queryFn: ()=>fetch("https://test.blockfuselabs.com/api/posts").then(res => res.json())
    })
    return query
}


// async function fetchAllPosts(url:string){  // function to fetch all posts
//     try{
//           const response = await fetch(url)
//           if(!response.ok){
//             const result = await response.json()
//             alertMessage(`${result.message}`, "red");
//             return
//           } 
//         const result = await response.json()
//         renderAllPosts(result)
//         return result
       
//     }catch{
//         alertMessage("Failed to fetch posts", "red")
//     }
// }