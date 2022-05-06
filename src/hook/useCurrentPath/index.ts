import { matchRoutes, useLocation } from "react-router-dom"
import { routePathMap } from "../../routes"

export default function useCurrentPath(keepParams?: boolean):string {
    
    let output: string = ""
    const allRoutes = Object.values(routePathMap).map(path => ({path:path}))
    const location = useLocation()
    const result = matchRoutes(allRoutes, location)

    if(result){
        if(!keepParams){
            let cutPath = result[0].route.path?.split("/").filter(path => !path.includes(":"))
            output = cutPath?.join("/") || ""
        }else{
            output = result[0].route.path || ""
        }
    }

    return output
}