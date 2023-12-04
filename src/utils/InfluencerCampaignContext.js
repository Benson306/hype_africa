import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const InfluencerCampaignContext = createContext();

export const InfluencerCampaignProvider = ({ children }) => {

    const [startDate, setStartDate] = useState(new Date());
    const [numOfDays, setNumOfDays] = useState(1);
    const [endDate, setEndDate] = useState(new Date());
    const [budget, setBudget] = useState(1);
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

    const [allParticipants, setAllParticipants] = useState(true);
    const [creatorGroupsSelected, setCreatorGroupsSelected] = useState([]);

    const [page, setPage] = useState(0);

    const updateAllParticipants = (value) => {
        setAllParticipants(value);
        localStorage.setItem('allParticipants', value);
    }

    const updateCreatorGroupsSelected = (value) => {
        setCreatorGroupsSelected(value);
        localStorage.setItem('creatorGroupsSelected', JSON.stringify(value));
    }

    const updateBudget = (newBudget) => {
        setBudget(newBudget);
        localStorage.setItem('budget', newBudget);
    }

    const updateStartDate = (newStartDate) => {
        setStartDate(newStartDate);
        localStorage.setItem('startDate', newStartDate);
    }

    const updateEndDate = (newEndDate) => {
        setEndDate(newEndDate);
        localStorage.setItem('endDate', newEndDate);
    }

    const updateNumOfDays = (newNumOfDays) => {
        setNumOfDays(newNumOfDays);
        localStorage.setItem('numOfDays', newNumOfDays);
    }

    const updateImageSrc = (newImageSrc) => {
        setImageSrc(newImageSrc);

        // Convert the File to a Data URL
        const reader = new FileReader();
        reader.onload = (e) => {
            const dataURL = e.target.result;

            // Save the Data URL to localStorage
            localStorage.setItem('imageSrc', dataURL);
        };

        // Read the File as a Data URL
        reader.readAsDataURL(newImageSrc);
        //localStorage.setItem('imageSrc', newImageSrc);
    };

    const updateImageUrl = (newImageUrl) => {
        setImageUrl(newImageUrl);
        localStorage.setItem('imageUrl', newImageUrl);
    };

    const updateTitle = (newTitle) => {
        setTitle(newTitle);
        localStorage.setItem('title', newTitle);
    };

    const updateObjective = (newObjective) => {
        setObjective(newObjective);
        localStorage.setItem('objective', newObjective);
    };

    const updateIndustry = (newIndustry) => {
        setIndustry(newIndustry);
        localStorage.setItem('industry', newIndustry);
    };

    const updateCallToAction = (newCallToAction) => {
        setCallToAction(newCallToAction);
        localStorage.setItem('callToAction', newCallToAction);
    };

    const addDo = (newDo) => {
        setDos([...dos, newDo]);
        // Save the updated 'dos' array to local storage
        localStorage.setItem('dos', JSON.stringify([...dos, newDo]));
    };

    const removeDo = (index) => {
        const updatedDos = dos.slice();
        updatedDos.splice(index, 1);
        setDos(updatedDos);
        // Save the updated 'dos' array to local storage
        localStorage.setItem('dos', JSON.stringify(updatedDos));
    };

    const addDont = (newDont) => {
        setDonts([...donts, newDont]);
        // Save the updated 'donts' array to local storage
        localStorage.setItem('donts', JSON.stringify([...donts, newDont]));
    };

    const removeDont = (index) => {
        const updatedDonts = donts.slice();
        updatedDonts.splice(index, 1);
        setDonts(updatedDonts);
        // Save the updated 'donts' array to local storage
        localStorage.setItem('donts', JSON.stringify(updatedDonts));
    };

    const addInstaTag = (newTag) => {
        setInstaTags([...instaTags, newTag]);
        // Save the updated 'instaTags' array to local storage
        localStorage.setItem('instaTags', JSON.stringify([...instaTags, newTag]));
    };

    const removeInstaTag = (index) => {
        const updatedInstaTags = instaTags.slice();
        updatedInstaTags.splice(index, 1);
        setInstaTags(updatedInstaTags);
        // Save the updated 'instaTags' array to local storage
        localStorage.setItem('instaTags', JSON.stringify(updatedInstaTags));
    };

    const addXTag = (newTag) => {
        setXTags([...xTags, newTag]);
        // Save the updated 'xTags' array to local storage
        localStorage.setItem('xTags', JSON.stringify([...xTags, newTag]));
    };

    const removeXTag = (index) => {
        const updatedXTags = xTags.slice();
        updatedXTags.splice(index, 1);
        setXTags(updatedXTags);
        // Save the updated 'xTags' array to local storage
        localStorage.setItem('xTags', JSON.stringify(updatedXTags));
    };

    const addFbTag = (newTag) => {
        setFbTags([...fbTags, newTag]);
        // Save the updated 'fbTags' array to local storage
        localStorage.setItem('fbTags', JSON.stringify([...fbTags, newTag]));
    };

    const removeFbTag = (index) => {
        const updatedFbTags = fbTags.slice();
        updatedFbTags.splice(index, 1);
        setFbTags(updatedFbTags);
        // Save the updated 'fbTags' array to local storage
        localStorage.setItem('fbTags', JSON.stringify(updatedFbTags));
    };

    const updatePreferedGender = (newGender) => {
        setPreferedGender(newGender);
        localStorage.setItem('preferedGender', newGender);
    };

    const updateMinAge = (newMinAge) => {
        setMinAge(newMinAge);
        localStorage.setItem('minAge', newMinAge);
    };

    const updateMaxAge = (newMaxAge) => {
        setMaxAge(newMaxAge);
        localStorage.setItem('maxAge', newMaxAge);
    };

    const updateInstaFollowersNeeded = (newFollowersNeeded) => {
        setInstaFollowersNeeded(newFollowersNeeded);
        localStorage.setItem('InstaFollowersNeeded', newFollowersNeeded);
    };

    const updateXFollowersNeeded = (newFollowersNeeded) => {
        setXFollowersNeeded(newFollowersNeeded);
        localStorage.setItem('xFollowersNeeded', newFollowersNeeded);
    };

    const updateFbFollowersNeeded = (newFollowersNeeded) => {
        setFbFollowersNeeded(newFollowersNeeded);
        localStorage.setItem('fbFollowersNeeded', newFollowersNeeded);
    };

    const updateLocation = (newLocation) => {
        setLocation(newLocation);
        localStorage.setItem('location', newLocation);
    };

    const updatePage = (newPage) => {
        setPage(newPage);
        localStorage.setItem('page', newPage);
    }

    useEffect(() => {
        // Retrieve values from local storage and set them as the initial state
        const savedAllParticipants = localStorage.getItem('allParticipants');
        if(savedAllParticipants){
            setAllParticipants(savedAllParticipants);
        }
        const savedCreatorGroupsSelected= localStorage.getItem('creatorGroupsSelected');
        if(savedCreatorGroupsSelected){
            setCreatorGroupsSelected(JSON.parse(savedCreatorGroupsSelected));
        }

        const savedBudget = localStorage.getItem('budget');
        if(savedBudget){
            setBudget(savedBudget);
        }

        const savedStartDate = localStorage.getItem('startDate');
        if(savedStartDate){
            setStartDate(savedStartDate);
        }

        const savedEndDate = localStorage.getItem('endDate');
        if(savedEndDate){
            setEndDate(savedEndDate);
        }

        const savedNumOfDays = localStorage.getItem('numOfDays');
        if(savedNumOfDays){
            setNumOfDays(savedNumOfDays);
        }

        const savedTitle = localStorage.getItem('title');
        if (savedTitle) {
            setTitle(savedTitle);
        }

        const savedObjective = localStorage.getItem('objective');
        if (savedObjective) {
            setObjective(savedObjective);
        }

        const savedIndustry = localStorage.getItem('industry');
        if (savedIndustry) {
            setIndustry(savedIndustry);
        }

        const savedCallToAction = localStorage.getItem('callToAction');
        if(savedCallToAction){
            setCallToAction(savedCallToAction);
        }

        const savedDos = localStorage.getItem('dos');
        if (savedDos) {
            setDos(JSON.parse(savedDos));
        }

        const savedDonts = localStorage.getItem('donts');
        if (savedDonts) {
            setDonts(JSON.parse(savedDonts));
        }

        const savedInstaTags = localStorage.getItem('instaTags');
        if (savedInstaTags) {
            setInstaTags(JSON.parse(savedInstaTags));
        }

        const savedXTags = localStorage.getItem('xTags');
        if (savedXTags) {
            setXTags(JSON.parse(savedXTags));
        }

        const savedFbTags = localStorage.getItem('fbTags');
        if (savedFbTags) {
            setFbTags(JSON.parse(savedFbTags));
        }

        const savedPreferedGender = localStorage.getItem('preferedGender');
        if(savedPreferedGender){
            setPreferedGender(savedPreferedGender);
        }

        const savedMinAge = localStorage.getItem('minAge');
        if (savedMinAge) {
            setMinAge(parseInt(savedMinAge, 10)); // Ensure it's parsed as an integer
        }

        const savedMaxAge = localStorage.getItem('maxAge');
        if (savedMaxAge) {
            setMaxAge(parseInt(savedMaxAge, 10)); // Ensure it's parsed as an integer
        }

        const savedInstaFollowersNeeded = localStorage.getItem('InstaFollowersNeeded');
        if (savedInstaFollowersNeeded) {
            setInstaFollowersNeeded(savedInstaFollowersNeeded);
        }

        const savedXFollowersNeeded = localStorage.getItem('xFollowersNeeded');
        if (savedXFollowersNeeded) {
            setXFollowersNeeded(savedXFollowersNeeded);
        }

        const savedFbFollowersNeeded = localStorage.getItem('fbFollowersNeeded');
        if (savedFbFollowersNeeded) {
            setFbFollowersNeeded(savedFbFollowersNeeded);
        }

        const savedLocation = localStorage.getItem('location');
        if (savedLocation) {
            setLocation(savedLocation);
        }

        const savedImageSrc = localStorage.getItem('imageSrc');
        if (savedImageSrc) {
            setImageSrc(savedImageSrc);
        }

        const savedImageUrl = localStorage.getItem('imageUrl');
        if (savedImageUrl) {
            setImageUrl(savedImageUrl);
        }

        const savedPage = localStorage.getItem('page');
        if(savedPage){
            setPage(parseInt(savedPage, 10))
        }
    }, []);

    const { company_id, brand_id } = useContext(AuthContext);

    //const navigate = useNavigate();

    const handleSubmit = (type) => {

        const formData = new FormData();
        formData.append('status',type);
        formData.append('company_id', company_id);
        formData.append('brand_id', brand_id);
        formData.append('title', title);
        formData.append('cover', imageSrc);
        formData.append('objective', objective);
        formData.append('industry', industry);
        formData.append('call_to_action', callToAction);
        formData.append('dos', JSON.stringify(dos));
        formData.append('donts', JSON.stringify(donts));
        formData.append('instagramTags', JSON.stringify(instaTags));
        formData.append('xTags', JSON.stringify(xTags));
        formData.append('fbTags', JSON.stringify(fbTags));
        formData.append('gender', preferedGender);
        formData.append('minAge', minAge);
        formData.append('maxAge', maxAge);
        formData.append('instaFollowers', InstaFollowersNeeded);
        formData.append('xFollowers',xFollowersNeeded);
        formData.append('fbFollowers', fbFollowersNeeded);
        formData.append('location', location);
        formData.append('budget', budget);
        formData.append('startDate', startDate)
        formData.append('endDate', endDate);
        formData.append('numberOfDays', numOfDays);
        formData.append('creatorGroupsSelected', JSON.stringify(creatorGroupsSelected));
        formData.append('allParticipants', allParticipants);

        fetch(`${process.env.REACT_APP_API_URL}/add_influencer_campaign`,{
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then((response)=>{
            if(response == 'success'){
                toast.success('Success!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });

                clearStorage();
                
            }else{
                toast.error('Failed Server Error!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            }
        })
        .catch(err => {
            console.log(err)
            toast.error('Failed Server Error!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        })
    }

    const clearStorage = () => {
        localStorage.removeItem('budget')
        localStorage.removeItem('startDate')
        localStorage.removeItem('endDate')
        localStorage.removeItem('numOfDays')
        localStorage.removeItem('imageSrc')
        localStorage.removeItem('imageUrl')
        localStorage.removeItem('title')
        localStorage.removeItem('objective')
        localStorage.removeItem('industry')
        localStorage.removeItem('callToAction')
        localStorage.removeItem('dos')
        localStorage.removeItem('donts')
        localStorage.removeItem('instaTags')
        localStorage.removeItem('xTags')
        localStorage.removeItem('fbTags')
        localStorage.removeItem('preferedGender')
        localStorage.removeItem('minAge')
        localStorage.removeItem('maxAge')
        localStorage.removeItem('InstaFollowersNeeded')
        localStorage.removeItem('xFollowersNeeded')
        localStorage.removeItem('fbFollowersNeeded')
        localStorage.removeItem('location')
        localStorage.removeItem('page')
        localStorage.removeItem('allParticipants')
        localStorage.removeItem('creatorGroupsSelected')
    }

    return <InfluencerCampaignContext.Provider value={{
        title, objective, industry, 
        callToAction, donts, dos, 
        xTags, instaTags, fbTags, 
        preferedGender, minAge, maxAge, 
        InstaFollowersNeeded, xFollowersNeeded, fbFollowersNeeded, 
        location,
        budget,
        startDate, numOfDays,endDate, 
        imageSrc, imageUrl,
        page,
        allParticipants, creatorGroupsSelected,
        updatePage,
        updateBudget,
        updateStartDate,
        updateEndDate,
        updateNumOfDays,
        updateTitle,
        updateObjective,
        updateIndustry,
        updateCallToAction,
        addDo,
        removeDo,
        addDont,
        removeDont,
        addInstaTag,
        removeInstaTag,
        addXTag,
        removeXTag,
        addFbTag,
        removeFbTag,
        updatePreferedGender,
        updateMinAge,
        updateMaxAge,
        updateInstaFollowersNeeded,
        updateXFollowersNeeded,
        updateFbFollowersNeeded,
        updateLocation,
        updateImageSrc,
        updateImageUrl,
        updateAllParticipants,
        updateCreatorGroupsSelected,
        handleSubmit,
        clearStorage

    }}>
        < ToastContainer />
        { children }
    </InfluencerCampaignContext.Provider>
}