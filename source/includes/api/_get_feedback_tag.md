## GET `/feedback_tags/:id`

Get a single feedback_tag


```ruby--Rails
require 'rest-client'

feedback_tag_id = 'PUT-YOUR-FEEDBACK_TAG-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/feedback_tags/#{feedback_tag_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__tag_name__<br>_string_ | name of the related tag
__tag_id__<br>_string_ | id of the related tag
__tag_kind__<br>_string_ | kind of the related tag (tag, root_cause, action_taken)
__created_at__<br>_datetime_  | feedback_tag creation date
__feeling__<br>_string_ | feedback_tag feeling (positive, neutral, negative)
__auto__<br>_boolean_ | equal "true" if the feedback_tag has been automatically assigned

### relationships

relationship          | description
------------------------------ | -------------
__answer_sets__  | feedback_tag answer_set
