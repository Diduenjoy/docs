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
__resolved__<br>_boolean_ | equal "true" if the answer_set has been set to resolved
__dispatch_sent_at__<br>_datetime_  | sending date of the answer_set
__completed_at__<br>_datetime_  | answer completion date
__last_opening_date__<br>_datetime_ | last opening date of the answer_set
__first_resolution_date__<br>_datetime_ | date of the first resolution
__last_resolution_date__<br>_datetime_ | date of the last resolution
__resolution_time__<br>_integer_  | the total combined time answer_set was in the new, open, and on-hold statuses
__full_resolution_time__<br>_integer_  | duration between answer_set creation and its most recent resolution
__resolver_account__<br>_email_ | resolver email
__answers__<br>_array[hash]_ | answers ex: [<br>&nbsp;{<br>&nbsp;&nbsp;"label": "Short Comment",<br>&nbsp;&nbsp;"kind": "short_text_input",<br>&nbsp;&nbsp;"translations": {"ar": "Short Comment - ar","en": "Short Comment - en"},<br>&nbsp;&nbsp;"value": "short text"<br>&nbsp;},<br>&nbsp;{<br>&nbsp;&nbsp;"label": "NPS",<br>&nbsp;&nbsp;"kind": "rating",<br>&nbsp;&nbsp;"translations":{"ar": "NPS - ar","en": "NPS - en"},<br>&nbsp;&nbsp;"value": 8,<br>&nbsp;&nbsp;"rating_scale":{"min": "1","max": "10"}<br>&nbsp;},<br>&nbsp;{<br>&nbsp;&nbsp;"label": "Multi Select",<br>&nbsp;&nbsp;"kind": "multiple_select",<br>&nbsp;&nbsp;"translations":{"ar":"Multi Select - ar","en": "Multi Select - en"},<br>&nbsp;&nbsp;"value": ["A","B","C"]<br>&nbsp;}<br>]
__company_language__<br>_string_ | language of the company
__comment_translation__<br>_string_ | comment translated into company language
__profile__<br>_string_ | respondent profile ('detractor','passive','promoter','unknown')
__permalink__<br>_string_ | link to the answer_set in the dashboard messaging section.

### relationships

relationship          | description
------------------------------ | -------------
__survey__  | answer_set survey
__client__  | answer_set responder
__survey_language__  | answer_set survey_language
__choices__  | responder choices
__answers__  | responder answers
__feedback_tags__  | answer_set tags
__messages__ | feedback messages (from client and company)
