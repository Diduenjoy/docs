## GET `/users`

List all your users


```ruby--Rails
require 'rest-client'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/users",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute                                                         | description
------------------------------------------------------------------| -------------
__email__<br>_string_                                             | user email
__firstname__<br>_string_                                         | user firstname
__lastname__<br>_string_                                          | user lastname
__phone_number__<br>_string_                                      | user phone number
__user_role_type__<br>_enum_                                      | user role (admin, manager, custom)
__saml_enabled__<br>_boolean_                                     | user use a single sign
__custom_user_role_id__<br>_string_                               | user custom role id (If user_role_type is custom)
__language_id__<br>_string_                                       | user language id (default: Dashboard company language)
__segments__<br>_hash _{ segmentid: string&#124;array[string] }_  | user restricted segments values
__created_at__<br>_datetime_                                      | user creation date
__updated_at__<br>_datetime_                                      | user last modification date

### optional parameters "filter"

parameter          | description
------------- |-------------
__segments[segment-name]__<br>_array_ | filter users over segment value(s)
__email__<br>_string_ | filter users over the indicated emails (separated by commas)
