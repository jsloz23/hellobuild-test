import axios from "axios";
import { useEffect, useState } from "react";

export function useProfileViewModel() {
    let username = "";
    let reposArray: any[] = [];
    const [repos, setRepos] = useState<any[]>([]);
    const [user, setUser] = useState("");
    const [searchTerm, setSearchTerm] = useState("")
    const [favoriteFlag, setFavoriteFlag] = useState(false);
    

    const handleRepos = async () => {
        try {
            await axios.get(`https://api.github.com/users/${username}/repos`)
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    const newItem = {
                        name: res.data[i].name,
                        visibility: res.data[i].visibility,
                        lastUpdate: res.data[i].updated_at,
                        favorite: false
                    }
                    reposArray.push(newItem)
                }
            })
            setRepos(reposArray)
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(() => {
        username = JSON.parse(localStorage.getItem('username') || "{}")
        setUser(username)
        handleRepos()
    }, [])


    const handleSearch = (term: string) => {
        setSearchTerm(term)
    }

    const handleAddFavorite = (repo: any) => {
        const updatedRepos = repos.map((r) => r.name === repo.name ? { ...r, favorite: true } : r);
        setRepos(updatedRepos);
        setFavoriteFlag(true)
    }
    
    return { repos, user, searchTerm, handleSearch, handleAddFavorite, favoriteFlag }
}