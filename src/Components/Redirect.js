import { useEffect } from "react"
import { AiOutlineReload } from "react-icons/ai"
import { useNavigate } from "react-router-dom"


export default function Redirect(){

    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/home')
    })
    return(
        <div>

        </div>
    )
}