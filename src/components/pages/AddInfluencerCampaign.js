import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../utils/AuthContext';
import Page1 from './AddCamaign/Page1';
import Page2 from './AddCamaign/Page2';
import Page3 from './AddCamaign/Page3';
import Page4 from './AddCamaign/Page4';
import { InfluencerCampaignContext } from '../../utils/InfluencerCampaignContext';
import Select from 'react-select';

function AddInfluencerCampaign() {

    const { page, clearStorage, resetAllStates } = useContext(InfluencerCampaignContext);

    const { company_id, addBrandId, brand_id } = useContext(AuthContext)
    const [brands, setBrands] = useState([]);

    const [currentBrand, setCurrentBrand] = useState([]);

    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(()=>{

        fetch(`${process.env.REACT_APP_API_URL}/all_brands/${company_id}`)
        .then((response)=> response.json())
        .then(response => {

            let newArray = response.filter( resp => resp._id == brand_id )
            setCurrentBrand(newArray);

            setSelectedOption({value: newArray[0]._id, label: (
                <div className='flex gap-4 items-center'>
                    <img
                    src={`${process.env.REACT_APP_API_URL}/uploads/${newArray[0].brand_logo}`}
                    alt={newArray[0].brand_name}
                    className='w-1/4'
                    />
                    <div className='text-xs lg:text-sm w-3/4'>{newArray[0].brand_name}</div>
                </div>
              )})
            setBrands(response)
        })
        .catch(err => console.log(err))
    },[])

    const options = brands.map((brand) => ({
    value: brand._id,
    label: (
        <div className='flex gap-4 items-center'>
        <img
            src={`${process.env.REACT_APP_API_URL}/uploads/${brand.brand_logo}`}
            alt={brand.brand_name}
            className='w-1/4 h-10 object-contain'
        />
        <div className='text-sm lg:text-sm w-3/4'>{brand.brand_name}</div>
        </div>
    ),
    }));


    useEffect(()=>{
        if(selectedOption){
        addBrandId(selectedOption.value)
        }
    },[selectedOption])


  return (
    <div className='w-full min-h-screen bg-neutral-300'>

        <div className="fixed bg-gray-200 shadow-md p-2 w-full flex justify-between items-center">
                <div className='align-middle p-1 ml-5 lg:ml-10'>
                { brands.length > 0 && 
                
                <Select options={options} onChange={setSelectedOption} defaultValue={{value: currentBrand[0]._id, label: (
                    <div className='flex gap-4 items-center'>
                        <img
                        src={`${process.env.REACT_APP_API_URL}/uploads/${currentBrand[0].brand_logo}`}
                        alt={currentBrand[0].brand_name}
                        className='w-1/4 h-10 object-contain'
                        />
                        <div className='text-xs lg:text-sm w-3/4'>{currentBrand[0].brand_name}</div>
                    </div>
                )}}
                /> }
                </div>


                <div className='gap-4 lg:gap-8 flex justify-end mr-5 mt-2 text-sm'>
                    <Link onClick={()=> { resetAllStates(); clearStorage()}} to={"/all_campaigns"} className='bg-red-600 hover:bg-transparent text-white hover:text-red-700 border border-red-600 border-solid p-1 rounded-md lg:rounded-lg flex gap-1  align-middle text-sm'>
                            CLOSE
                    </Link>
                </div>

        </div>

        {
            page == 0 ? <Page1 /> 
            : page == 1 ? <Page2 />
            : page == 2 ? <Page3 />
            : page == 3 ? <Page4 />
            : <Page1 />
        }
    </div>
  )
}

export default AddInfluencerCampaign
