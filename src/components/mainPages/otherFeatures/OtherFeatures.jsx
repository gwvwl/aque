
import HeaderFeatures from './components/HeaderFeatures';
import FeaturesList from './components/FeaturesList';
import FeaturesMain from './components/FeaturesMain';

import './otherFeatures.css';

const OtherFeatures = () => {

    return(
        <div className="mainPage__wrapper">
            <HeaderFeatures/>
            <FeaturesList/>
            <FeaturesMain/>
        </div>
        
    )
}

export default OtherFeatures;