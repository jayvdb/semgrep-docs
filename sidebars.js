/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //mySidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'Docs home',
    {
      type: 'category',
      label: 'Semgrep',
      items: [
        'getting-started',
        {
          type: 'category',
          label: 'Running rules',
          items: ['rules', 'running-rules', 'ignoring-findings', 'managing-findings'],
        },
        {
          type: 'category',
          label: 'Writing rules',
          items: ['writing-rules/overview', 'writing-rules/pattern-examples', 'writing-rules/pattern-syntax', 'writing-rules/rule-ideas', 'writing-rules/rule-syntax', 'writing-rules/testing-rules'],
        },
        'cli-usage',
        'extensions',
        'faq',
        'metrics',
      ],
    },
    {
      type: 'category',
      label: 'Semgrep CI',
      items: ['semgrep-ci/overview', 'semgrep-ci/configuration-reference', 'semgrep-ci/sample-ci-configs'],
    },
    {
      type: 'category',
      label: 'Semgrep App',
      items: ['semgrep-app/managing-policy', 'semgrep-app/notifications'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: ['troubleshooting/gitlab-sast', 'troubleshooting/rules', 'troubleshooting/semgrep-app'],
    },
    'language-support',
    'support',
    'trophy-case',
    'awesome',
    'contributing',
    {
      type: 'category',
      label: 'Cheat sheets',
      items: ['cheat-sheets/go-command-injection', 'cheat-sheets/flask-xss', 'cheat-sheets/django-xss', 'cheat-sheets/java-jsp-xss', 'cheat-sheets/rails-xss'],
    },
    'security'
  ],
};
