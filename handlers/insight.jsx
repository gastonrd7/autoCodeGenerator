let insight = [
    {
        type: "onCreation",
        field:'fill_extra_fields',
        model: 'insight',
        subscription: new Map(
            [['ENTITY', 'insight'],['CREATED', '']]
        )
    }
]


module.exports = { 
    insight
};