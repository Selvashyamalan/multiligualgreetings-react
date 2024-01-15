import './index.css'

const Tabs = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {id, buttonText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeBtn = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-btn ${activeBtn}`}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
