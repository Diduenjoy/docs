## POST `/easy_dispatches_without_validations`

Send a survey to a specified email address. In case provided parameters are not correct, no error is returned.

```ruby--Rails
require 'rest-client'

RestClient::Request.execute method: :post,
  url: 'https://api.diduenjoy.com/api/v1/easy_dispatches_without_validations',
  user: 'PUT-YOUR-API-KEY-HERE',
  headers: {
    content_type: 'application/json'
  },
  payload: {
    email: 'client@example.com', # or phone_number: '+336xxxxxxxx'
    survey_id: 'YOUR-SURVEY-ID-HERE',
    template_id: 'YOUR-TEMPLATE-ID-HERE',
    segments: {
      language: 'EN',
      scheduled_at: '2022-04-18 15:07:00',
      gender: 'Mister',
      name: 'Rick Sanchez',
      interests: 'Science',
    },
    dispatch_probability: 0.5
  }.to_json

# => {
#     "id": "DISPATCH-ID",
#     "email": "client@example.com", # or "phone_number": "+336xxxxxxxx"
#     "survey_id": "YOUR-SURVEY-ID-HERE",
#     "template_id": "YOUR-TEMPLATE-ID-HERE",
#     "segments": {
#       "language": "EN",
#       "scheduled_at": "2022-04-18 15:07:00",
#       "gender": "Mister",
#       "name": "Rick Sanchez",
#       "interests": "Science"
#     },
#      "dispatch_probability": 0.5
#   }
```

```php--php
$api_key = 'YOUR-API-KEY-HERE';
$survey_id = 'YOUR-SURVEY-ID-HERE';
$template_id = 'YOUR-TEMPLATE-ID-HERE',
$email = 'client@example.com'; // or $phone_number = '+336xxxxxxxx'
$date = '2022-04-18 15:07:00';

$payload = array(
  'email' => $email, // or 'phone_number' => $phone_number
  'survey_id' => $survey_id,
  'template_id' => $template_id,
  'segments' => array(
    'language' => 'EN',
    'scheduled_at' => $date,
    'gender' => 'Mister',
    'name' => 'Rick Sanchez',
    'interests' => 'Science'
  ),
  'dispatch_probability' => 0.5
);

$ch = curl_init('https://api.diduenjoy.com/api/v1/easy_dispatches_without_validations');

curl_setopt_array($ch, array(
    CURLOPT_POST => TRUE,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
    ),
    CURLOPT_USERPWD => "$api_key:",
    CURLOPT_HTTPAUTH => CURLAUTH_BASIC,
    CURLOPT_POSTFIELDS => json_encode($payload)
));

// Send the request
$response = curl_exec($ch);

// => {
//     "id": "DISPATCH-ID",
//     "email": "client@example.com", // or "phone_number":"+336xxxxxxxx"
//     "survey_id": "YOUR-SURVEY-ID-HERE",
//     "template_id": "YOUR-TEMPLATE-ID-HERE",
//     "segments": {
//       "language": "EN",
//       "scheduled_at": "2022-04-18 15:07:00",
//       "gender": "Mister",
//       "name": "Rick Sanchez",
//       "interests": "Science"
//     },
//    "dispatch_probability": 0.5
//   }
```

<aside class="notice lang-specific"><b>segments</b>
  <ul>
    <li><code>language</code> and <code>scheduled_at</code> are special segments.</li>
    <li><code>gender</code>, <code>name</code> and <code>interests</code> are user defined.</li>
</aside>


### attributes

attribute          |     | description
------------- | --- | -------------
__email__<br>_string_  | _either email or phone number or no_dispatch required_ | email address to which send the survey
__phone_number__<br>_string_  | _either email or phone number or no_dispatch required_ | phone number to which the survey will be send. The international format should be used (ex: +33)
__survey_id__<br>_string_  | _required_ | id of the survey
__template_id__<br>_string_  | _either template_id or no_dispatch required_| id of the template
__segments__<br>_hash { string: string }_ | | custom data associated with the survey
__dispatch_probability__<br>_string_ | | probability for the survey to be sent
__no_dispatch__<br>_boolean_ | | set it to disable sending of the survey and only create an new feedback that you could dispatch by your own means

### Segments

All segments are dynamically created, you can name them as you want.

There is 2 exceptions:

- `language` : if available, force the survey language, should be a ISO 639-1 code (https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
- `scheduled_at` : schedule the dispatch, should be formated as ISO 8601 (https://en.wikipedia.org/wiki/ISO_8601)

### Remarks
- The dispatch mode is specified by which of the parameters email or phone_number is set. One and only one of them should be specified
