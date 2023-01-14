document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.getElementById('avatar');
    const profileName = document.getElementById('profileName');
    const userName = document.getElementById('userName');
    const repositorios = document.getElementById('rep');
    const follower = document.getElementById('follower');
    const follow = document.getElementById('follow');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/21Johnn')
    .then(function(resposta){
        return resposta.json();
       
    })   
    .then(function(json){
        avatar.src = json.avatar_url;
        profileName.innerText = json.name;
        userName.innerText = '@' + json.login;
        repositorios.innerText = json.public_repos;
        follower.innerText = json.followers;
        follow.innerText = json.following;
        link.href = json.html_url;
    })
})