
import {Header} from '../../header/header';
import FeaturesList from './components/featuresList';
import FeaturesMain from './components/featuresMain';

import './otherFeatures.css';

const OtherFeatures = () => {
    const {headerFeatures} = Header();


    

    const header = headerFeatures();
    return(
        <div className="mainPage__wrapper">
            {header}
            <FeaturesList/>
            <FeaturesMain/>
        </div>
        
    )
}

export default OtherFeatures;