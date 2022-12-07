let profileNameInitials = document.getElementById("profile_name_initials");
let profileName = document.getElementById("profile_name").innerHTML;

profileName.split(" ").map(item => {
    profileNameInitials.innerHTML += item.charAt(0).toUpperCase();
})