import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
    touristRouteId: string
}

export const DetailPage:React.FC<RouteComponentProps<MatchParams>> = (props) => {
    console.log(props,'propsprops')
    return (
        <h1>路线id:{props.match.params.touristRouteId}</h1>
    )
}