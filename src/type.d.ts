interface LaunchesPastBodyType {
    mission_name: string;
    id: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    },
    ships: {
        home_port: string,
        name: string,
        image: string;
    }[],
    links: {
        video_link: string;
        article_link: string;
    },
    rocket: {
        rocket_name: string;
        rocket_type: string;
    },
    details: string;
    launch_success: boolean;
}

interface LaunchesPast {
    launchesPast: LaunchesPastBodyType[]
}

export interface LaunchesPastType {
    data: LaunchesPast
}
