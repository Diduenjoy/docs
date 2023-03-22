## PATCH `/users/:id`

Update a user

<blockquote class="lang-specific"><p>PATCH /api/v1/users/{USER_ID}</p></blockquote>

```json
{
  "data": {
    "type": "users",
    "attributes": {
      "email": "jhon.due@example.com",
      "firstname": "jhon",
      "lastname": "due",
      "saml_enabled": false,
      "user_role_type": "custom",
      "custom_user_role_id": "8836a1ef-1419-497f-960a-ef3024b0f8d4"
    }
  }
}
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
