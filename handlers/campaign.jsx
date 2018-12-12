let campaign = [
    {
        type: "onCreation",
        field:'fill_extra_fields',
        model: 'campaign',
        subscription: new Map(
            [['ENTITY', 'campaign'],['CREATED', '']]
        )
    },
    {
        model: 'campaign',
        field: 'budgetFreezed',
        subscription: new Map(
            [['ENTITY', 'advertisement'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'moneyAvailable']]
        )
    },
    {
        model: 'campaign',
        field: 'budgetAvailable',
        subscription: new Map(
            [['ENTITY', 'campaign'], ['UPDATED1', 'budgetFreezed'], ['UPDATED2', 'budgetSpent']]
        )
    },
    {
        model: 'campaign',
        field: 'budgetSpent',
        subscription: new Map(
            [['ENTITY', 'advertisement'],['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'moneyEarned']]
        )
    },
    {
        model: 'campaign',
        field: 'engagementFacebook',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'companyId']]
        )
    },
    {
        model: 'campaign',
        field: 'engagementInstagram',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'companyId']]
        )
    },
    {
        model: 'campaign',
        field: 'engagementTwitter',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'companyId']]
        )
    },
    {
        model: 'campaign',
        field: 'tagCount',
        templateCount: "readSon-sResource",
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'tagCount']]
        )
    },
    {
        model: 'campaign',
        field: 'likeCount',
        templateCount: "readSon-sResource",
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'likeCount']]
        )
    },
    {
        model: 'campaign',
        field: 'sharedCount',
        templateCount: "readSon-sResource",
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'sharedCount']]
        )
    },
    {
        model: 'campaign',
        field: 'linkCount',
        templateCount: "readSon-sResource",
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'linkCount']]
        )
    },
    {
        model: 'campaign',
        field: 'printCount',
        templateCount: "readSon-sResource",
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'printCount']]
        )
    },
    {
        model: 'campaign',
        field: 'mentionCount',
        templateCount: "readSon-sResource",
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'mentionCount']]
        )
    },
    {
        model: 'campaign',
        field: 'hashtagCount',
        templateCount: "readSon-sResource",
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'hashtagCount']]
        )
    },
    {
        model: 'campaign',
        field: 'commentCount',
        templateCount: "readSon-sResource",
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'commentCount']]
        )
    },
    {
        model: 'campaign',
        field: 'engagementNotSponsored',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], 
            ['UPDATED1', 'notSponsoredTagCount'],
            ['UPDATED2', 'notSponsoredLikeCount'],
            ['UPDATED3', 'notSponsoredSharedCount'],
            ['UPDATED4', 'notSponsoredCommentCount'],
            ['UPDATED5', 'notSponsoredHashtagCount'],
            ['UPDATED6', 'notSponsoredMentionCount'],
            ['UPDATED7', 'notSponsoredPrintCount'],
            ['UPDATED8', 'notSponsoredLinkCount']
        ]
        )
    },
    {
        model: 'campaign',
        field: 'moneyPerEngagementReal',
        subscription: new Map(
        )
    },
    {
        model: 'campaign',
        field: 'engagementReal',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'companyId']]
        )
    },
    {
        model: 'campaign',
        field: 'engagementVelocityReal',
        subscription: new Map(
        )
    },
    {
        model: 'campaign',
        field: 'forecastDays',
        subscription: new Map(
        )
    },
    {
        model: 'campaign',
        field: 'influencersScope',
        subscription: new Map(
            [['ENTITY', 'campaign'], ['CREATED', '']]
        )
    },
    {
        model: 'campaign',
        field: 'influencerTotalHistory',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'companyId']]
        )
    },
    {
        model: 'campaign',
        field: 'engagementTotalHistory',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'companyId']]
        )
    },
    {
        model: 'campaign',
        field: 'engagementNotSponsoredTotalHistory',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'companyId']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'facebookLikeCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookLikeCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'facebookLinkCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookLinkCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'facebookTagCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookTagCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'facebookSharedCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookSharedCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'facebookMentionCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookMentionCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'facebookHashtagCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookHashtagCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'facebookPrintCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookPrintCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'facebookCommentCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'facebookCommentCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'twitterLikeCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterLikeCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'twitterLinkCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterLinkCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'twitterTagCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterTagCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'twitterSharedCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterSharedCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'twitterMentionCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterMentionCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'twitterHashtagCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterHashtagCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'twitterPrintCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterPrintCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'twitterCommentCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'twitterCommentCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'instagramLikeCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramLikeCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'instagramLinkCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramLinkCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'instagramTagCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramTagCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'instagramSharedCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramSharedCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'instagramMentionCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramMentionCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'instagramHashtagCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramHashtagCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'instagramPrintCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramPrintCount']]
        )
    },
    {
        type: "field",
        templateCount: "readSon-sResource",
        model: 'campaign',
        field: 'instagramCommentCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', ''], ['UPDATED1', 'instagramCommentCount']]
        )
    },
    {
        model: 'campaign',
        field: 'engagementMaleInfluencer',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['REMOVED', ''],  ['UPDATED1', 'personGenre']]
        )
    },
    {
        model: 'campaign',
        field: 'engagementFemaleInfluencer',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['REMOVED', ''],  ['UPDATED1', 'personGenre']]
        )
    },
    {
        model: 'campaign',
        field: 'engagementMaleInfluenced',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'campaignId']]
        )
    },
    {
        model: 'campaign',
        field: 'engagementFemaleInfluenced',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'campaignId']]
        )
    },
    {
        model: 'campaign',
        field: 'facebookMaleInfluencerCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['REMOVED', ''],  ['UPDATED1', 'personGenre']]
        )
    },
    {
        model: 'campaign',
        field: 'facebookFemaleInfluencerCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['REMOVED', ''],  ['UPDATED1', 'personGenre']]
        )
    },
    {
        model: 'campaign',
        field: 'facebookMaleInfluencedCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'campaignId']]
        )
    },
    {
        model: 'campaign',
        field: 'facebookFemaleInfluencedCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'campaignId']]
        )
    },
    {
        model: 'campaign',
        field: 'twitterMaleInfluencerCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['REMOVED', ''],  ['UPDATED1', 'personGenre']]
        )
    },
    {
        model: 'campaign',
        field: 'twitterFemaleInfluencerCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['REMOVED', ''],  ['UPDATED1', 'personGenre']]
        )
    },
    {
        model: 'campaign',
        field: 'twitterMaleInfluencedCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'campaignId']]
        )
    },
    {
        model: 'campaign',
        field: 'twitterFemaleInfluencedCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'campaignId']]
        )
    },
    {
        model: 'campaign',
        field: 'instagramMaleInfluencerCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['REMOVED', ''],  ['UPDATED1', 'personGenre']]
        )
    },
    {
        model: 'campaign',
        field: 'instagramFemaleInfluencerCount',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['REMOVED', ''],  ['UPDATED1', 'personGenre']]
        )
    },
    {
        model: 'campaign',
        field: 'instagramMaleInfluencedCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'campaignId']]
        )
    },
    {
        model: 'campaign',
        field: 'instagramFemaleInfluencedCount',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'campaignId']]
        )
    },
    {
        model: 'campaign',
        field: 'facebookInfluencersCardinal',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', '']]
        )
    },
    {
        model: 'campaign',
        field: 'twitterInfluencersCardinal',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', '']]
        )
    },
    {
        model: 'campaign',
        field: 'instagramInfluencersCardinal',
        subscription: new Map(
            [['ENTITY', 'advertisement'], ['CREATED', ''], ['REMOVED', '']]
        )
    },
    {
        model: 'campaign',
        field: 'facebookInfluencedsCardinal',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'campaignId']]
        )
    },
    {
        model: 'campaign',
        field: 'twitterInfluencedsCardinal',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'campaignId']]
        )
    },
    {
        model: 'campaign',
        field: 'instagramInfluencedsCardinal',
        subscription: new Map(
            [['ENTITY', 'insight'], ['REMOVED', ''], ['UPDATED1', 'campaignId']]
        )
    }
]


module.exports = { 
    campaign
};