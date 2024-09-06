import useInput from '../../utils/validation';
import './Form.css';

const Form = ({
  onSubmit,
  isLockedBtn
}) => {
  const email = useInput('', {isEmpty: true, isEmail: true});
  const password = useInput('', {isEmpty: true});

  const formValues = {
    email: email.value,
    password: password.value,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <h1 className="form__head">Войти в аккаунт</h1>
      <label htmlFor="user-email" className="form__label">
        <input
          className="form__field"
          type="E-mail"
          name="email"
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          placeholder="Email"
        />
        <span className={`form__field-error ${
          email.isDirty && (email.isEmpty || email.isEmail) ? "form__field-error_visible" : ""
        }`}>Введите корректный Email</span>
      </label>
      <label htmlFor="user-password" className="form__label">
        <input
          type="password"
          className="form__field"
          name="password"
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          placeholder="Пароль"
        />
        <span className={`form__field-error ${
          password.isDirty && password.isEmpty ? "form__field-error_visible" : ""
        }`}>Введите пароль</span>
      </label>
      <button 
        className="form__submit-btn"
        type="submit"
        disabled={!email.isInputValid || !password.isInputValid || (isLockedBtn && 'disabled')}>
        Войти
      </button>
    </form>
  );
};

export default Form;