// SHOW HIDDEN PASSWORD
const showHiddenPass = (inputPass, inputIcon) =>{
    const input = document.getElementById(inputPass),
    inconEye = document.getElementById(inputIcon)

    inconEye.addEventListener('click', () =>{

        //change password to text
        if(input.type === 'password'){
            
            //switch to text 
            input.type = 'text'

            //add icon
            inconEye.classList.add('ri-eye-2-line')

            //remove icon
            inconEye.classList.remove('ri-eye-close-line')
        }else{
            //mudar senha
            input.type = 'password'

            //remove icon
            inconEye.classList.remove('ri-eye-2-line')
            
            //add icon
            inconEye.classList.add('ri-eye-close-line')
        }
    } )
}

showHiddenPass('input-pass','input-icon')