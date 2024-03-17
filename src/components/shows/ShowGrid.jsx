
import ShowCard from "./ShowCard"

const ShowGrid = ({ shows }) => {
    return (
        <div>
            {shows.map(data => (
                <ShowCard key={data.show.id}
                    name={data.show.name}
                    image={data.show.image ? data.show.image.medium : "./image-not-found.jpeg"}
                    summary={data.show.summary} id={data.show.id}
                />
            ))}
        </div>
    )
}

export default ShowGrid
