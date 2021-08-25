## GET `/messages/:id`

Get a single message


```ruby--Rails
require 'rest-client'

message_id = 'PUT-YOUR-MESSAGE-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/messages/#{message_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__created_at__<br>_datetime_  | message creation date
__updated_at__<br>_datetime_  | message last modification date
__text__<br>_string_ | message text
__from_client__<br>_boolean_ | equal "true" if the message has been sent
__unread__<br>_boolean_ | equal "true" if the message has been read
__is_note__<br>_boolean_ | equal "true" if the message is a note
__author__<br>_string_ | author name and email address

### relationships

relationship          | description
------------------------------ | -------------
__feedback__  | message feedback