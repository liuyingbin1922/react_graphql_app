import { gql } from "@apollo/client";

export const QUERY_SPACEX_DATA = gql`
    query QUERY_SPACEX_DATA {
        launchesPast(limit:10) {
            id
            mission_name
            launch_date_local
            launch_site {
                site_name_long
            }
            ships {
                name
                home_port
                image
            }
            links {
                article_link
                video_link
            }
            rocket {
                rocket_name
                rocket_type
            }
            launch_success
            details
        }
    }
`

export const QUERY_SPACEX_LAUNCH_NEXT = gql`
    query QUERY_SPACEX_LAUNCH_NEXT {
            launchNext {
                launch_date_local
                id
                launch_site {
                site_name_long
                }
                launch_success
                links {
                article_link
                video_link
                }
                rocket {
                rocket_name
                rocket_type
                }
                details
                mission_name
            }
    }

`