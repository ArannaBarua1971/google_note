// mouse hover affect in line 30 (id::add_note)
const add_note_btn=document.getElementById('add_note');
const icon=document.getElementById('icon');

// add_note_btn.addEventListener('mouseenter',()=>{
//     icon.className='fa fa-arrow-right';
// })
// add_note_btn.addEventListener('mouseleave',()=>{
//     icon.className='fa fa-angle-right';
// })

// add note

const Notes= ()=>{
    let text='write something...';
    const note= document.createElement('div');
    note.classList.add('note');
    let noteHtml=`
        <div class="operation">
            <button class="edit btn btn-primary"><i class="fas fa-edit"></i></button>
            <button class="delete btn btn-danger"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text? "":"hidden"}"></div>
        <textarea class="${text? "hidden":""} "></textarea>
    `
    note.insertAdjacentHTML('afterbegin',noteHtml);
    document.body.querySelector('.note_section').appendChild(note);
    
    const edit=note.querySelector('.edit')
    const del=note.querySelector('.delete')
    const mainDiv=note.querySelector('.main')
    const textarea=note.querySelector('textarea')
    
    del.addEventListener('click',()=>{
        note.remove();
    })

    textarea.value=text;
    mainDiv.innerHTML=text;

    edit.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('change',(event)=>{
        const value =event.target.value;
        mainDiv.innerHTML=value;
    })
}

add_note_btn.addEventListener('click',Notes);