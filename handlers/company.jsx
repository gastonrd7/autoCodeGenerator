let company = [
    {
        type: "onCreation",
        field:'fill_extra_fields',
        model: 'company',
        subscription: new Map(
            [['ENTITY', 'company'],['CREATED', '']]
        )
    },
    {
        type: "field",
        model: 'company',
        field: 'budgetAvailable',
        subscription: new Map(
            [['ENTITY', 'campaign'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'budgetAvailable']]
        ),
    },
    {
        type: "field",
        model: 'company',
        field: 'budgetFreezed',
        subscription: new Map(
            [['ENTITY', 'campaign'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'budgetFreezed']]
        ),
    },
    {
        type: "field",
        model: 'company',
        field: 'budgetSpent',
        subscription: new Map(
            [['ENTITY', 'campaign'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'budgetSpent']]
        ),
    },
    {
        type: "field",
        model: 'company',
        field: 'campaignsDraftCount',
        subscription: new Map(
            [['ENTITY', 'campaign'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'status']]
        ),
    },
    {
        type: "field",
        model: 'company',
        field: 'campaignsFinishedCount',
        subscription: new Map(
            [['ENTITY', 'campaign'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'status']]
        ),
    },
    {
        type: "field",
        model: 'company',
        field: 'campaignsOnGoingCount',
        subscription: new Map(
            [['ENTITY', 'campaign'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'status']]
        ),
    },
    {
        type: "field",
        model: 'company',
        field: 'campaignsStoppedCount',
        subscription: new Map(
            [['ENTITY', 'campaign'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'status']]
        ),
    },
    {
        type: "field",
        model: 'company',
        field: 'campaignsWaitingForApprovalCount',
        subscription: new Map(
            [['ENTITY', 'campaign'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'status']]
        ),
    },
    {
        type: "field",
        model: 'company',
        field: 'campaignsWaitingForPaymentCount',
        subscription: new Map(
            [['ENTITY', 'campaign'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'status']]
        ),
    },
    {
        type: "field",
        model: 'company',
        field: 'investment',
        subscription: new Map(
            [['ENTITY', 'campaign'],['CREATED', ''], ['UPDATED1', 'investment']]
        ),
    },
    {
        type: "field",
        model: 'company',
        field: 'moneyPerEngagementExpected',
        subscription: new Map(
            [['ENTITY', 'campaign'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'moneyPerEngagementExpected']]
        ),
    },
    {
        type: "field",
        model: 'company',
        field: 'moneyPerEngagementReal',
        subscription: new Map(
            [['ENTITY', 'campaign'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'moneyPerEngagementReal']]
        ),
    },
]


module.exports = { 
    company
};