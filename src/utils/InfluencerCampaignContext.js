import { createContext, useState } from "react";

export const InfluencerCampaignContext = createContext();

export const InfluencerCampaignProvider = ({ children }) => {

    const heading = {
        0: 'Campaign',
        1: 'More Details',
        2: 'Social Media',
        3: 'Budget and Duration'
    }

    const [page, setPage] = useState(0);

    const [startDate, setStartDate] = useState(new Date());
    const [numOfDays, setNumOfDays] = useState(1);
    const [endDate, setEndDate] = useState(new Date());

    const [rangeValue, setRangeValue] = useState(1);

    const [title, setTitle] = useState(null);
    const [objective, setObjective] = useState(null);
    const [industry, setIndustry] = useState(null);
    const [callToAction, setCallToAction] = useState(null);

    const [dos, setDos] = useState([]);

    const [donts, setDonts] = useState([]);

    const [instaTags, setInstaTags] = useState([]);

    const [xTags, setXTags]= useState([]);

    const [fbTags, setFbTags] = useState([]);

    const [preferedGender, setPreferedGender] = useState(null);
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(0);
    const [InstaFollowersNeeded, setInstaFollowersNeeded] = useState(null);
    const [xFollowersNeeded, setXFollowersNeeded] = useState(null);
    const [fbFollowersNeeded, setFbFollowersNeeded] = useState(null);
    const [location, setLocation] = useState(null);

    const [imageSrc, setImageSrc] = useState(null);

    const [imageUrl, setImageUrl] = useState(null);


    return <InfluencerCampaignContext.Provider value={{
        heading,
        page,
        title, objective, industry, 
        callToAction, donts, dos, 
        xTags, instaTags, fbTags, 
        preferedGender, minAge, maxAge, 
        InstaFollowersNeeded, xFollowersNeeded, fbFollowersNeeded, 
        location,
        rangeValue,
        startDate, numOfDays,endDate, 
        imageSrc, imageUrl

    }}>
        { children }
    </InfluencerCampaignContext.Provider>
}