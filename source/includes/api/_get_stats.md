## GET `/stats`

Get your statics key values

```ruby--Rails
require 'rest-client'

RestClient::Request.execute method: :get,
  url: 'https://api.diduenjoy.com/api/v1/stats',
  user: 'PUT-YOUR-API-KEY-HERE'

# example with filters

RestClient::Request.execute method: :get,
  url: 'https://api.diduenjoy.com/api/v1/stats?filter[surveys][0]=Paris%20Boutique&filter[segments][city][0]=paris&filter[start_date]=Fri%20Oct%2011%202019%2002:00:00%20GMT+0200%20(Central%20European%20Summer%20Time)',
  user: 'PUT-YOUR-API-KEY-HERE'

# => {
#   "total": 74,
#   "score": 6.594594594594595,
#   "promoter_count": 31,
#   "passiv_count": 17,
#   "detractor_count": 26,
#   "nps": 7,
#   "sent": 120
#}
```

### attributes

attribute          | description
------------- | -------------
__total__<br>_integer_ | total number of found feedbacks
__score__<br>_float_ | average score
__promoter_count__<br>_integer_ | number of promoter profiles
__passiv_count__<br>_integer_ | number of passiv profiles
__detractor_count__<br>_integer_ | number of detractor profiles
__nps__<br>_integer_ | net promoter score, integer varying from -100 to +100 depending on the number of promoters and detractors
__sent__<br>_integer_ | number of sent surveys

### optional parameters "filters"

parameter          | description
------------- |-------------
__surveys__<br>_array_  | filter over feedback of the indicated surveys
__segments__<br>_array_ | associative array of segments, where segments names are the keys and the values are the. To filter over feedbacks having the specified segments name with the corresponding values
__start_date__<br>_date_ | filter on feedback answered after the specified date
__end_date__<br>_date_ | filter on feedback answered before the specified date
