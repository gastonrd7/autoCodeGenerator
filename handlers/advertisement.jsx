let advertisement = [
    {
        type: "onCreation",
        field:'fill_extra_fields',
        model: 'advertisement',
        subscription: new Map(
            [['ENTITY', 'advertisement'],['CREATED', '']]
        )
    },
    {
        type: "onCreation",
        field:'create_posts',
        model: 'advertisement',
        subscription: new Map(
            [['ENTITY', 'advertisement'],['UPDATED1', 'companyId']]
        )
    },
    {
        type: "field",
        model: 'advertisement',
        field: 'engagementVelocityReal',
        subscription: new Map(
            [['ENTITY', 'post'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'engagementVelocity']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        field: 'moneyAvailable',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['UPDATED1', 'moneyEarned']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        field: 'zeroBudgetDt',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['UPDATED1', 'moneyAvailable']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        field: 'moneyEarned',
        subscription: new Map(
            [['ENTITY', 'advertisement'], 
            ['UPDATED1', 'likeCount'], 
            ['UPDATED2', 'linkCount'], 
            ['UPDATED3', 'tagCount'],
            ['UPDATED4', 'sharedCount'],
            ['UPDATED5', 'printCount'],
            ['UPDATED6', 'mentionCount'],
            ['UPDATED7', 'hashtagCount'],
            ['UPDATED8', 'commentCount']]
        ),
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'advertisement',
        field: 'tagCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'tagCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'likeCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'likeCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'sharedCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'sharedCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'linkCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'linkCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'printCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'printCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'mentionCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'mentionCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'hashtagCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'hashtagCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'commentCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'commentCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'notSponsoredTagCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'notSponsoredTagCount']]
        )
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'notSponsoredSharedCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'notSponsoredSharedCount']]
        )
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'notSponsoredLikeCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'notSponsoredLikeCount']]
        )
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'notSponsoredLinkCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'notSponsoredLinkCount']]
        )
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'notSponsoredPrintCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'notSponsoredPrintCount']]
        )
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'notSponsoredMentionCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'notSponsoredMentionCount']]
        )
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'notSponsoredHashtagCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'notSponsoredHashtagCount']]
        )
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'notSponsoredCommentCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'notSponsoredCommentCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'advertisement',
        field: 'facebookTagCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookTagCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'facebookLikeCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookLikeCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'facebookSharedCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookSharedCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'facebookLinkCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookLinkCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'facebookPrintCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookPrintCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'facebookMentionCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookMentionCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'facebookHashtagCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookHashtagCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'facebookCommentCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookCommentCount']]
        ),
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'advertisement',
        field: 'instagramTagCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramTagCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'instagramLikeCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramLikeCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'instagramSharedCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramSharedCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'instagramLinkCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramLinkCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'instagramPrintCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramPrintCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'instagramMentionCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramMentionCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'instagramHashtagCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramHashtagCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'instagramCommentCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramCommentCount']]
        ),
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'advertisement',
        field: 'twitterTagCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterTagCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'twitterLikeCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterLikeCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'twitterSharedCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterSharedCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'twitterLinkCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterLinkCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'twitterPrintCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterPrintCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'twitterMentionCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterMentionCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'twitterHashtagCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterHashtagCount']]
        ),
    },
    {
        type: "field",
        model: 'advertisement',
        templateCount: "readSon-sResource",
        field: 'twitterCommentCount',
        subscription: new Map(
            [['ENTITY', 'post'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterCommentCount']]
        ),
    }
]


module.exports = { 
    advertisement
};