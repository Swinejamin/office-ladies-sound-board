export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f15b0bc1b668a79d5c68fa5',
                  title: 'Sanity Studio',
                  name: 'office-ladies-sound-board-studio',
                  apiId: 'f1aa2650-5013-4f60-843a-014f69743ec1'
                },
                {
                  buildHookId: '5f15b0bc1b668a5654c69427',
                  title: 'Office Ladies Sound Board',
                  name: 'office-ladies-sound-board',
                  apiId: 'be759867-a3cd-4ab8-bc7c-f366a76375c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Swinejamin/office-ladies-sound-board',
            category: 'Code'
          },
          {title: 'Frontend', value: '', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
