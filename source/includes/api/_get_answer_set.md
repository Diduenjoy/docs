## GET `/answer_sets/:id`

Get a single answer_set


```ruby--Rails
require 'rest-client'

answer_set_id = 'PUT-YOUR-ANSWER_SET-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/answer_sets/#{answer_set_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__created_at__<br>_datetime_  | answer_set creation date
__updated_at__<br>_datetime_  | answer_set last modification date
__comment__<br>_string_ | responder comment
__completed__<br>_boolean_ | equal "true" if the responder completed all your survey pages else "false"
__would_recommend__<br>_integer_ | responder recommendation note
__segments__<br>_hash { string: string&#124;array[string] }_ | custom data associated with the survey
__tags__<br>_hash { string: string&#124;array[string] }_ | custom tags associated with the answer_set
__resolved__<br>_boolean_ | equal "true" if the feedback has been set to resolved

### relationships

relationship          | description
------------------------------ | -------------
__client__  | answer_set responder
__survey_language__  | answer_set survey_language
__choices__  | responder choices