

export const NotePrev = ({title, body}) => {
  return(
    <>
      <div className="notes-prev">
        <p className="notes-prev__title">{title}</p>
        <p className="notes-prev__body">{body}</p>
      </div>
      <hr className="notes__line" />
    </>
  )
}