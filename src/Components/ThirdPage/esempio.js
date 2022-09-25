
export default function ThirdPageForm({data, setData}){
    const [choices, setChoices] = useState([
        {
            label: "Single Family",
            active: false
        }
    ])
    return (
        <div className="form">
    
            <p className="title" style={{marginTop: '20px', fontSize: '14px'}}>What kind of real estate are you interested in?</p>
            <Checkbox data={data} setData={setData} handleChange={() => setChoices(...)} />

        </div>
    )
}

function Checkbox ({data, setData, handleChange}){
    const choices = ['Single family', 'Residential multifamily', 'Commercial retail', 'Commercial industrial',
                    'Commercial hospitality', 'Commercial warehousing', 'Commercial office', 'Other']


    let boxes = choices.map((c, id) => {
        return(
            <Box 
                name={c}
                id={`box${id}`}
                data={data}
                setData={setData}
                active={}
            handleChange={handleChange}
            />
        )
    })

    return(
        <div className="checkbox" >
            {boxes}
        </div>
    )
}

function Box ({ name, id, data, setData, active, handleChange }) {
    const [active, setActive] = useState(false)

    function handleChange(e){
       if(data.interestedIn.includes(e.target.name)){  
        setData({...data, interestedIn: [data.interestedIn.filter(b => b!==e.target.name)]})
       } else{
        setData({...data, interestedIn: [...data.interestedIn, e.target.name]})
       }
       setActive(!active) 

    }

    return(
        <>
        <label for={id} className={`checkboxLabel ${active ? "activeCheck" : ""}`}>
            <input 
                type="checkbox"
                id={id}
                name={name}
                value={name}
                onChange={handleChange}
                ></input>
            {name}</label>
        </>
    )
}