import { useQuery } from '@apollo/client';
import { QUERY_SPACEX_DATA } from '../../constant';
import { LaunchesPastType } from '../../type';
import { Table, Tag } from 'antd';
import {resoleVideo} from '../../utils';
import './index.css';


function SpaceXComponent() {
    const { data } = useQuery(QUERY_SPACEX_DATA) as LaunchesPastType;
    
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
          title: 'Mission Name',
          dataIndex: 'mission_name',
          key: 'mission_name',
        },
        {
            title:'Launch Date Local',
            dataIndex:'launch_date_local',
            key:'launch_date_local'
        },
        {
            title:'launch Site',
            dataIndex:'launch_site',
            key:'launch_site'
        },
        {
            title:'Ships Info',
            dataIndex: 'ships',
            render: (record:any[]) => {
                return (
                    <div>
                        {
                            record.length && record.map( (item:{
                                name: string,
                                image: string,
                                home_port: string,
                            }) => {
                               return ( 
                                    <div className='wrapper' key={item.name}>
                                        <div className='name'>name:{item?.name}</div>
                                        <img src={item?.image} className={'img'}/>
                                        <div className='home_port'>home port:{item?.home_port}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            },
        },
        {
            title:'Link',
            dataIndex:'links',
            width:'220px',
            render:(record:any) => {
                return (
                    <div>
                        {
                            <div>
                                {record.article_link && <a href={record.article_link}>article link</a>}
                                <br />
                                {record.video_link &&  
                                <video width="200" controls>
                                    <source src={resoleVideo(record.video_link) + '&html5=True'} type="video/mp4" />
                                    Your browser does not support HTML video.
                                </video>
                                }
                            </div> 
                        }
                    </div>
                )
            }
        },
        {
            title: 'Rocket',
            dataIndex: 'rocket',
            render: (record: any) => {
                return (
                    <div>
                        <div>rocket name: <span className='spanStyle'>{record.rocket_name}</span></div>
                        <div>rocket type: <span className='spanStyle'>{record.rocket_type}</span></div>
                    </div>
                )
            }
        },
        {
            title:'Details',
            dataIndex:'details',
            key:'details',
        },
        {
            title: 'Launch Status',
            dataIndex:'launch_success',
            render:((record:any) => {
                return (
                    <div>
                        {
                            record ? <Tag color="success"> success</Tag> : <Tag color="error"> fail</Tag>
                        }
                    </div>
                )
            })
        }
    ];

    const dataSource:any[] = [];
    console.log('data',data)
    data?.launchesPast && data?.launchesPast.forEach(item => {
        dataSource.push({
            mission_name: item.mission_name,
            id: item.id,
            launch_date_local: item.launch_date_local,
            launch_site: item.launch_site.site_name_long,
            ships: item.ships,
            links: item.links,
            rocket: item.rocket,
            details: item.details || 'no detail',
            launch_success: item.launch_success,
            key: item.id
        })
    })

    return (
        <Table dataSource={dataSource} columns={columns} tableLayout="fixed" bordered/>
    );
}

export default SpaceXComponent;