
import ActionCard from './ActionCard.jsx'

const ActorsGrid = ({ actors }) => {
    return (
        <div>
            {actors.map(data => (
                <ActionCard
                    key={data.person.id}
                    name={data.person.name}
                    country={data.person.country ? data.person.country.name : null}
                    gender={data.person.gender}
                    birthday={data.person.birthday?data.person.birthday:null}
                    deathday={data.person.deathday?data.person.deathday:null}
                    image={data.person.image ? data.person.image.medium : "./image-not-found.jpeg"}
                />
            ))}
        </div>
    )
}

export default ActorsGrid
