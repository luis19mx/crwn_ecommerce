import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="group__input" onChange={handleChange} {...otherProps} />
    {label && (
      <label className={`group__label ${otherProps.value.length && 'shrink'} `}>
        {label}
      </label>
    )}
  </div>
)

export default FormInput
