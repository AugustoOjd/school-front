import { Navigate } from "react-router-dom"


export const returnDashboard = (id: string)=>{

    if(!id){
        
        Navigate({
            to: `/`,
        })
    }

    Navigate({
        to: `/user/${id}`,
    })
}