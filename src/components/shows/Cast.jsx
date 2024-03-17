
const Cast = ({ cast }) => {
    return (
        <div>
            {cast.map(item => <div key={item.person.id}>

                <div>
                    <img src={item.person.image ? item.person.image.medium : `/image-not-found.jpeg`} alt={item.person.name} />
                </div>

                <div>
                    {item.person.name} | {item.character.name} {item.voice && '| Voiceover'}
                </div>

            </div>)}
        </div>
    )
}

export default Cast
