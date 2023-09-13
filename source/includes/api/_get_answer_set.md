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
__status__<br>_string_ | status of the answer set. Possible values: <b>live</b> or <b>deleted</b>
__would_recommend__<br>_integer_ | responder recommendation note
__segments__<br>_hash { string: string&#124;array[string] }_ | custom data associated with the answer_set
__tags__<br>_hash { string: string&#124;array[string] }_ | custom tags associated with the answer_set
__root_causes__<br>_hash { string: string&#124;array[string] }_ | custom root causes associated with the answer_set
__action_taken__<br>_hash { string: string&#124;array[string] }_ | custom action taken associated with the answer_set
__resolved__<br>_boolean_ | equal "true" if the feedback has been set to resolved
__dispatch_sent_at__<br>_datetime_  | sending date of the feedback
__completed_at__<br>_datetime_  | answer completion date
__last_opening_date__<br>_datetime_ | last opening date of the answer_set
__first_resolution_date__<br>_datetime_ | date of the first resolution
__last_resolution_date__<br>_datetime_ | date of the last resolution
__resolution_time__<br>_integer_  | the total combined time answer_set was in the new, open, and on-hold statuses
__full_resolution_time__<br>_integer_  | duration between answer_set creation and its most recent resolution
__resolver_account__<br>_email_ | resolver email

### relationships

relationship          | description
------------------------------ | -------------
__survey__  | answer_set survey
__client__  | answer_set responder
__survey_language__  | answer_set survey_language
__choices__  | responder choices
__messages__ | feedback messages (from client and company)