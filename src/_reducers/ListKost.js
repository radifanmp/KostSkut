initialState = {
    isListKost: false,
    onLogin: false,
    thisToken: 'Ini Token Nya Broo',
    noPage: 0,
    dataItem: '',
    isModalVisible: false,
    isLoading: true
}

const ListKost = (state = initialState, action) => {
    switch (action.type){

        //fetch data awal
        case 'GET_HOUSES':
            return{
                ...state,
                isLoading: true,
            }

        case 'GET_HOUSES_PENDING':
            return{
                ...state,
                isLoading: true,
            }

        case 'GET_HOUSES_FULFILLED':
            return{
                ...state,
                dataItem: action.payload.data,
                isLoading: false,
            }

        case 'GET_HOUSES_REJECTED':
            return{
                ...state,
                isListKost: false,
                error: payload.message
            }
    }
}

export default ListKost