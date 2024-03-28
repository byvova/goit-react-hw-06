export const SearchBox = ({ setSearch }) => {

    const handlerInput = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div>
            <p>Find contacts by name</p>
            <input type="text" onChange={handlerInput} />
        </div>
    )
}
