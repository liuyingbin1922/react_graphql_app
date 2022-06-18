import { gql } from "@apollo/client";

export const QUERY_SPACEX_DATA = gql`
    query QUERY_SPACEX_DATA {
        launchesPast(limit:10) {
            mission_name
        }
    }
`