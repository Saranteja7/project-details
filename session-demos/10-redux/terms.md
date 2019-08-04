// Actions - objects with type of action
{
    type: 'SELECTED_ARTICLE',
    payload: {
        id: 123
    }
}

{
    type: 'INCREMENT'
}

const incrementAC = () => ({
    type: 'INCREMENT'
})

// reducer gets
{
    type: 'INCREMENT'
},
{
    count: 0
}

{
    count: 1
}

// view uses store.subscribe() to get notified of store change