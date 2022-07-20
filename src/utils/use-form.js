/**
 * useFormElement Hook.
 *
 */
const useForm = () => {
  const entities = []

  const addToForm = function(ref, validation) {
    entities.push(ref)
  }

  return {
    addToForm,
    onSubmit: fn => {
      return formEvent => {
        formEvent.preventDefault()
        console.log('entities', entities)
        const data = entities.reduce((formValues, current) => {
          console.log('current', typeof current)
          if (!current) {
            return formValues
          } else if (
            current &&
            typeof current.getValue === 'function' &&
            typeof current.getName === 'function'
          ) {
            formValues[current.getName()] = current.getValue()
          } else if (current.type === 'checkbox') {
            formValues[current.name] = current.checked
          } else if (current.type === 'radio') {
            if (current.checked) {
              formValues[current.name] = current.value
            }
          } else {
            formValues[current.name] = current.value
          }

          return formValues
        }, {})

        fn(data)
      }
    },
  }
}

export default useForm
