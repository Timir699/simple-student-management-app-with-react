const Present = (props) => {
    let {presentData,setPresentData,setAbsentData,absentData} = props
    const accidentlyAdded = (present) => {
        setAbsentData([...absentData,present])
        const absentClear = presentData.filter( (item) => item.id !== present.id )
        setPresentData(absentClear)
    }
    return (
        <div className = "studentlist">
            <h2 className = "studentlist__heading">Present</h2>
            {presentData.map( (present) => {
                return (
                    <div className = "studentlist__student" key = {present.id}>
                        <h2>{present.student}</h2>
                        <h3>Dep: {present.faculty}</h3>
                        <button className = "studentlist__student-btn" onClick = { () => accidentlyAdded(present)}>Accidently Added</button>
                    </div>
                )
            } )}
        </div>
     );
}
 
export default Present;