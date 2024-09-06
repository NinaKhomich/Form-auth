/* eslint-disable array-callback-return */
import { useState } from 'react';
import Form from '../Form/Form';
import './App.css';
import MainApi from '../../utils/api';

function App() {
  const [isLockedBtn, setIsLockedBtn] = useState(false);
  const api = new MainApi();

  function handleSubmitForm(formValues) {
    setIsLockedBtn(true);
    api
      .getUsers()
      .then(res => {
        console.log(res)
        const currentUser = res.find(item => { return item.email === formValues.email })
        if(currentUser) {
          if(currentUser.password === formValues.password) {
            alert('Аутентификация пройдена')
          } else {
            alert('Неверно указан пароль')
          }
        } else alert('Пользователь не найден')
      })
      .catch((err) => {
        "При авторизации произошла ошибка."
      })
      .finally(() => setIsLockedBtn(false));
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmitForm} isLockedBtn={isLockedBtn} />
    </div>
  );
}

export default App;
