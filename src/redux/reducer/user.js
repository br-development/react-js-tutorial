let initialState = {user: null}

export default function (state = initialState, action) {
    if (action.type === "changeUser") {
        const {user} = action.payload;
        return {
            // on déstructure le state précédent, c'est à dire que l'on
            // copie toutes ses propriété dans notre nouvel objet
            ...state,
            user: user
        };
    }
    // sinon on retourne le state sans le changer
    return state;
}