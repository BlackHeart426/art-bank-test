import React, {useEffect, useState} from 'react';
import './App.scss';
import Axios from 'axios'

interface IDataUser {
  CARD: string | null,
  LASTNAME: string | null,
  FIRSTNAME: string | null,
  PATRONYMIC: string | null,
  IDPERSON: string | null,
  STATUSNAME: string | null,
  ACC1NUM: string | null,
  CARDTEMPLNAME: string | null,
  ORGNAMESHORT: string | null,
  PERSONTYPENAME: string | null,
  CURRNAME: string | null,
  IDCARD: string | null,
  BIRTHDATE: string | null,
  DOCSERIES: string | null,
  DOCNUM: string | null,
  IDTASKAUTHSTATUS: string | null,
  DOCTYPENAME: string | null,
}

export const dataUser = {
  CARD: null,
  LASTNAME: null,
  FIRSTNAME: null,
  PATRONYMIC: null,
  IDPERSON: null,
  STATUSNAME: null,
  ACC1NUM: null,
  CARDTEMPLNAME: null,
  ORGNAMESHORT: null,
  PERSONTYPENAME: null,
  CURRNAME: null,
  IDCARD: null,
  BIRTHDATE: null,
  DOCSERIES: null,
  DOCNUM: null,
  IDTASKAUTHSTATUS: null,
  DOCTYPENAME: null,
}

function App() {
  const [metaData, setMetaData] = useState<string[]>([])
  const [dataUsers, setDataUsers] = useState<any>([])
  const [showAddUser, setShowAddUser] = useState<boolean>(false)
  const [dataSaveUser, setDataSaveUser] = useState<IDataUser>(dataUser)

  useEffect(() => {
    getData()
  },[])

  const onRemoveUser = (indexUser: number) => {
    setDataUsers(dataUsers.filter((item: any, index: number) => index !== indexUser))
  }

  const onShowAddUser = () => {
    setShowAddUser(prevState => !prevState)
  }

  const onSaveDataUser = () => {
    setShowAddUser(prevState => !prevState)
    setDataUsers([...dataUsers, dataSaveUser])
    console.log(dataSaveUser)
  }

  const handleSaveInput = (event: any) => {
    setDataSaveUser({...dataSaveUser, [event.currentTarget.id]: event.currentTarget.value})
    console.log(event.currentTarget.id)
    console.log(event.currentTarget.value)
  }

  const getData = async () => {
    try {
      const response = await Axios.get('/data')
      setMetaData(response.data.metaData.map((item: { name: string} ) => item.name))
      const dataUsersArr = response.data.rows.map((item: any) => {
        return item.reduce((obj: any, value: any, index: any) =>
            ({...obj, [response.data.metaData[index].name]: value}), {})
      })
      setDataUsers(dataUsersArr)
    } catch (e) {
      console.log(e)
    }
  }

  return (
      <div className="App">
        <div className="App-wrapper">
          <div className="App-container">
            <div className="App-title">
              <h4>Данные по клиентам</h4>
            </div>
            <div className="App-action">
              <a className="waves-effect waves-light btn" onClick={onShowAddUser}>Добавить клиента</a>
            </div>
            <div className="App-add-user-content" style={showAddUser ? {display: "block"} : {display: "none"}}>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s3">
                      <input id="CARD" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="CARD">CARD</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="LASTNAME" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="LASTNAME">LASTNAME</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="FIRSTNAME" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="FIRSTNAME">FIRSTNAME</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="PATRONYMIC" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="PATRONYMIC">PATRONYMIC</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="IDPERSON" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="IDPERSON">IDPERSON</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="STATUSNAME" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="STATUSNAME">STATUSNAME</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="ACC1NUM" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="ACC1NUM">ACC1NUM</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="CARDTEMPLNAME" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="CARDTEMPLNAME">CARDTEMPLNAME</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="ORGNAMESHORT" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="ORGNAMESHORT">ORGNAMESHORT</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="PERSONTYPENAME" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="PERSONTYPENAME">PERSONTYPENAME</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="CURRNAME" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="CURRNAME">CURRNAME</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="IDCARD" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="IDCARD">IDCARD</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="BIRTHDATE" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="BIRTHDATE">BIRTHDATE</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="DOCSERIES" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="DOCSERIES">DOCSERIES</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="DOCNUM" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="DOCNUM">DOCNUM</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="IDTASKAUTHSTATUS" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="IDTASKAUTHSTATUS">IDTASKAUTHSTATUS</label>
                    </div>
                    <div className="input-field col s3">
                      <input id="DOCTYPENAME" type="text" className="validate" onBlur={handleSaveInput}/>
                        <label htmlFor="DOCTYPENAME">DOCTYPENAME</label>
                    </div>
                    <div className="App-action">
                      <a className="waves-effect waves-light btn" onClick={onSaveDataUser}>Сохранить клиента</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="App-table">
              <table className="striped">
                <thead>
                <tr>
                  {metaData.map((item: any, index: number) => (
                      <th key={index}>{item}</th>
                  ))}
                  <th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                {dataUsers.map((dataUser: any, dataUserIndex: number) => (
                    <tr key={dataUserIndex} className="selected-user">
                      {Object.values(dataUser).map((item: any, itemIndex: number) => (
                          <td  key={itemIndex}>{( typeof item === "object") ?  '' :  item }</td>
                      ))}
                      <td>
                        <a
                            onClick={() => onRemoveUser(dataUserIndex)}
                            className="waves-effect waves-light btn"
                        >
                          Удалить
                        </a>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
  );
}

export default App;
