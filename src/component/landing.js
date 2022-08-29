import {useNavigate} from 'react-router-dom'

export const Landing =() => {

    const navigate = useNavigate();

    return(
        <div>
            <div>HomePage</div>
            <button className="border-2" onClick = {() => navigate('/myprofile')}>Go to profile page</button>
        </div>
    )
}
