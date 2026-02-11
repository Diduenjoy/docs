import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  apiSidebar: [
    'index',
    'authentication',
    'convention',
    'google_star_rating',
    {
      type: 'category',
      label: 'API',
      items: [
        'api/index',
        'api/get_answer_set',
        'api/get_answer_sets',
        'api/post_answer_set',
        'api/put_answer_set',
        'api/patch_answer_set',
        'api/get_choice',
        'api/get_client',
        'api/get_clients',
        'api/post_client',
        'api/get_companies',
        'api/get_company',
        'api/get_language',
        'api/get_languages',
        'api/get_message',
        'api/post_message',
        'api/get_question',
        'api/get_answer',
        'api/get_feedback_tag',
        'api/get_tag',
        'api/get_tags',
        'api/get_root_cause',
        'api/get_root_causes',
        'api/get_action_taken',
        'api/get_action_takens',
        'api/get_survey_language',
        'api/get_survey',
        'api/get_surveys',
        'api/get_stats',
        'api/get_users',
        'api/get_user',
        'api/post_user',
        'api/patch_user',
        'api/delete_user',
        'api/get_user_roles',
        'api/get_user_role',
        'api/get_data_log',
        'api/get_data_logs',
        'api/get_data_requests',
        'api/patch_data_requests',
        'api/delete_data_requests',
      ],
    },
    {
      type: 'category',
      label: 'Easy Methods',
      items: [
        'easy_methods/index',
        'easy_methods/post_easy_dispatches',
        'easy_methods/post_easy_dispatches_without_validations',
      ],
    },
  ],
};

export default sidebars;
