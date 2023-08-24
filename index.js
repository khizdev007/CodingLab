// const elements = document.querySelectorAll('.flex_team');
// const options = {
//     root:null,
//     rootMargin:'0px',
//     threshold:.4
// }

// const callbacks = (entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting){
//             entry.target.classList.add("active");
//         }
//     })
// };

// let observer = new IntersectionObserver(cb,options);
// elements.forEach(element =>{
//     observer.observe(element);
// })

// let firstName = document.querySelector('#firstName')
// let lastName = document.querySelector('#lastName')
// let email = document.querySelector('#email')
// let mobileNumber = document.querySelector('#mobileNumber')
// let date = document.querySelector('#date')
// // let memberCheckBox = document.querySelector('#memberCheckBox')
// const func = {
//     addNewMember(){
//         firstName = firstName.value
//         lastName = lastName.value
//         email = email.value
//         mobileNumber = mobileNumber.value
//         date = date.value

//         let member = {
//             name: firstName + lastName,
//             email: email,
//             mobileNumber: mobileNumber,
//             date: date,   
            
//         }
//         localStorage.setItem(member.name,JSON.stringify(member))
//         window.reload()
//         return
//     },
//     showMembers(){
        
//     }
// }