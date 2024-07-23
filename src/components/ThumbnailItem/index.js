// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, isActiveThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const isActiveThumbnailImage = isActive ? `active` : `thumbnail`

  const onClickGallery = () => {
    isActiveThumbnail(id)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onClickGallery}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={isActiveThumbnailImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
