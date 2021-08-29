const AllList = (props) => {
    let { allData, setAllData, setPresentData, presentData, setAbsentData, absentData, setInputStudent, setChangeBtn, setEditableStudent } = props
    let sendStudent = (student) => {
        if (presentData.find((item) => item.id === student.id)) {
            return alert("Allrady Present")
        }
        if (absentData.find((item) => item.id === student.id)) {
            return alert("Already Added in absent")
        }
        setPresentData([...presentData, student])
    }
    let sendAbsent = (student) => {
        if (absentData.find((item) => item.id === student.id)) {
            return alert("Allrady Absent")
        }
        if (presentData.find((item) => item.id === student.id)) {
            return alert("Allrady Added in Present")
        }
        setAbsentData([...absentData, student])
    }

    const editList = (student) => {
        setChangeBtn(true)
        setInputStudent(student)
        setEditableStudent(student)
    }

    const deleteHand = (student) => {
        const filteredData = allData.filter((item) => item.id !== student.id)
        setAllData(filteredData)
        const filteredPresentData = presentData.filter((item) => item.id !== student.id)
        setPresentData(filteredPresentData)
        const filteredAbsentData = absentData.filter((item) => item.id !== student.id)
        setAbsentData(filteredAbsentData)
    }
    return (
        <div className="studentlist">
            <h2 className="studentlist__heading">All Students</h2>
            {allData.map((student) => {
                return (
                    <div className="studentlist__student" key={student.id}>
                        <h2>{student.student}</h2>
                        <h3>Dep: {student.faculty}</h3>
                        <button className="studentlist__student-btn " onClick={() => sendStudent(student)}>Present</button>
                        <button className="studentlist__student-btn" onClick={() => sendAbsent(student)}>Absent</button>
                        <button className="studentlist__student-btn" onClick={() => editList(student)}>Edit</button>
                        <button className="studentlist__student-btn" onClick={() => deleteHand(student)}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}

export default AllList;