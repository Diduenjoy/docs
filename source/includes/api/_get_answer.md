## GET `/answers/:id`

Get a single answer


```ruby--Rails
require 'rest-client'

answer_id = 'PUT-YOUR-ANSWER-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/answers/#{answer_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__value__<br>_string_ | value of the answer
__displayed_value__<br>_string_ | value of the answer displayed in the survey
__label__<br>_string_ | label of the related question
__step_relative_position__<br>_integer_ | relative position of the step in the survey
__element_relative_position__<br>_integer_ | relative position of the step in the survey
__kind__<br>_string_ | kind of the related question
__new_question_id__<br>_string_ | id of the related question
__localised_label__<br>_string_ | label of the related question translated into company language

### relationships

relationship          | description
------------------------------ | -------------
__answer_sets__  | answer answer_set
