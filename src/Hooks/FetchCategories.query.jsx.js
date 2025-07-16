import { useQuery } from "@tanstack/react-query"

export const  fetchAllCategories = () => {
    const query = useQuery({
        queryKey: ["categories"],
        queryFn: ()=>fetch("https://test.blockfuselabs.com/api/categories").then(res => res.json())
    })
    return query
}
// https://test.blockfuselabs.com/api/categories?page=2