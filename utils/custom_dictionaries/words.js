const verbs = ['Accept', 'Care', 'Achieve', 'Carry', 'Admit', 'Catch', 'Affect', 'Cause', 'Afford', 'Change', 'Agree', 'Check', 'Allow', 'Choose',
  'Answer', 'Clear', 'Apply', 'Clean', 'Argue', 'Collect', 'Arrange', 'Come', 'Arrive', 'Complain', 'Ask', 'Complete', 'Avoid', 'Consist',
  'Become', 'Contain', 'Begin', 'Continue', 'Believe', 'Contribute', 'Build', 'Control', 'Buy', 'Correct', 'Call', 'Cost', 'Could',
  'Enjoy', 'Create', 'Exist', 'Cross', 'Expect', 'Cut', 'Experience', 'Damage', 'Explain', 'Deal', 'Express', 'Deliver', 'Face', 'Deny',
  'Fall', 'Depend', 'Feel', 'Describe', 'Find', 'Destroy', 'Finish', 'Develop', 'Fly', 'Disappear', 'Follow', 'Discover', 'Forget', 'Do',
  'Forgive', 'Dress', 'Form', 'Drink', 'Get', 'Drive', 'Give', 'Eat', 'Go', 'Encourage', 'Grow', 'Happen', 'Learn', 'Have', 'Leave', 'Hear', 'Lend',
  'Help', 'Like', 'Hide', 'Limit', 'Hold', 'Listen', 'Hope', 'Live', 'Identity', 'Look', 'Imagine', 'Love', 'Improve', 'Make', 'Increase',
  'Matter', 'Influence', 'Mean', 'Inform', 'Measure', 'Invite', 'Meet', 'Involve', 'Mention', 'Join', 'Mind', 'Keep', 'Move', 'Know', 'Must',
  'Last', 'Need', 'Laugh', 'Offer', 'Open', 'Regard', 'Order', 'Relate', 'Own', 'Release', 'Pay', 'Remember', 'Perform', 'Remove', 'Play', 'Repeat',
  'Point', 'Replace', 'Prefer', 'Reply', 'Prepare', 'Report', 'Press', 'Result', 'Prevent', 'Return', 'Produce', 'Reveal', 'Protect', 'Rise',
  'Provide', 'Run', 'Push', 'Save', 'Reach', 'Say', 'Read', 'See', 'Receive', 'Sell', 'Record', 'Send', 'Reduce', 'Set', 'Share', 'Tell', 'Shoot',
  'Tend', 'Show', 'Think', 'Sing', 'Throw', 'Sit', 'Touch', 'Sleep', 'Train', 'Smile', 'Travel', 'Sound', 'Treat', 'Speak', 'Try', 'Stand',
  'Turn', 'Start', 'Understand', 'State', 'Use', 'Study', 'Visit', 'Succeed', 'Wait', 'Suggest', 'Want', 'Supply', 'Walk', 'Suppose', 'Watch',
  'Survive', 'Win', 'Take', 'Wonder', 'Talk', 'Write'
];

const nouns = ['Painting', 'Grass', 'Pencil', 'Guitar', 'Piano', 'Ambulance', 'Pillow', 'Helicopter', 'Helmet', 'Plastic', 'Balloon',
  'Horse', 'Queen', 'Battery', 'Raincoat', 'Refrigerator', 'Iron', 'Rocket', 'Camera', 'Jewellery', 'Candle',
  'Car', 'Caravan', 'Scooter', 'Carpet', 'Shampoo', 'Shoe', 'Kite', 'Knife', 'Spoon', 'Crayon', 'Lamp', 'Leather',
  'Lighter', 'Telephone', 'Television', 'Tent', 'Lock', 'Toothbrush', 'Machine', 'Dress', 'Magazine',
  'Truck', 'Umbrella', 'Match', 'Van', 'Microphone', 'Vase', 'Motorcycle', 'Wall', 'Nail', 'Whale',
  'Napkin', 'Wire', 'Yacht', 'Flag', 'Furniture', 'Glass'];


const adverbs = ['abnormally', 'absentmindedly', 'accidentally', 'actually', 'adventurously', 'afterwards', 'almost', 'always', 'annually', 'anxiously', 'arrogantly',
  'awkwardly', 'bashfully', 'beautifully', 'bitterly', 'bleakly', 'blindly', 'blissfully', 'boastfully', 'boldly', 'bravely', 'briefly', 'brightly', 'briskly',
  'broadly', 'busily', 'calmly', 'carefully', 'carelessly', 'cautiously', 'certainly', 'cheerfully', 'clearly', 'cleverly', 'closely',
  'coaxingly', 'colorfully', 'commonly', 'continually', 'coolly', 'correctly', 'courageously', 'crossly', 'cruelly', 'curiously', 'daily', 'daintily',
  'dearly', 'deceivingly', 'deeply', 'defiantly', 'deliberately', 'delightfully', 'diligently',
  'dimly','doubtfully','dreamily','easily','elegantly',  'energetically', 'enormously',  'enthusiastically','equally',  'especially',
  'even',  'evenly','eventually','exactly','excitedly','extremely','fairly','faithfully','famously','far','fast','fatally','ferociously','fervently','fiercely',
'fondly','foolishly','fortunately','frankly','frantically','freely','frenetically','frightfully',
'fully','furiously','generally','generously','gently','gladly','gleefully','gracefully','gratefully','greatly','greedily',
'happily','hastily','healthily','heavily','helpfully','helplessly','highly','honestly','hopelessly','hourly',
'hungrily','immediately','innocently','inquisitively','instantly','intensely','intently','interestingly','inwardly','irritably',
'jaggedly','jealously','jovially','joyfully','joyously','jubilantly','judgmentally','justly','keenly','kiddingly',
'kindheartedly',
'kindly',
'knavishly',
'knowingly',
'knowledgeably',
'kookily',
'lazily',
'les',
'lightly',
'likely',
'limply',
'lively',
'loftily',
'longingly',
'loosely',
'loudly',
'lovingly',
'loyally',
'madly',
'majestically',
'meaningfully',
'mechanically',
'merrily',
'miserably',
'mockingly',
'monthly',
'more',
'mortally',
'mostly',
'mysteriously',
'naturally',
'hopelessly',
'hourly',
'hungrily',
'immediately',
'innocently',
'inquisitively',
'instantly',
'intensely',
'intently',
'interestingly',
'inwardly',
'irritably',
'jaggedly',
'jealously',
'jovially',
'joyfully',
'joyously',
'jubilantly',
'judgmentally',
'justly',
'keenly',
'kiddingly',
'kindheartedly',
'kindly',
'knavishly',
'knowingly',
'knowledgeably',
'kookily',
'lazily',
'less',
'lightly',
'likely',
'limply',
'lively',
'loftily',
'longingly',
'loosely',
'loudly',
'lovingly',
'loyally',
'madly',
'majestically',
'meaningfully',
'mechanically',
'merrily',
'miserably',
'mockingly',
'monthly',
'more',
'mortally',
'mostly',
'mysteriously',
'naturally',
'nearly',
'neatly',
'nervously',
'never',
'nicely',
'noisily',
'not',
'obediently',
'obnoxiously',
'oddly',
'offensively',
'officially',
'often',
'only',
'openly',
'optimistically',
'overconfidently',
'painfully',
'partially',
'patiently',
'perfectly',
'physically',
'playfully',
'politely',
'poorly',
'positively',
'potentially',
'powerfully',
'promptly',
'properly',
'punctually',
'quaintly',
'queasily',
'queerly',
'questionably',
'quicker',
'quickly',
'quietly',
'quirkily',
'quizzically',
'randomly',
'rapidly',
'rarely',
'readily',
'really',
'reassuringly',
'recklessly',
'regularly',
'reluctantly',
'repeatedly',
'reproachfully',
'restfully',
'righteously',
'rightfully',
'rigidly',
'roughly',
'rudely',
'safely',
'scarcely',
'scarily',
'searchingly',
'sedately',
'seemingly',
'seldom',
'selfishly',
'separately',
'seriously',
'shakily',
'sharply',
'sheepishly',
'shrilly',
'shyly',
'silently',
'sleepily',
'slowly',
'smoothly',
'softly',
'solemnly',
'solidly',
'sometimes',
'soon',
'speedily',
'stealthily',
'sternly',
'strictly',
'successfully',
'suddenly',
'supposedly',
'surprisingly',
'suspiciously',
'sweetly',
'swiftly',
'sympathetically',
'tenderly',
'tensely',
'terribly',
'thankfully',
'thoroughly',
'thoughtfully',
'tightly',
'tomorrow',
'too',
'tremendously',
'triumphantly',
'truly',
'truthfully',
'rightfully',
'scarcely',
'searchingly',
'sedately',
'seemingly',
'selfishly',
'separately',
'seriously',
'sheepishly',
'smoothly',
'solemnly',
'sometimes',
'speedily',
'stealthily',
'successfully',
'suddenly',
'supposedly',
'surprisingly',
'suspiciously',
'sympathetically',
'tenderly',
'thankfully',
'thoroughly',
'thoughtfully',
'tomorrow',
'tremendously',
'triumphantly',
'truthfully',
'ultimately',
'unabashedly',
'unaccountably',
'unbearably',
'unethically',
'unexpectedly',
'unfortunately',
'unimpressively',
'unnaturally',
'unnecessarily',
'upbeat',
'upright',
'upside-down',
  'upward',
  'urgently',
  'usefully',
  'uselessly',
  'usually', 'utterly', 'vacantly', 'vaguely', 'vainly', 'valiantly', 'vastly', 'verbally',
  'very', 'viciously', 'victoriously', 'violently', 'vivaciously', 'voluntarily', 'warmly', 'weakly', 'wearily', 'well', 'wetly', 'wholly', 'wildly', 'willfully',
  'wisely', 'woefully', 'wonderfully', 'worriedly', 'wrongly', 'yawningly', 'yearly', 'yearningly', 'yesterday', 'yieldingly', 'youthfully', 'zealously', 'zestfully', 'zestily'];

module.exports = {
  verbs,
  nouns,
  adverbs
}