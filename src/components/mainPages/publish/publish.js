
import {Header} from '../../header/header';
import PublishMain from './components/publishMain';
import './publish.css';

const Publish = () => {
    const {headerPublish} = Header();

    const header = headerPublish();
    return(
        <div className="mainPage__wrapper">
            {header}
            <PublishMain/>
        </div>
        
    )
}

export default Publish;