## GET `/languages/:id`

Get a language available for survey responders

```ruby--Rails
require 'rest-client'

language_id = 'PUT-YOUR-LANGUAGE-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/languages/#{language_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__name__<br>_string_ | language name
__tag__<br>_string_ | language [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
__is_available_company_side__<br>_boolean_ | equal "true" if is available as Diduenjoy dashboard language else "false"
