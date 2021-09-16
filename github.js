// https://github.com/settings/applications/1712139
class GitHub {
  constructor(params) {
    this.client_id = '90ff3356910b8ec268aa';
    this.client_secret = '19811e8b150d51fc606bf4c1908b773b733c79b7';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(name) {
    const profileResponse = await fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${name}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}