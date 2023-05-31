const github = new GitHub;
const ui = new UI;
//selecting the input 
const user = document.getElementById('searchUser');

//applying a keyup eventlistener
user.addEventListener('keyup', e => {
    //get the input text
    const userText = e.target.value;

    if (userText !== ''){
       github.getUser(userText)
       .then(data => {
        if(data.profile.message === 'Not Found'){
            //show alert
            ui.showAlert('User not found', 'alert alert-danger');
        }else{
            //show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
        }
       })
    }else{
        //clear profile
        ui.clearProfile();
    }
});