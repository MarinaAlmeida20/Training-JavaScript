const btn = document.querySelector("button");

btn.addEventListener('click', updateBtn)

function updateBtn() 
{
    if (btn.textContent === 'Change Me!')
    {
        btn.textContent = 'Changed!';
    }
    else
    {
        btn.textContent = 'Change Me!';
    }
}

