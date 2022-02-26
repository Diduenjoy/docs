## GET `/answer_sets`

List all your answer_sets (feedback)

```ruby--Rails
require 'rest-client'

RestClient::Request.execute method: :get,
  url: 'https://api.diduenjoy.com/api/v1/answer_sets',
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
__segments__<br>_hash { string: string&#124;array[string] }_ | custom data associated with the answer_set
__tags__<br>_hash { string: string&#124;array[string] }_ | custom tags associated with the answer_set
__resolved__<br>_boolean_ | equal "true" if the feedback has been set to resolved
__dispatch_sent_at__<br>_datetime_  | sending date of the feedback
__completed_at__<br>_datetime_  | answer completion date

### optional parameters "filter"

parameter          | description
------------- |-------------
__completed__<br>_boolean_ | filter over answer_sets of the indicated completed status
__survey_id__<br>_array_  | filter over answer_sets of the indicated surveys
__would_recommend__<br>_array_  | filter over answer_sets of the indicated ratings
__start_date__<br>_date_ | filter over answer_sets answered after the specified date
__end_date__<br>_date_ | filter over answer_sets answered before the specified date
__start_sending_date__<br>_date_ | filter over answer_sets sent after the specified sending date
__end_sending_date__<br>_date_ | filter over answer_sets sent before the specified sending date

### relationships

relationship          | description
------------------------------ | -------------
__client__  | answer_set responder
__survey_language__  | answer_set survey_language
__choices__  | responder choices
__messages__ | feedback messages (from client and company)