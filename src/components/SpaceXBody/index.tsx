import { useQuery } from '@apollo/client';
import { QUERY_SPACEX_DATA } from '../../constant';
import { LaunchesPastType } from '../../type';


function SpaceXComponent() {
    const {data} = useQuery(QUERY_SPACEX_DATA) as LaunchesPastType;
    console.log('data' , data);
    return (
        <div>
            {
                data?.launchesPast && data?.launchesPast.map(item=> {
                    return (
                        <div>
                            {item.mission_name}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default SpaceXComponent;