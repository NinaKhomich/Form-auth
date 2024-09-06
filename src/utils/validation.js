import { useEffect, useState } from "react"


const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isEmail, setIsEmail] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      // eslint-disable-next-line default-case
      switch (validation) {
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'isEmail':
          const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
          re.test(String(value).toLowerCase())
            ? setIsEmail(false)
            : setIsEmail(true);
          break;
        default:
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if(isEmpty || isEmail) {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
    }
  }, [isEmpty, isEmail]);

  return {
    isEmpty,
    isEmail,
    isInputValid
  }
}

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onBlur = (e) => {
    setIsDirty(true);
  }

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    ...valid
  }
}

export default useInput;
