export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6293e8070b696612265781a5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wwmc29q1',
                  apiId: 'f2095f6e-458f-4042-8512-9073ee7a4aef'
                },
                {
                  buildHookId: '6293e808302e9819a7b266a4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pk1n3fuw',
                  apiId: 'a0700cd6-0778-4d59-94dd-6359200521c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jasondiplex/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pk1n3fuw.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
