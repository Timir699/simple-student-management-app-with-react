const Absent = (props) => {
    let {absentData, setAbsentData,presentData,setPresentData} = props
    const accidentlyAdded = (absent) => {
        setPresentData([...presentData,absent])
        const absentClear = absentData.filter( (item) => item.id !== absent.id )
        setAbsentData(absentClear)
    }
    return ( 
        <div className = "studentlist">
            <h2 className = "studentlist__heading">Absent</h2>
            {absentData.map( (absent) => {
                return (
                    <div className = "studentlist__student" key = {absent.id}>
                        <h2>{absent.student}</h2>
                        <h3>Dep: {absent.faculty}</h3>
                        <button className = "studentlist__student-btn" onClick = { () => accidentlyAdded(absent)}>Accidently Added</button>
                    </div>
                )
            } )}
        </div>
     );
}
 
export default Absent;