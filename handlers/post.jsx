let post = [
    {
        type: "onCreation",
        field:'fill_extra_fields',
        model: 'post',
        subscription: new Map(
            [['ENTITY', 'post'],['CREATED', '']]
        )
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResource",
        field: 'tagCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Tag']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResource",
        field: 'likeCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Like']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResource",
        field: 'sharedCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Shared']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResource",
        field: 'linkCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Link']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResource",
        field: 'printCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Print']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResource",
        field: 'mentionCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Mention']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResource",
        field: 'hashtagCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Hashtag']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResource",
        field: 'commentCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Comment']]
        ),
    },
    {
        type: "field",
        model: 'post',
        field: 'notSponsoredTagCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', '']]
        )
    },
    {
        type: "field",
        model: 'post',
        field: 'notSponsoredSharedCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', '']]
        )
    },
    {
        type: "field",
        model: 'post',
        field: 'notSponsoredLikeCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', '']]
        )
    },
    {
        type: "field",
        model: 'post',
        field: 'notSponsoredLinkCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', '']]
        )
    },
    {
        type: "field",
        model: 'post',
        field: 'notSponsoredPrintCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', '']]
        )
    },
    {
        type: "field",
        model: 'post',
        field: 'notSponsoredMentionCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', '']]
        )
    },
    {
        type: "field",
        model: 'post',
        field: 'notSponsoredHashtagCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', '']]
        )
    },
    {
        type: "field",
        model: 'post',
        field: 'notSponsoredCommentCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', '']]
        )
    },
    {
        type: "field",
        templateCount: "readInsightResourceAndSM",
        model: 'post',
        field: 'facebookTagCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Tag'], ['PLATFORM', 'Facebook']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'facebookLikeCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Like'], ['PLATFORM', 'Facebook']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'facebookSharedCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Shared'], ['PLATFORM', 'Facebook']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'facebookLinkCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Link'], ['PLATFORM', 'Facebook']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'facebookPrintCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Print'], ['PLATFORM', 'Facebook']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'facebookMentionCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Mention'], ['PLATFORM', 'Facebook']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'facebookHashtagCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Hashtag'], ['PLATFORM', 'Facebook']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'facebookCommentCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Comment'], ['PLATFORM', 'Facebook']]
        ),
    },
    {
        type: "field",
        templateCount: "readInsightResourceAndSM",
        model: 'post',
        field: 'instagramTagCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Tag'], ['PLATFORM', 'Instagram']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'instagramLikeCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Like'], ['PLATFORM', 'Instagram']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'instagramSharedCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Shared'], ['PLATFORM', 'Instagram']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'instagramLinkCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Link'], ['PLATFORM', 'Instagram']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'instagramPrintCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Print'], ['PLATFORM', 'Instagram']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'instagramMentionCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Mention'], ['PLATFORM', 'Instagram']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'instagramHashtagCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Hashtag'], ['PLATFORM', 'Instagram']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'instagramCommentCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Comment'], ['PLATFORM', 'Instagram']]
        ),
    },
    {
        type: "field",
        templateCount: "readInsightResourceAndSM",
        model: 'post',
        field: 'twitterTagCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Tag'], ['PLATFORM', 'Twitter']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'twitterLikeCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Like'], ['PLATFORM', 'Twitter']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'twitterSharedCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Shared'], ['PLATFORM', 'Twitter']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'twitterLinkCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Link'], ['PLATFORM', 'Twitter']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'twitterPrintCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Print'], ['PLATFORM', 'Twitter']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'twitterMentionCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Mention'], ['PLATFORM', 'Twitter']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'twitterHashtagCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Hashtag'], ['PLATFORM', 'Twitter']]
        ),
    },
    {
        type: "field",
        model: 'post',
        templateCount: "readInsightResourceAndSM",
        field: 'twitterCommentCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['CREATED', ''], ['REMOVED', ''], ['RESOURCE', 'Comment'], ['PLATFORM', 'Twitter']]
        ),
    }
]


module.exports = { 
    post
};