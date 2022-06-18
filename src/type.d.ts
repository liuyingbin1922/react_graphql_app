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


export interface LaunchNextType {
    launch_date_local: string;
    id: string;
    details: string;
    launch_date_local: string;
    launch_site: {
         site_name_long: string;
    };
    launch_success: boolean | null;
    links: { article_link: string | null, video_link: string | null};
    mission_name: string;
    rocket: { rocket_name: string, rocket_type: string}
}

interface LaunchesPast {
    launchesPast: LaunchesPastBodyType[]
}

export interface LaunchesPastType {
    data: LaunchesPast
}

export interface LaunchesNextType {
    data: {launchNext: LaunchNextType}
}
