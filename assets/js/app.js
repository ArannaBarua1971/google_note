// mouse hover affect in line 30 (id::add_note)
const add_note=document.getElementById('add_note');
const icon=document.getElementById('icon');

// add_note.addEventListener('mouseenter',()=>{
//     icon.className='fa fa-arrow-right';
// })
// add_note.addEventListener('mouseleave',()=>{
//     icon.className='fa fa-angle-right';
// })
const storeInlocalStorage=()=>{
    const textarea =document.querySelector('.note_section').querySelectorAll('textarea');
    let data=[];
    console.log(textarea);
    textarea.forEach((ele)=>{
        data.push(ele.value);
    })
    console.log(data);

    localStorage.setItem('notes',JSON.stringify(data));
}

// add note

const Notes=(text)=>{
    const note= document.createElement('div');
    note.classList.add('note');
    let noteHtml=`
        <div class="operation">
            <button class="edit btn btn-primary"><i class="fas fa-edit"></i></button>
            <button class="delete btn btn-danger"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text? "":"hidden"}"></div>
        <textarea class="para ${text? "hidden":""} "></textarea>
    `
    note.insertAdjacentHTML('afterbegin',noteHtml);
    document.body.querySelector('.note_section').appendChild(note);
    
    const edit=note.querySelector('.edit')
    const del=note.querySelector('.delete')
    const mainDiv=note.querySelector('.main')
    const textarea=note.querySelector('.para')
    
    del.addEventListener('click',()=>{
        note.remove();
        storeInlocalStorage();
    })

    textarea.value=text;
    mainDiv.innerHTML=text;
    console.log(text);

    edit.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('change',(event)=>{
        const value =event.target.value;
        mainDiv.innerHTML=value;
        storeInlocalStorage();
    })
}

const notes=JSON.parse(localStorage.getItem('notes'));

notes.forEach((ele)=> Notes(ele))

add_note.addEventListener('click',Notes);