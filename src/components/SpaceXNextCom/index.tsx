import { LaunchNextType } from '../../type';
import { resoleVideo } from '../../utils/video';
import './index.css';

interface LaunchNextTypeWrapper {
    data: LaunchNextType
}

function SpaceXNextCom (props: LaunchNextTypeWrapper) {
    const { data }  = props;
    const { 
        details , id , launch_date_local , launch_site : {
        site_name_long
    },
    launch_success ,links: {
        article_link ,
        video_link
    }, mission_name , rocket : {rocket_name , rocket_type} } = data;
    return (
        <div className='LaunchNextWrapper'>
            <div>id: {id}</div>
            <div>Detail: {details}</div>
            <div>Launch date Local: {launch_date_local}</div>
            <div>Launch_site : {site_name_long}</div>
            <div>Launch Status: {launch_success ? 'success' : 'fail'}</div>
            <div>Links:
                <div>article Link : {article_link ?  <a href={article_link as string} /> : 'no link'}</div>
                <div>  
                    {video_link ?
                            <iframe width="160" height="120" src={resoleVideo(video_link) + '?autoplay=1'} ></iframe> : 'no video link'
                        }</div>
            </div>
            <div> Mission Name: {mission_name}</div>
            <div> Rocket: 
                <div>name: {rocket_name}</div>
                <div>type: {rocket_type}</div>
            </div>
        </div>
    )
}

export default SpaceXNextCom;