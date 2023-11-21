import '../saas/Card.scss'

const Card = ({name, img}) => {
    return (
        <div className="card">
            <p className="card_name">{name}</p>
            <img className="card_img" src={img} alt="pokeImg" />
        </div>
    )
}

export { Card }