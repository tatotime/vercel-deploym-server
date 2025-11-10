const user = {
    name: 'Christina L',
    isAuth: false
}

let newCharacter = {
    name: 'Adventurer',
    class: '',
    level: 1,
    subclass: '',
    species: '',
    background: '',
    feats: []
}

function CharacterCreationBar()
{
    return (
        <>
        <h1>Class</h1>
        <h1>Species</h1>
        <h1>Background</h1>
        <h1>Feats</h1>
        <h1>Equipment</h1>
        <h1>Extra</h1>
        </>
    );
}

function selectClass() {
    const [class_name, selectClass] = useState();

    function handleSelectClass() {
        selectClass(class_name);
    }

    return (
        <button className="set_class_button">
        Select {class_name}
        </button>
    );
}

function ClassesComponent() {
    return (
        <div className="classes-component">
            <h1>Class Selection</h1>
            < SelectClass />
        </div>
    );
}