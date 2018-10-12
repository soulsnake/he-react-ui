import SingleSelect from '../';

const getUsers = (input: string) => {
  if (!input) {
    return Promise.resolve({ options: [] });
  }

  return fetch(`https://api.github.com/search/users?q=${input}`)
    .then(response => response.json())
    .then(json => ({
      options: json.items.map((hit: any) => ({
        label: hit.login,
        value: hit.id,
      })),
    }))
    .then(data => data);
};
export default {
  component: SingleSelect,
  formWrapper: { value: null },
  props: {
    id: 'demo',
    name: 'demo',
    loadOptionsAsync: getUsers,
  },
};
