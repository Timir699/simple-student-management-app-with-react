import { useState } from 'react'
import './App.scss';
import AllList from './components/AllList'
import Present from './components/Present'
import Absent from './components/Absent'
import shortid from 'shortid'

function App() {
  const [inputStudent, setInputStudent] = useState({
    student: '',
    faculty: '',
    id: shortid.generate()
  })

  const changeHand = (e) => {
    setInputStudent({
      ...inputStudent,
      [e.target.name]: e.target.value
    })
  }
  const [allData, setAllData] = useState([])
  const [presentData, setPresentData] = useState([])
  const [absentData, setAbsentData] = useState([])
  const [changeBtn, setChangeBtn] = useState(false)
  const [editableStudent, setEditableStudent] = useState(null)

  const addData = (e) => {
    e.preventDefault()
    if (inputStudent.student && inputStudent.faculty) {
      setAllData([...allData, inputStudent])
      setInputStudent({
        student: '',
        faculty: '',
        id: shortid.generate()
      })
    } else {
      alert("Please provide valid data")
    }

  }
  const updateData = (e) => {
    e.preventDefault()
    if (!editableStudent) return
    const upDatedData = allData.find((item) => {
      return item.id == editableStudent.id
    })
    upDatedData.student = inputStudent.student
    upDatedData.faculty = inputStudent.faculty
    setEditableStudent(null)
    setInputStudent({
      student: '',
      faculty: '',
      id: shortid.generate()
    })
    setChangeBtn(false)
  }

  return (
    <>
      <div className="input-field">
        <form className="input-field__form" action="" onSubmit={changeBtn ? updateData : addData}>
          <input placeholder="Enter Student Name" className="input-field__form-input" type="text" name='student' value={inputStudent.student} onChange={(e) => changeHand(e)} />
          <select className="input-field__form-select" name="faculty" id="" value={inputStudent.faculty} onChange={(e) => changeHand(e)}>
            <option className="input-field__form-select--all">All</option>
            <option className="input-field__form-select--business" value="Business">Business</option>
            <option className="input-field__form-select--science" value="Science">Science</option>
            <option className="input-field__form-select--arts" value="Arts">Arts</option>
          </select>
          <button className="input-field__form-button">{changeBtn ? 'Update' : 'Add Data'}</button>
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: 'space-evenly' }}>
        <AllList
          allData={allData}
          setPresentData={setPresentData}
          presentData={presentData}
          setAbsentData={setAbsentData}
          absentData={absentData}
          setInputStudent={setInputStudent}
          setChangeBtn={setChangeBtn}
          setEditableStudent={setEditableStudent}
          setAllData={setAllData}
        />
        <Present
          presentData={presentData}
          setPresentData={setPresentData}
          setAbsentData={setAbsentData}
          absentData={absentData}
        />
        <Absent
          setAbsentData={setAbsentData}
          absentData={absentData}
          presentData={presentData}
          setPresentData={setPresentData}
        />

      </div>
    </>


  );
}

export default App;
