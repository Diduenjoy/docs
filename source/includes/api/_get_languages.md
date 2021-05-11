## GET `/languages`

List all languages available for survey responders

```ruby--Rails
require 'rest-client'

RestClient::Request.execute method: :get,
  url: 'https://api.diduenjoy.com/api/v1/languages',
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__name__<br>_string_ | language name
__comment__<br>_string_ | language [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
__is_available_company_side__<br>_boolean_ | equal "true" if is available as Diduenjoy dashboard language else "false"

### optional parameters "filters"

parameter          | description
------------- |-------------
__tag__<br>_array_  | filter over languages of the indicated tags
